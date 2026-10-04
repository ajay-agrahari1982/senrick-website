const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = 'gemini-3.8-flash';
const GEMINI_FALLBACK_MODEL = 'gemini-3.1-flash-lite';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.use(express.json({ limit: '200kb' }));

/* ---------- Enquiries inbox ----------
   DATA_DIR should point at a Railway Volume (Settings -> Volumes) so submissions
   survive redeploys. Without one, this still works but resets whenever the
   service redeploys — fine for testing, not for real use. */
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

function loadEnquiries() {
  try {
    return JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}
function saveEnquiry(entry) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const all = loadEnquiries();
  all.push(entry);
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(all, null, 2));
}
function checkAdminAuth(req) {
  if (!ADMIN_PASSWORD) return false;
  const supplied = req.headers['x-admin-password'] || (req.query && req.query.password) || '';
  // Constant-time-ish comparison to avoid trivial timing attacks
  const a = Buffer.from(String(supplied));
  const b = Buffer.from(String(ADMIN_PASSWORD));
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/* ---------- Push notification on every new enquiry, via ntfy.sh (free, no account) ---------- */
const NTFY_TOPIC = 'senrick-dqz9mX4k2p';
const SOURCE_LABELS = { booking: 'New booking', chat: 'Chat question', academy: 'Academy enquiry' };
async function notifyNtfy(entry) {
  try {
    const title = SOURCE_LABELS[entry.source] || 'New website enquiry';
    const lines = [];
    if (entry.name) lines.push(entry.name);
    if (entry.phone) lines.push(entry.phone);
    if (entry.message) lines.push(entry.message);
    await fetch('https://ntfy.sh/' + NTFY_TOPIC, {
      method: 'POST',
      headers: { 'Title': title, 'Priority': 'high', 'Tags': 'bell' },
      body: lines.join('\n') || 'New enquiry received.',
    });
  } catch (e) {
    console.error('ntfy notify failed', e); // never let a notification failure break the save
  }
}

app.post('/api/enquiry', async (req, res) => {
  try {
    const b = req.body || {};
    const source = typeof b.source === 'string' ? b.source.slice(0, 60) : 'unknown';
    const name = typeof b.name === 'string' ? b.name.slice(0, 120) : '';
    const phone = typeof b.phone === 'string' ? b.phone.slice(0, 30) : '';
    const message = typeof b.message === 'string' ? b.message.slice(0, 2000) : '';
    const meta = (b.meta && typeof b.meta === 'object') ? b.meta : {};
    if (!name && !phone && !message) {
      return res.status(400).json({ error: 'bad_request' });
    }
    const entry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      source, name, phone, message, meta,
    };
    saveEnquiry(entry);
    res.json({ ok: true }); // respond right away — don't make the visitor wait on the notification
    notifyNtfy(entry);
  } catch (e) {
    console.error('enquiry save error', e);
    res.status(500).json({ error: 'server_error' });
  }
});

app.get('/api/admin/enquiries', (req, res) => {
  if (!checkAdminAuth(req)) return res.status(401).json({ error: 'unauthorized' });
  const all = loadEnquiries().slice().reverse(); // newest first
  res.json({ enquiries: all });
});

app.get('/admin', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(ADMIN_PAGE_HTML);
});

/* ---------- Legacy URL redirects (carried over from serve.json) ---------- */
app.get('/contact-5', (req, res) => res.redirect(301, '/contact'));
app.get('/cart-page', (req, res) => res.redirect(301, '/shop'));

/* ---------- Very basic in-memory rate limit for the chat endpoint ----------
   Not distributed / resets on restart — adequate for this site's traffic.
   Protects the Anthropic API key from abuse (each call costs money). */
const rateLimit = new Map(); // ip -> [timestamps]
const RATE_LIMIT_MAX = 15;       // requests
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // per 5 minutes
function isRateLimited(ip) {
  const now = Date.now();
  const hits = (rateLimit.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateLimit.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

/* ---------- Chat API: proxies to Anthropic so the API key never reaches the browser ---------- */
app.post('/api/chat', async (req, res) => {
  try {
    if (!GEMINI_API_KEY) {
      return res.status(503).json({ error: 'not_configured' });
    }
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'rate_limited' });
    }

    const messages = Array.isArray(req.body && req.body.messages) ? req.body.messages : null;
    if (!messages || !messages.length) {
      return res.status(400).json({ error: 'bad_request' });
    }
    // Only forward role/content — never trust/forward anything else from the client.
    // Convert to Gemini's shape: role 'assistant' -> 'model', content -> parts:[{text}]
    const cleanMessages = messages
      .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8)
      .map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content.slice(0, 4000) }],
      }));
    if (!cleanMessages.length) {
      return res.status(400).json({ error: 'bad_request' });
    }

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function callGemini(model) {
      return fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: cleanMessages,
            generationConfig: { maxOutputTokens: 300 },
          }),
        }
      );
    }

    // Try the primary model, retrying briefly on "temporarily overloaded" (503).
    // If still overloaded after retries, fall back to a more established model
    // before giving up — a busy moment on Google's side shouldn't reach the visitor.
    let upstream = await callGemini(GEMINI_MODEL);
    if (upstream.status === 503) { await sleep(600); upstream = await callGemini(GEMINI_MODEL); }
    if (upstream.status === 503) { await sleep(1500); upstream = await callGemini(GEMINI_MODEL); }
    if (upstream.status === 503) { upstream = await callGemini(GEMINI_FALLBACK_MODEL); }

    if (!upstream.ok) {
      const errBody = await upstream.text().catch(() => '');
      console.error('Gemini API error', upstream.status, errBody);
      if (upstream.status === 429) return res.status(429).json({ error: 'rate_limited' });
      if (upstream.status === 503) return res.status(503).json({ error: 'upstream_busy' });
      return res.status(502).json({ error: 'upstream_error' });
    }

    const data = await upstream.json();
    const text = (((data.candidates || [])[0] || {}).content || { parts: [] }).parts
      .map(p => p.text || '')
      .join('')
      .trim();

    res.json({ text });
  } catch (e) {
    console.error('chat endpoint error', e);
    res.status(500).json({ error: 'server_error' });
  }
});

