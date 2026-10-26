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
      check: 'Check',
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
    banner: {
      line: 'EUDI Wallet can help your business. Are you ready to become a Relying Party?',
      sub: 'Answer a few short questions to see whether eIDAS requires you to accept the European Digital Identity Wallet. It runs entirely in your browser and nothing is stored.',
      btn: 'Check if you must',
      knowLink: 'I already know I must',
      imageAlt:
        'Illustration of a digital wallet sharing a verified credential with a service',
    },
    tasks: {
      title: 'Already know you must? Start here.',
      subTitle:
        'Every relying party registers in the Member State where it is established before relying on the wallet. These guides walk you through registration, certificates and what comes next.',
      items: [
        {
          heading: 'Who needs to register',
          content:
            'Check which organisations count as relying parties and must register under Article 5b.',
          svg: 'question',
          url: '/registration-guide/who-needs-to-register/',
        },
        {
          heading: 'Register as a relying party',
          content: 'The registration process with your national registrar, step by step.',
          svg: 'verified',
          url: '/registration-guide/registration-process/',
        },
        {
          heading: 'Certificates and next steps',
          content:
            'Access and registration certificates, and what to keep up to date after you register.',
          svg: 'checkCircle',
          url: '/registration-guide/after-registration/',
        },
        {
          heading: 'Implementing acts',
          content:
            'The implementing regulations behind registration, certificates and wallet integration.',
          svg: 'books',
          url: '/legal-regulatory/implementing-acts/',
        },
        {
          heading: 'Technical integration',
          content:
            'Connect your service using OpenID4VP and related standards.',
          svg: 'puzzle',
          url: '/technical-integration/',
        },
        {
          heading: 'National trackers',
          content: 'Registrars and implementation status across EU Member States.',
          svg: 'earth',
          url: '/national-trackers/member-states/',
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
