/**
 * SEO settings shared by the marketing pages, the Starlight docs and the
 * sitemap.
 *
 * NOINDEX_PATHS lists placeholder ("Coming soon") pages. They get
 * `<meta name="robots" content="noindex, follow">` and are left out of the
 * sitemap. Remove a path here once its page has real content.
 */
export const NOINDEX_PATHS: readonly string[] = [
  '/getting-started/',
  '/getting-started/overview/',
  '/getting-started/how-to-use/',
  '/glossary/',
  '/legal-regulatory/',
  '/legal-regulatory/eidas-2/',
  '/legal-regulatory/implementing-acts/',
  '/legal-regulatory/data-protection/',
  '/national-trackers/status-overview/',
  '/national-trackers/methodology/',
  '/registration-guide/who-needs-to-register/',
  '/registration-guide/after-registration/',
  '/technical-integration/credential-formats/',
  '/technical-integration/testing/',
];

const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

export function isNoindexPath(pathname: string): boolean {
  return NOINDEX_PATHS.includes(withSlash(pathname));
}

/** Social preview image (1200 × 630 PNG in /public). */
export const SOCIAL_IMAGE = {
  path: '/social.png',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'EUDI Wallet RP Knowledge Base: guidance for wallet-relying parties on registration, certificates and deadlines',
};

export const OG_LOCALE = 'en_US';

export const THEME_COLORS = {
  light: '#F2B33D',
  dark: '#0B1633',
};
