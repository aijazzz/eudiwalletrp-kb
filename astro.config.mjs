import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

const SITE_URL = 'https://eudiwalletrp.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  prefetch: true,
  integrations: [
    sitemap(),
    starlight({
      title: 'EUDI Wallet RP Knowledge Base',
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Section home', slug: 'getting-started' },
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'How to use this site', slug: 'getting-started/how-to-use' },
          ],
        },
        {
          label: 'Registration guide',
          items: [
            { label: 'Section home', slug: 'registration-guide' },
            { label: 'Who needs to register', slug: 'registration-guide/who-needs-to-register' },
            { label: 'The registration process', slug: 'registration-guide/registration-process' },
            { label: 'After you register', slug: 'registration-guide/after-registration' },
          ],
        },
        {
          label: 'National trackers',
          items: [
            { label: 'Section home', slug: 'national-trackers' },
            { label: 'Status overview', slug: 'national-trackers/status-overview' },
            { label: 'Member-state profiles', slug: 'national-trackers/member-states' },
            { label: 'How we track', slug: 'national-trackers/methodology' },
          ],
        },
        {
          label: 'Legal & regulatory',
          items: [
            { label: 'Section home', slug: 'legal-regulatory' },
            { label: 'eIDAS 2.0 at a glance', slug: 'legal-regulatory/eidas-2' },
            { label: 'Implementing acts', slug: 'legal-regulatory/implementing-acts' },
            { label: 'Data protection', slug: 'legal-regulatory/data-protection' },
          ],
        },
        {
          label: 'Technical integration',
          items: [
            { label: 'Section home', slug: 'technical-integration' },
            { label: 'OpenID4VP', slug: 'technical-integration/openid4vp' },
            { label: 'Credential formats', slug: 'technical-integration/credential-formats' },
            { label: 'Testing your integration', slug: 'technical-integration/testing' },
          ],
        },
        { label: 'Glossary', slug: 'glossary' },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/aijazzz/eudiwalletrp-kb',
        },
      ],
      disable404Route: true,
      customCss: ['./src/assets/styles/starlight.css'],
      favicon: '/favicon.ico',
      components: {
        SiteTitle: './src/components/ui/starlight/SiteTitle.astro',
        Head: './src/components/ui/starlight/Head.astro',
        MobileMenuFooter:
          './src/components/ui/starlight/MobileMenuFooter.astro',
        ThemeSelect: './src/components/ui/starlight/ThemeSelect.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: SITE_URL + '/social.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: SITE_URL + '/social.png' },
        },
      ],
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
