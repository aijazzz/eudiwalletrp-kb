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
			customCss: ['@fontsource-variable/figtree', './src/styles/custom.css'],
			components: {
				Header: './src/components/Header.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				Hero: './src/components/Hero.astro',
			},
			// No ads or third-party tracking. Cloudflare Web Analytics is injected by Cloudflare Pages
			// (enabled in the dashboard); fonts are self-hosted via @fontsource.
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Overview', slug: 'getting-started/overview' },
						{ label: 'How to use this site', slug: 'getting-started/how-to-use' },
					],
				},
				{
					label: 'Registration guide',
					items: [
						{ label: 'Who needs to register', slug: 'registration-guide/who-needs-to-register' },
						{ label: 'The registration process', slug: 'registration-guide/registration-process' },
						{ label: 'After you register', slug: 'registration-guide/after-registration' },
					],
				},
				{
					label: 'National trackers',
					items: [
						{ label: 'Status overview', slug: 'national-trackers/status-overview' },
						{ label: 'Member-state profiles', slug: 'national-trackers/member-states' },
						{ label: 'How we track', slug: 'national-trackers/methodology' },
					],
				},
				{
					label: 'Legal & regulatory',
					items: [
						{ label: 'eIDAS 2.0 at a glance', slug: 'legal-regulatory/eidas-2' },
						{ label: 'Implementing acts', slug: 'legal-regulatory/implementing-acts' },
						{ label: 'Data protection', slug: 'legal-regulatory/data-protection' },
					],
				},
				{
					label: 'Technical integration',
					items: [
						{ label: 'OpenID4VP', slug: 'technical-integration/openid4vp' },
						{ label: 'Credential formats', slug: 'technical-integration/credential-formats' },
						{ label: 'Testing your integration', slug: 'technical-integration/testing' },
					],
				},
				{ label: 'Glossary', slug: 'glossary' },
			],
		}),
	],
});
