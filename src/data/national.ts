/**
 * National notes for the /check/ self-assessment.
 *
 * Every entry cites at least one source and the date it was last checked.
 * `status: 'confirmed'` means the registrar for EUDI Wallet relying parties
 * (Article 5b of Regulation (EU) No 910/2014, as amended, and Implementing
 * Regulation (EU) 2025/848) is named in an adopted or published national act.
 * Everything else is `'unconfirmed'`: the page then shows the neutral
 * "national details not yet confirmed" wording and, where one is known, the
 * authority to check with. Do not upgrade an entry without a primary source.
 */

export type NationalStatus = 'confirmed' | 'unconfirmed';

export interface NationalSource {
  label: string;
  url: string;
}

export interface NationalEntry {
  /** ISO 3166-1 alpha-2 code (EL for Greece is not used here). */
  code: string;
  name: string;
  status: NationalStatus;
  /** Registrar of wallet-relying parties, only when confirmed by a source. */
  registrar?: string;
  /** Who to check with when the registrar is not confirmed. */
  checkWith?: string;
  /** National wallet, as named by an official source. */
  wallet?: string;
  /** Short, sourced notes. Plain text. */
  notes: string[];
  sources: NationalSource[];
  /** ISO date (YYYY-MM-DD) the sources were last checked. */
  lastChecked: string;
}

const CHECKED = '2026-10-26';

