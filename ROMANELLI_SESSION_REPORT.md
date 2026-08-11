# Romanelli Studio — Deployment Session Report

**Date:** 2026-08-11  
**Operator:** Installer Agent  
**Repo:** `Ole00007/Romanelli-studio`  
**Live URL:** https://romanelli-studio.olesya00007.workers.dev

---

## Summary

Full audit site for Studio Legale Associato Romanelli deployed to Cloudflare Workers as static assets with Worker routing for root-URL support.

---

## Files Deployed

| File | Size | Purpose |
|------|------|---------|
| `index.html` | 64 KB | Main audit page (copy of web-site-0.3-…) |
| `web-site-0.3-audit-seo-aeo-geo-studio-romanelli.html` | 64 KB | Original long-name version |
| `style.css` | 14 KB | Stylesheet |
| `artefacts/*.png` | 7 images (~1 MB each) | AI-generated studio visuals (fal-ai/flux-2-klein) |
| `src/index.js` | Worker script | Routes `/` → `index.html`, other paths → assets |
| `wrangler.toml` | Config | Workers + static assets + binding |
| `package.json` | Config | `deploy` script: `npx wrangler deploy` |

---

## Versions

| Version | Deployment | Notes |
|---------|------------|-------|
| `015728b9` | Initial Worker deploy | Static assets without images |
| `6c109b14` | Added `.wranglerignore` | Cleaned up uploads |
| `3f093bbb` | index.html + style.css | Root URL still 404'd |
| `01784af8` | Worker script (src/index.js) | Root URL fixed |
| `f13ae04e` | Confirmed content | Duplicate of prior |
| `7b68c78a` | **Current live** | +7 artefacts/ images |

---

## Cloudflare Config

- **Type:** Workers with static assets
- **Binding:** `env.ASSETS`
- **Route:** `https://romanelli-studio.olesya00007.workers.dev`
- **CI build command:** `npm install && npm run deploy`

---

## Next Steps

1. Add custom domain (`studio-romanelli.it`) in Cloudflare Workers → Triggers → Custom Domains
2. Address sitemap issues identified in the audit (identical lastmod/priority)