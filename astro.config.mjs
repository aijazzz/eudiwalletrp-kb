// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://eudiwalletrp.com',
	integrations: [
		starlight({
			title: 'EUDI Wallet Relying Party Knowledge Base',
			description:
				'A knowledge base for relying parties integrating with the European Digital Identity (EUDI) Wallet.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/aijazzz/eudiwalletrp-kb' },
			],
			// No ads or third-party tracking. Cloudflare Web Analytics (privacy-first) may be added here
			// via a `head` entry once a site token is available.
			sidebar: [
				{
					label: 'Getting started',
					items: [{ label: 'Overview', slug: 'getting-started/overview' }],
				},
				{ label: 'Registration guide', slug: 'registration-guide' },
				{ label: 'National trackers', slug: 'national-trackers' },
				{ label: 'Legal & regulatory', slug: 'legal-regulatory' },
				{ label: 'Technical integration', slug: 'technical-integration' },
				{ label: 'Glossary', slug: 'glossary' },
			],
		}),
	],
});
