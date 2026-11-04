# EUDI Wallet Relying Party Knowledge Base

Source for [eudiwalletrp.com](https://eudiwalletrp.com): a knowledge base for relying parties integrating with the European Digital Identity (EUDI) Wallet.

Built with [Astro](https://astro.build), [Starlight](https://starlight.astro.build) (docs), [Tailwind CSS](https://tailwindcss.com) and [Preline UI](https://preline.co), on top of the [ScrewFast](https://github.com/mearashadowfax/ScrewFast) template.

## Development

Requires Node.js 22.23.4+ (see `.nvmrc`).

```sh
npm ci
npm run dev     # local dev server
npm run build   # astro check + static build to ./dist + HTML minification
```

- Homepage: `src/views/HomeView.astro`, with copy in `src/copy/en.ts`.
- Navigation and footer links: `src/data_files/navigation.ts`.
- Docs content: `src/content/docs/`. The sidebar is configured in `astro.config.mjs`.

The site loads no third-party fonts, CDNs, analytics, comments or form services. Cloudflare Web Analytics is injected by Cloudflare Pages.

## Deployment

Pushes to `main` build and deploy to Cloudflare Pages (project `eudiwalletrp-kb`) via `.github/workflows/deploy.yml`. Security headers are in `public/_headers`.

## Credits and licence

The site design and component code are derived from **ScrewFast** by Emil Gulamov (<https://github.com/mearashadowfax/ScrewFast>), used under the MIT License. The original copyright and permission notice is kept in [`LICENSE`](LICENSE).

All ScrewFast demo content (company branding, products, blog posts, testimonials, pricing, images and translations) has been removed.
