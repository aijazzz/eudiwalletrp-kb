/**
 * English copy table (the only marketing locale). `Copy` in `./index.ts` is
 * the shape of this table.
 *
 * Paths are unlocalised; callers run them through `localePath()` from
 * `@utils/locale`.
 */
export const en = {
  site: {
    /** Default `<meta name="description">` when a page sets none. */
    description:
      'A friendly knowledge base for organisations that want to accept the European Digital Identity Wallet as relying parties.',
    /** schema.org `WebSite.description` in every page's `isPartOf`. */
    descriptionShort: 'A knowledge base for EUDI Wallet relying parties.',
    ogTitle: 'EUDI Wallet RP Knowledge Base',
    ogDescription:
      'A friendly knowledge base for organisations that want to accept the European Digital Identity Wallet as relying parties.',
  },

  layout: {
    skipToContent: 'Skip to content',
    changeLanguage: 'Change language',
    toggleNavigation: 'Toggle navigation',
    darkTheme: 'Dark Theme Toggle',
    lightTheme: 'Light Theme Toggle',
    toggleTheme: 'Toggle theme',
  },

  nav: {
    /** Labels for `navLinks` in `@data/navigation`, keyed by id. */
    labels: {
      home: 'Home',
      gettingStarted: 'Getting started',
      registration: 'Registration',
      trackers: 'Trackers',
      legal: 'Legal',
      technical: 'Technical',
      glossary: 'Glossary',
    },
    footer: {
      sectionTitles: {
        guides: 'Guides',
        project: 'Reference',
      },
      links: {
        gettingStarted: 'Getting started',
        registration: 'Registration guide',
        trackers: 'National trackers',
        legal: 'Legal & regulatory',
        technical: 'Technical integration',
        glossary: 'Glossary',
        source: 'Source on GitHub',
      },
      aboutTitle: 'About this site',
      aboutContent:
        'An independent knowledge base for relying parties of the European Digital Identity Wallet. Content is being prepared and will be published section by section.',
      builtWith: 'Site design based on the',
      template: 'ScrewFast',
      templateBy: 'template by Emil Gulamov (MIT licence).',
    },
  },

  notFound: {
    title: 'Page Not Found',
    subTitle: "We couldn't find that page.",
    content:
      'The page may have moved, or it may not have been published yet. Head back to the homepage to find what you need.',
    goHome: 'Go Home',
    goBack: 'Go Back',
  },

  home: {
    hero: {
      title:
        'Accepting the EUDI Wallet? <span class="text-yellow-500 dark:text-yellow-400">Start here.</span>',
      subTitle:
        'A friendly knowledge base for organisations that want to accept the European Digital Identity Wallet as relying parties.',
      primaryBtn: 'Get started',
      secondaryBtn: 'Browse the glossary',
      imageAlt:
        'Illustration of a digital wallet sharing a verified credential with a service',
    },
    tasks: {
      title: 'What do you need to do?',
      subTitle:
        'Pick a topic to jump straight to the relevant guides. Each section is being prepared and will be published here.',
      items: [
        {
          heading: 'Getting started',
          content:
            'New here? Learn what this knowledge base covers and how to use it.',
          svg: 'rocket',
          url: '/getting-started/',
        },
        {
          heading: 'Register as a relying party',
          content: 'Guidance on relying party registration, step by step.',
          svg: 'verified',
          url: '/registration-guide/',
        },
        {
          heading: 'National trackers',
          content: 'Follow implementation status across EU member states.',
          svg: 'earth',
          url: '/national-trackers/',
        },
        {
          heading: 'Legal & regulatory',
          content:
            'Understand eIDAS 2.0 and related rules in plain language.',
          svg: 'books',
          url: '/legal-regulatory/',
        },
        {
          heading: 'Technical integration',
          content:
            'Connect your service using OpenID4VP and related standards.',
          svg: 'puzzle',
          url: '/technical-integration/',
        },
        {
          heading: 'Glossary',
          content: 'Look up the key terms used across this knowledge base.',
          svg: 'guides',
          url: '/glossary/',
        },
      ],
    },
    heroAlt: {
      title: 'Open and independent',
      subTitle:
        'The source of this knowledge base is public on GitHub. Suggestions and corrections are welcome.',
      btn: 'View on GitHub',
    },
  },
};
