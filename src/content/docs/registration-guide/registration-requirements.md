---
title: Registration requirements under CIR 2025/848
description: The exact information a wallet-relying party must register, and what each Member State must provide, under Implementing Regulation (EU) 2025/848.
sidebar:
  label: Registration requirements
---

:::tip[Key points]
- [Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng) applies **from 24 December 2026** (Article 11). It was amended by [Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng).
- **Annex I** lists the information every national register holds about you: 16 points after the 2026 amendment.
- You must provide **at least** the Annex I information, keep it accurate and update it without undue delay (Article 5).
- Member States must provide a **register**, a **registrar**, a published **registration policy**, a common **API** and website, and authorised providers of **access** and **registration certificates** (Articles 3, 4, 7 and 8).
- Registrars **verify** your identity data but collect your attribute lists and intended-use descriptions **for transparency only**, without pre-authorisation (Article 6(3) and (3a), as amended).
:::

For the step-by-step process, see [How to register](/registration-guide/registration-process/). To prepare your submission, use the [checklist](/registration-guide/checklist/).

## What you must register (Annex I)

The point numbers below follow Annex I to 2025/848. The wording is shortened; check the official text for the exact terms.

| Point | Information |
| --- | --- |
| 1 | Official name as stated in an official record, with identification data of that record. Where there is none, point 2 applies. |
| 2 | Name in a user-friendly form (for example a trade or service name). |
| 3 | One or more identifiers, where applicable: (a) EORI number; (b) registration number in a national business register; (c) Legal Entity Identifier (LEI); (d) VAT number; (e) excise number; (f) tax reference number; (g) European Unique Identifier (EUID); (h) other national identifiers. |
| 4 | Physical address of establishment. |
| 5 | URL. |
| 6 | Country prefix (ISO 3166-1 alpha-2, using "EL" for Greece) for the identifiers in point 3(a), (d), (f) and (h). |
| 7 | Contact information, at least one of: (a) a helpdesk website; (b) a phone number; (c) an email address. |
| 8 | A description of the type of services provided. |
| 9 | For each intended use, the list of data (attestations and attributes) to be requested, with a user-friendly name, the technical name, the attestation type and other syntaxes, in machine-readable form. |
| 10 | For each intended use, a description of that intended use. |
| 11 | An indication of whether you are a public sector body. |
| 12 | Your entitlement(s): `Service_Provider`, `QEAA_Provider`, `Non_Q_EAA_Provider`, `PUB_EAA_Provider`, `PID_Provider`, `QCert_for_ESeal_Provider`, `QCert_for_ESig_Provider`, `rQSigCDs_Provider`, `rQSealCDs_Provider`, `ESig_ESeal_Creation_Provider`. |
| 13 | Sub-entitlements that a Member State may define for non-qualified EAA providers. |
| 14 | An indication of whether you rely on an intermediary. |
| 15 | Where applicable, the association to the intermediary acting on your behalf. |
| 16 | Where applicable, the association to the relying party on whose behalf an intermediary acts (added by 2026/1730). |

Most service providers will register the `Service_Provider` entitlement. Annex III names the evidence for verifying the provider entitlements (national trusted lists, the Commission's lists of PID providers and of public-sector attestation providers, or national procedures). Note that 2026/1730 deleted Article 6(3)(c), the separate entitlement check that Article 6(5) and Annex III refer to; the entitlement (point 12) is now inside the general verification of points 11 to 16.

In addition, where a registration certificate is issued, you must provide a **URL to your privacy policy** for the intended use (Article 8(2)(g)).

## How the registrar treats this information

- **Verified:** Annex I points 1 to 6 and 11 to 16 are checked for accuracy, validity, authenticity and integrity, where possible by automated means and against official records or authentic sources (Article 6(3)(a) and (4), as amended).
- **Also checked:** your representative's power of attorney (Article 6(3)(b)) and the absence of an existing registration in another national register (Article 6(3)(d)).
- **Transparency only:** points 7 to 10 (contacts, service description, attribute lists and intended-use descriptions) are collected in an automated manner "only for the purpose of transparency" and without pre-authorisation, without prejudice to Article 5b(4) of the Regulation (Article 6(3a), inserted by 2026/1730).
- **If verification fails,** the registrar rejects the registration (Article 6(6)).

Registration of an attribute list does not mean anyone has authorised you to collect that data. You still need a lawful basis under the GDPR and any sector rules (see [What data can you request?](/technical-integration/data-requests/)).

## What Member States must provide

| Obligation | Where |
| --- | --- |
| At least one national register | Article 3(1) |
| At least one designated registrar | Article 3(3) |
| Annex I information published online, human-readable and machine-readable | Article 3(4) |
| A single common API and a national website, electronically signed or sealed | Article 3(5) and (6), Annex II |
| One or more published registration policies, with minimum contents (identification procedures, supporting documents, authentic sources, automated registration, redress, verification rules) | Article 4 |
| Easy-to-use electronic, and where possible automated, registration processes | Article 6(1) |
| At least one authorised provider of access certificates | Article 7(1) |
| At least one authorised provider of registration certificates, issuing automatically and without undue delay | Article 8(1), as amended by 2026/1730 |
| Registration records kept for 10 years | Article 10 |

### The public register API

Annex II requires a REST API with JSON responses signed as JWS (RFC 7515), described in OpenAPI version 3. Anyone can search it **without prior authentication**, with partial matches on parameters such as the official or business registration number, the name, the privacy policy URL and Annex I points 12 to 15. Replies include the Annex I information and your current and historic access and registration certificates.

:::caution[Drafting point to watch]
Annex II says the API reply excludes "the contact information in Annex I point 4". In Annex I, point 4 is the physical address and point 7 is the contact information. We report the text as published; ask your registrar which data its API actually omits.
:::

## What is not settled yet

- **National policies.** Supporting documents, identification methods, response times and any fees are set in each national policy (Article 4). Few have been published; see [National registers](/national-trackers/member-states/).
- **Common technical format.** The ARF's [Technical Specification 5](https://github.com/eu-digital-identity-wallet/eudi-doc-standards-and-technical-specifications/blob/main/docs/technical-specifications/ts5-common-formats-and-api-for-rp-registration-information.md) and [Technical Specification 6](https://github.com/eu-digital-identity-wallet/eudi-doc-standards-and-technical-specifications/blob/main/docs/technical-specifications/ts6-common-set-of-rp-information-to-be-registered.md) describe the data model. They are technical specifications, not legal texts.

:::note[Guidance, not legal advice]
This page summarises the official texts in plain language. It is not legal advice. Always check the current consolidated text on EUR-Lex and your national registration policy.
:::

## Related pages

- [How to register](/registration-guide/registration-process/)
- [Relying-party registration checklist](/registration-guide/checklist/)
- [Access and registration certificates](/registration-guide/certificates/)
- [Deadlines for relying parties](/deadlines/)
- [Check whether you must accept the wallet](/check/)

## Sources

- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Articles 3 to 11 and Annexes I to III
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng), Article 1 and Annex I
- [Regulation (EU) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng), Article 5b of Regulation (EU) No 910/2014 as amended

Last reviewed: 28 Oct 2026
