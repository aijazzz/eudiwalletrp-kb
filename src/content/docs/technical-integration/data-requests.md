---
title: What data can you request from an EUDI Wallet?
description: Data minimisation, intended-use declarations, how your registered attribute list limits live requests, and the checks and reporting tools on the wallet side.
sidebar:
  label: What data can you request?
---

:::tip[Key points]
- You may request **only the data you registered** for the intended use: relying parties "shall not request users to provide any data other than that indicated" (Article 5b(3) of Regulation (EU) No 910/2014, as amended).
- Your registered list is a **ceiling, not a permission**. You still need a lawful basis and must respect data minimisation under the [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) and any sector rules (Article 5b(4)).
- Registrars collect your attribute lists **for transparency only** and do not pre-approve them (Article 6(3a) of [2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), inserted by [2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng)).
- Wallets compare each request with your **registration certificate** and **warn the user** about over-asking ([2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), Annex II requirements WRP-OVERASKING-01 to 03). The underlying validation duty applies from **11 August 2028**.
- Users can **report you** to their data protection authority straight from the wallet (Article 5a(4)(d)(iii)).
:::

## The rule: declare first, then request

1. **At registration** you declare, for each intended use, a list of attestations and attributes and a description of the use (Annex I points 9 and 10 of 2025/848). See [Registration requirements](/registration-guide/registration-requirements/).
2. **Your registration certificate** for that intended use contains this list, your privacy policy URL and a general access policy telling users you may only request that data (Article 8(2) and Annex V of 2025/848, as amended).
3. **Each live request** includes the registration certificate for the intended use it serves. A request serves one intended use; if you have several, you send several requests (ARF v3.0.0, section 6.6.3.3).
4. **The wallet** checks the request against the certificate and asks the user to approve.

Asking for more than you registered is a breach of Article 5b(3) and a ground for the registrar to suspend or cancel your registration (Article 9(2)(c) of 2025/848).

## Data minimisation in practice

- **Ask for attributes, not documents.** The wallet supports selective disclosure, so request only the claims you need.
- **Prefer derived claims.** If you only need to know a user is over 18, request an age-over attribute instead of the birth date, where the attestation offers one.
- **Accept pseudonyms** where the law does not require you to identify the user. Relying parties "shall not refuse the use of pseudonyms" in that case (Article 5b(9)).
- **Separate your intended uses.** Do not merge onboarding and marketing into one use to justify a longer list.
- **The portrait.** If you request the user's portrait, the wallet warns the user that it involves biometric data and requires explicit, specific confirmation. You may not retain it unless necessary for identification and authentication under data protection law, or required by Union or national law ([2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), new Article 3a of 2024/2977). The portrait becomes part of the mandatory person identification data only from 11 August 2028.

## What the wallet checks

Under Annex II to Implementing Regulation 2024/2982, as replaced by 2026/1731:

- **Validation.** The wallet validates your registration certificate before presenting any data. If validation fails (expired, revoked, untrusted issuer, malformed), it warns the user and needs explicit approval. "Silence or pre-ticked boxes shall not suffice for explicit approval." (WRP-VALIDATION-01 and 02).
- **Over-asking.** The wallet compares the requested attributes with the registration certificate. If you ask for more, it "shall clearly warn the wallet user before any disclosure" and needs explicit approval (WRP-OVERASKING-01 and 02).
- **What happens next** is up to the wallet provider: continue, disclose only the covered subset, or reject (WRP-OVERASKING-03 and WRP-VALIDATION-03).
- **Timing.** Article 3(4) of 2024/2982 (validating the registration certificate) applies from 11 August 2028 (Article 8 of 2024/2982, as replaced). Design for these checks now.
- **Identity.** The wallet authenticates your access certificate and shows the user information from it (Article 3(1) and (5) of 2024/2982, as amended). You must also identify yourself to the user (Article 5b(8)).

## What the user can do

From the wallet dashboard, users can (Article 5a(4)(d) of the Regulation):

- see the relying parties they have connected to and the data exchanged;
- ask you to **erase** personal data under Article 17 GDPR;
- **report you** to the competent national data protection authority where they receive an unlawful or suspicious request.

The transaction log records your name, contact details, unique identifier and Member State ([2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), amending Article 9(2)(b) of 2024/2979). Member States must also offer free validation so that anyone can check your registered identity (Article 5a(8)(b)).

## What is not settled yet

- **Enforcement split.** The registrar enforces registration (Article 9 of 2025/848), the supervisory body can request suspension (Article 46a(4)(f)), and data protection authorities enforce the GDPR. How they will coordinate is not set out in detail.
- **Before 11 August 2028.** Wallets are not yet obliged to validate registration certificates under Article 3(4) of 2024/2982. Article 5b(3) applies regardless.
- **Attribute naming.** Which technical names and attestation types to register depends on the attestation schemes. Check with your registrar.

:::note[Guidance, not legal advice]
This page explains the official texts in plain language. It is not legal advice. Run your own data protection impact assessment where required.
:::

## Related pages

- [Registration requirements under CIR 2025/848](/registration-guide/registration-requirements/)
- [Access and registration certificates](/registration-guide/certificates/)
- [Technical essentials](/technical-integration/openid4vp/)
- [Relying-party registration checklist](/registration-guide/checklist/)
- [Check whether you must accept the wallet](/check/)

## Sources

- [Regulation (EU) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng), Articles 5a and 5b of Regulation (EU) No 910/2014 as amended
- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Articles 6, 8 and 9 and Annexes I and V
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng)
- [Commission Implementing Regulation (EU) 2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), amending 2024/2977, 2024/2979 and 2024/2982
- [Commission Implementing Regulation (EU) 2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng)
- [Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- [EUDI Wallet Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0), section 6.6.3.3

Last reviewed: 28 Oct 2026
