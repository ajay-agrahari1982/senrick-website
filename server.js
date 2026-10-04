const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = 'gemini-3.8-flash';

app.use(express.json({ limit: '200kb' }));

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

    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
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

    if (!upstream.ok) {
      const errBody = await upstream.text().catch(() => '');
      console.error('Gemini API error', upstream.status, errBody);
      if (upstream.status === 429) return res.status(429).json({ error: 'rate_limited' });
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
