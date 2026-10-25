# EUDI Wallet Relying Party Knowledge Base

Source for [eudiwalletrp.com](https://eudiwalletrp.com): a knowledge base for relying parties integrating with the European Digital Identity (EUDI) Wallet. Built with [Astro Starlight](https://starlight.astro.build).

## Development

Requires Node.js 22+.

```sh
npm ci
npm run dev     # local dev server
npm run build   # static build to ./dist
```

Content lives in `src/content/docs/`; the sidebar is configured in `astro.config.mjs`.

## Deployment

Pushes to `main` build and deploy to Cloudflare Pages (project `eudiwalletrp-kb`) via `.github/workflows/deploy.yml`.
