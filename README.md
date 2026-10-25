# EUDI Wallet Relying Party Knowledge Base

Source for [eudiwalletrp.com](https://eudiwalletrp.com): a knowledge base for relying parties integrating with the European Digital Identity (EUDI) Wallet. Built with [Astro Starlight](https://starlight.astro.build).

## Development

Requires Node.js 22.23.4+ (see `.nvmrc`).

```sh
npm ci
npm run dev     # local dev server
npm run build   # static build to ./dist
```

Content lives in `src/content/docs/`; the sidebar is configured in `astro.config.mjs`.

## Deployment

Pushes to `main` build and deploy to Cloudflare Pages (project `eudiwalletrp-kb`) via `.github/workflows/deploy.yml`.

## Design

Card-based landing pages on top of Starlight (custom `Header`, `SiteTitle` and `Hero` overrides plus `TaskCard`/`TaskCardGrid` components in `src/components/`). Brand theme in `src/styles/custom.css`:

- Primary: Union Blue `#1E3A8A` (dark mode accent `#5B82EC`)
- Warm accent: Marigold `#F2B33D`
- Font: [Figtree](https://github.com/erikdkennedy/figtree) (SIL OFL), self-hosted via `@fontsource-variable/figtree`, with a `system-ui` fallback
