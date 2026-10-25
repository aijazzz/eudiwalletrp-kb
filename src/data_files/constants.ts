import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'EUDI Wallet RP Knowledge Base',
  tagline: 'Accepting the EUDI Wallet? Start here.',
  description:
    'A friendly knowledge base for organisations that want to accept the European Digital Identity Wallet as relying parties.',
  description_short:
    'A knowledge base for EUDI Wallet relying parties.',
  url: 'https://eudiwalletrp.com',
  author: 'EUDI Wallet RP Knowledge Base',
  repo: 'https://github.com/aijazzz/eudiwalletrp-kb',
};

// Per-locale titles, descriptions and Open Graph text live in `src/copy/`;
// `src/utils/metadata.ts` assembles the <head> from them.
export const OG = {
  image: ogImageSrc,
};
