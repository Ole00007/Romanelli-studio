# Romanelli Studio — Manual Deploy Guide

## Prerequisites

- Node.js installed
- Cloudflare Workers API token (write permission for Workers + Pages)

---

## One-Time Setup

```bash
# Clone the repo (if not already local)
cd ~
git clone https://github.com/Ole00007/Romanelli-studio.git
cd Romanelli-studio

# Install dependencies
npm install
```

---

## Deploy

### Option A: Via API Token (recommended)

```bash
cd ~/Romanelli-studio
CLOUDFLARE_API_TOKEN="your_token_here" npx wrangler deploy
```

### Option B: Via Wrangler Login

```bash
cd ~/Romanelli-studio
npx wrangler login    # opens browser to authenticate
npx wrangler deploy
```

---

## Update Content

1. Edit `web-site-0.3-audit-seo-aeo-geo-studio-romanelli.html` (or `index.html`)
2. Run deploy command above
3. Verify at https://romanelli-studio.olesya00007.workers.dev/

---

## Update Images

1. Replace files in `artefacts/` folder
2. Run deploy command
3. Verify at https://romanelli-studio.olesya00007.workers.dev/artefacts/<filename>

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Root URL returns 404 | Make sure `src/index.js` is present and `wrangler.toml` has `main = "src/index.js"` |
| Images not loading | Check `artefacts/` folder exists and files are named correctly in the HTML |
| `CLOUDFLARE_API_TOKEN` auth error | Regenerate token in Cloudflare Dashboard with Workers + Pages write permissions |
| Wrangler not found | Run `npm install` first |