const ADMIN_PAGE_HTML = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Senrick — Enquiries Inbox</title>
<style>
  body{font-family:-apple-system,Arial,sans-serif;background:#0c0c0c;color:#f4f1ea;max-width:900px;margin:0 auto;padding:24px 16px 60px;}
  h1{font-size:1.4rem;margin-bottom:4px;} .sub{color:rgba(244,241,234,.6);font-size:.85rem;margin-bottom:24px;}
  #gate{display:flex;gap:8px;margin-bottom:24px;}
  input[type=password]{flex:1;padding:10px 12px;background:#141414;border:1px solid rgba(244,241,234,.2);color:#f4f1ea;font-size:16px;}
  button{padding:10px 18px;background:#c9a13b;color:#0c0c0c;border:none;font-weight:700;cursor:pointer;}
  #list{display:none;}
  .card{border:1px solid rgba(244,241,234,.15);padding:14px 16px;margin-bottom:12px;}
  .card .top{display:flex;justify-content:space-between;font-size:.78rem;color:rgba(244,241,234,.55);margin-bottom:8px;}
  .card .source{color:#c9a13b;text-transform:uppercase;letter-spacing:.04em;font-weight:700;}
  .card .name{font-weight:700;font-size:1.05rem;}
  .card .phone a{color:#c9a13b;}
  .card .message{margin-top:6px;color:rgba(244,241,234,.85);white-space:pre-wrap;}
  .empty{color:rgba(244,241,234,.5);padding:40px 0;text-align:center;}
  .err{color:#e07a6b;font-size:.85rem;margin-top:8px;}
</style></head>
<body>
  <h1>Enquiries Inbox</h1>
  <div class="sub">Every booking, chat question and Academy enquiry from the website, newest first.</div>
  <div id="gate">
    <input type="password" id="pw" placeholder="Admin password" autocomplete="current-password">
    <button onclick="load()">View</button>
  </div>
  <div class="err" id="err"></div>
  <div id="list"></div>
  <script>
    async function load(){
      const pw = document.getElementById('pw').value;
      const err = document.getElementById('err'); err.textContent='';
      try{
        const res = await fetch('/api/admin/enquiries', { headers: { 'x-admin-password': pw } });
        if(!res.ok){ err.textContent = res.status===401 ? 'Wrong password.' : 'Something went wrong.'; return; }
        const data = await res.json();
        try{ sessionStorage.setItem('senrick_admin_pw', pw); }catch(e){}
        render(data.enquiries || []);
      }catch(e){ err.textContent = 'Could not reach the server.'; }
    }
    function render(items){
      document.getElementById('gate').style.display='none';
      const list = document.getElementById('list');
      list.style.display='block';
      if(!items.length){ list.innerHTML = '<div class="empty">No enquiries yet.</div>'; return; }
      list.innerHTML = items.map(it => {
        const d = new Date(it.createdAt);
        const when = d.toLocaleString('en-IN', { dateStyle:'medium', timeStyle:'short' });
        return '<div class="card">'
          + '<div class="top"><span class="source">' + esc(it.source) + '</span><span>' + when + '</span></div>'
          + (it.name ? '<div class="name">' + esc(it.name) + '</div>' : '')
          + (it.phone ? '<div class="phone">📞 <a href="tel:' + esc(it.phone) + '">' + esc(it.phone) + '</a></div>' : '')
          + (it.message ? '<div class="message">' + esc(it.message) + '</div>' : '')
          + '</div>';
      }).join('');
    }
    function esc(s){ const d=document.createElement('div'); d.textContent = s==null?'':String(s); return d.innerHTML; }
    // Re-use the password for this tab session so a refresh doesn't force re-entry
    (function(){
      try{
        const saved = sessionStorage.getItem('senrick_admin_pw');
        if(saved){ document.getElementById('pw').value = saved; load(); }
      }catch(e){}
    })();
    document.getElementById('pw').addEventListener('keydown', e=>{ if(e.key==='Enter') load(); });
  </script>
</body></html>`;

/* ---------- Static files (site, assets, the pre-rendered AI-visibility pages) ---------- */
app.use(express.static(__dirname, { extensions: ['html'] }));

/* ---------- SPA fallback: any other real route (client-side router handles it) ---------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Senrick website server running on port ' + PORT);
  console.log('Chat API: ' + (GEMINI_API_KEY ? 'configured' : 'NOT CONFIGURED — set GEMINI_API_KEY'));
});