export const nationalEntries: NationalEntry[] = [
  {
    code: 'AT',
    name: 'Austria',
    status: 'unconfirmed',
    checkWith: 'the Federal Chancellery (Bundeskanzleramt), which runs ID Austria',
    wallet: 'An EUDI Wallet developed from ID Austria (no final name or date published)',
    notes: [
      'In a July 2026 answer to Parliament, the Federal Chancellor said Austria will introduce an EUDI Wallet step by step with pilots, and will keep existing ID Austria service providers interoperable.',
      'No national registrar for wallet-relying parties was named in the sources checked.',
    ],
    sources: [
      {
        label: 'Parliamentary answer 5451/AB (XXVIII. GP), 7 July 2026',
        url: 'https://www.parlament.gv.at/dokument/XXVIII/AB/5451/imfname_1769922.pdf',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'BE',
    name: 'Belgium',
    status: 'unconfirmed',
    checkWith: 'FPS Policy and Support (BOSA)',
    wallet: 'MyGov.be app, published by FPS Policy and Support (BOSA)',
    notes: [
      'No national registrar for wallet-relying parties was named in the official sources checked.',
    ],
    sources: [
      { label: 'MyGov.be (FPS BOSA)', url: 'https://bdiw.bosa.belgium.be/' },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'DE',
    name: 'Germany',
    status: 'unconfirmed',
    registrar: 'Bundesverwaltungsamt (BVA), per the bill',
    checkWith: 'the Bundesverwaltungsamt (BVA) or the Federal Ministry for Digital Transformation and Government Modernisation (BMDS)',
    wallet: '"d-you", the state EUDI Wallet (start on 2 January 2027 as referred to in the Bundestag resolution)',
    notes: [
      'The Bundestag passed the Digital Identities Act (DIdG, Drucksache 21/7408) on 15 October 2026. The bill names the Bundesverwaltungsamt as registrar for wallet-relying parties (Section 2(2) no. 2 and Section 10). The Bundesrat stage and promulgation were not confirmed, so the act is not yet treated as in force here. The committee version (Drucksache 21/8617) adds an "orchestrator" that may carry out some of these tasks, including registration.',
      'A state EUDI Wallet sandbox for test integrations has been available since December 2025; the official FAQ says every organisation goes through registration via sandbox onboarding and then receives access and registration certificates.',
    ],
    sources: [
      {
        label: 'Bundestag, 15 Oct 2026: Digitale-Identitäten-Gesetz',
        url: 'https://www.bundestag.de/dokumente/textarchiv/2026/kw42-de-digitale-identitaeten-gesetz-1223586',
      },
      {
        label: 'Drucksache 21/7408 (bill text)',
        url: 'https://dserver.bundestag.de/btd/21/074/2107408.pdf',
      },
      {
        label: 'Drucksache 21/8617 (committee report)',
        url: 'https://dserver.bundestag.de/btd/21/086/2108617.pdf',
      },
      { label: 'EUDI Wallet Germany: FAQ', url: 'https://eudi-wallet.gov.de/en/faq' },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'DK',
    name: 'Denmark',
    status: 'unconfirmed',
    checkWith: 'the Agency for Digital Government (Digitaliseringsstyrelsen)',
    wallet: 'The national digital identity wallet (AltID app), provided by Digitaliseringsstyrelsen',
    notes: [
      'Act no. 301 of 2026 on the national digital identity wallet (in force 1 April 2026) sets up a public register of recipient parties run by Digitaliseringsstyrelsen. Recipients that receive credentials over the internet must register, except for age-only proofs (Section 9).',
      'That act does not refer to the EUDI Wallet rules in Regulation (EU) No 910/2014, so it is not confirmed here as the Article 5b register.',
    ],
    sources: [
      {
        label: 'Lov om den nationale digitale identitetstegnebog (LOV nr 301 af 2026)',
        url: 'https://www.retsinformation.dk/eli/lta/2026/301',
      },
      { label: 'AltID recipient register', url: 'https://modtager.tegnebog.dk/' },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'ES',
    name: 'Spain',
    status: 'unconfirmed',
    checkWith: 'the Ministry for Digital Transformation and the Civil Service (MTDFP)',
    notes: [
      'A draft Royal Decree to designate the national authorities for the EUDI Wallet ecosystem was put to public hearing from 2 to 13 October 2026. It had not been adopted at the time of checking.',
    ],
    sources: [
      {
        label: 'MTDFP public hearing on the draft Royal Decree, 1 Oct 2026',
        url: 'https://digital.gob.es/ministerio/participacion-proyectos-normativos/informacion-publica/2026-09-30',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'FI',
    name: 'Finland',
    status: 'confirmed',
    registrar: 'Finnish Transport and Communications Agency (Traficom)',
    wallet: 'State wallet provided by the Digital and Population Data Services Agency (DVV)',
    notes: [
      'Act 810/2026 (in force 1 October 2026) makes Traficom responsible for the national register of wallet-relying parties under Article 5b (Section 16), with a transitional deadline of 24 December 2026.',
      'DVV provides the state wallet (Section 7).',
    ],
    sources: [
      { label: 'Finlex: Act 810/2026', url: 'https://www.finlex.fi/fi/lainsaadanto/2026/810' },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'FR',
    name: 'France',
    status: 'unconfirmed',
    checkWith: 'ANSSI (the French supervisory body for trust services) or the national eIDAS contact',
    notes: [
      'No national registrar for wallet-relying parties was named in the official sources checked. ANSSI describes its eIDAS role as covering electronic identification security and trust services.',
    ],
    sources: [
      {
        label: 'ANSSI: the eIDAS Regulation',
        url: 'https://cyber.gouv.fr/reglementation/reglementation-identite-confiance-numerique/securite-echanges-voie-electronique/reglement-eidas/reglement-eidas-n9102014/',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'IE',
    name: 'Ireland',
    status: 'unconfirmed',
    checkWith: 'the Department of Culture, Communications and Sport (lead department for the Regulation)',
    wallet: 'Government Digital Wallet, developed by DPER',
    notes: [
      'The government says it is still defining its relying-party registration policy and asks interested organisations to contact the Department of Culture, Communications and Sport.',
    ],
    sources: [
      {
        label: 'gov.ie: Government Digital Wallet – Interoperability (23 July 2026)',
        url: 'https://www.gov.ie/en/department-of-public-expenditure-infrastructure-public-service-reform-and-digitalisation/government-digital-wallet-interoperability/',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'IT',
    name: 'Italy',
    status: 'confirmed',
    registrar: 'Agenzia per l’Italia digitale (AgID), with IPZS running the technical infrastructure',
    wallet: 'EUDIW-IT, provided by PagoPA S.p.A. as the evolution of the public IT-Wallet',
    notes: [
      'The Prime Minister’s Decree (DPCM) of 31 July 2026 (GU Serie Generale no. 210, 10 Sept 2026) makes AgID the registrar of wallet-relying parties and the wallet supervisory body (Art. 3(2)).',
      'IPZS issues wallet-relying party access certificates and registration certificates (Art. 3(3)). PagoPA S.p.A. provides the wallet (Art. 3(4)). The decree applies from its publication.',
    ],
    sources: [
      {
        label: 'Gazzetta Ufficiale: DPCM 31 July 2026 (26A04733)',
        url: 'https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2026-09-10&atto.codiceRedazionale=26A04733&elenco30giorni=false',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    status: 'unconfirmed',
    registrar: 'Commissariat du gouvernement à la protection des données (CGPD), per the bill',
    checkWith: 'the CGPD or the Centre des technologies de l’information de l’État (CTIE)',
    notes: [
      'Bill no. 8583 implementing Regulation (EU) 2024/1183 was filed on 22 April 2026. As described in a published opinion on the bill, it would make the CGPD the registration office for relying parties and the CTIE the national wallet provider. It had not been adopted at the time of checking.',
    ],
    sources: [
      { label: 'Legilux: bill implementing Regulation (EU) 2024/1183', url: 'https://legilux.public.lu/eli/dl/pl/2026/96' },
      {
        label: 'Chamber of Deputies, bill 8583: opinion of 5 Oct 2026',
        url: 'https://wdocs-pub.chd.lu/docs/Dossier_Projet_de_loi8583/20261005_Avis.pdf',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'NL',
    name: 'Netherlands',
    status: 'unconfirmed',
    checkWith: 'the Ministry of the Interior and Kingdom Relations (BZK), edi@minbzk.nl',
    wallet: 'NL Wallet, being developed for BZK',
    notes: [
      'The national implementing act is expected to go to public consultation at the end of 2026. No registrar for wallet-relying parties was named in the official source checked.',
    ],
    sources: [
      {
        label: 'Digitale Overheid: EDI-wallet',
        url: 'https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/identiteit/edi-wallet/',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'PL',
    name: 'Poland',
    status: 'unconfirmed',
    registrar: 'Minister for Digital Affairs, per the draft law',
    checkWith: 'the Ministry of Digital Affairs (Ministerstwo Cyfryzacji)',
    wallet: 'An EUDI Wallet planned within the mObywatel app',
    notes: [
      'The draft law amending the Act on trust services and electronic identification (UC122) would make the minister responsible for digital affairs the provider of the wallet and the keeper of the register of relying parties. It was still a draft at the time of checking.',
    ],
    sources: [
      {
        label: 'Chancellery of the Prime Minister: draft law (UC122)',
        url: 'https://www.gov.pl/web/premier/projekt-ustawy-o-zmianie-ustawy-o-uslugach-zaufania-oraz-identyfikacji-elektronicznej-oraz-niektorych-innych-ustaw2',
      },
      {
        label: 'Ministry of Digital Affairs: the EUDI Wallet is coming to mObywatel',
        url: 'https://www.gov.pl/web/cyfryzacja/europejski-portfel-tozsamosci-cyfrowej-zmierza-do-mobywatela',
      },
    ],
    lastChecked: CHECKED,
  },
  {
    code: 'PT',
    name: 'Portugal',
    status: 'unconfirmed',
    notes: [
      'No national act naming a registrar for wallet-relying parties was found in the sources checked.',
    ],
    sources: [],
    lastChecked: CHECKED,
  },
  {
    code: 'SE',
    name: 'Sweden',
    status: 'unconfirmed',
    checkWith: 'the Agency for Digital Government (Digg)',
    wallet: 'State digital identity wallet being developed by Digg',
    notes: [
      'The government inquiry SOU 2024:45 proposed that a supervisory authority chosen by the government keep the register of relying parties. That is a proposal, not adopted law.',
      'Digg plans to launch a test platform for relying parties in December 2026.',
    ],
    sources: [
      {
        label: 'SOU 2024:45 (government inquiry)',
        url: 'https://www.regeringen.se/contentassets/9291c089f96948e6828c55b32be55ae6/kompletterande-bestammelser-till-eus-reviderade-forordning-om-elektronisk-identifiering-sou-202445.pdf',
      },
      {
        label: 'Digg: test platform for the digital identity wallet',
        url: 'https://www.digg.se/digitala-tjanster/digital-identitetsplanbok/testplattform-for-digital-identitetsplanbok',
      },
    ],
    lastChecked: CHECKED,
  },
];
