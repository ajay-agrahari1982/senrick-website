const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

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
    if (!ANTHROPIC_API_KEY) {
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
    // Only forward role/content — never trust/forward anything else from the client
    const cleanMessages = messages
      .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8)
      .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }));
    if (!cleanMessages.length) {
      return res.status(400).json({ error: 'bad_request' });
    }

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        messages: cleanMessages,
      }),
    });

    if (!upstream.ok) {
      const errBody = await upstream.text().catch(() => '');
      console.error('Anthropic API error', upstream.status, errBody);
      if (upstream.status === 429) return res.status(429).json({ error: 'rate_limited' });
      return res.status(502).json({ error: 'upstream_error' });
    }

    const data = await upstream.json();
    const text = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
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
  console.log('Chat API: ' + (ANTHROPIC_API_KEY ? 'configured' : 'NOT CONFIGURED — set ANTHROPIC_API_KEY'));
});
