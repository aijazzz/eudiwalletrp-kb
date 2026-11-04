/**
 * Navigation structure: stable ids and paths. Labels live in the copy table
 * (`copy.nav.labels`, `copy.nav.footer`).
 */
import { SITE } from './constants';

export type NavLinkId =
  | 'home'
  | 'check'
  | 'gettingStarted'
  | 'registration'
  | 'trackers'
  | 'legal'
  | 'technical'
  | 'glossary';

export const navLinks: { id: NavLinkId; path: string }[] = [
  { id: 'home', path: '/' },
  { id: 'check', path: '/check/' },
  { id: 'gettingStarted', path: '/getting-started/' },
  { id: 'registration', path: '/registration-guide/' },
  { id: 'trackers', path: '/national-trackers/' },
  { id: 'legal', path: '/legal-regulatory/' },
  { id: 'technical', path: '/technical-integration/' },
  { id: 'glossary', path: '/glossary/' },
];

export type FooterSectionId = 'guides' | 'project';
export type FooterLinkId =
  | 'gettingStarted'
  | 'registration'
  | 'trackers'
  | 'legal'
  | 'technical'
  | 'glossary'
  | 'source';

export const footerSections: {
  id: FooterSectionId;
  links: { id: FooterLinkId; path: string }[];
}[] = [
  {
    id: 'guides',
    links: [
      { id: 'gettingStarted', path: '/getting-started/' },
      { id: 'registration', path: '/registration-guide/' },
      { id: 'trackers', path: '/national-trackers/' },
    ],
  },
  {
    id: 'project',
    links: [
      { id: 'legal', path: '/legal-regulatory/' },
      { id: 'technical', path: '/technical-integration/' },
      { id: 'glossary', path: '/glossary/' },
      { id: 'source', path: SITE.repo },
    ],
  },
];

export const socialLinks = {
  github: SITE.repo,
};
