---
title: Using an intermediary vs building your own verifier
description: What Article 5b and Implementing Regulation 2025/848 say about intermediaries, when using one makes sense, and the trade-offs against running your own EUDI Wallet verifier.
sidebar:
  label: Intermediary or own verifier?
---

:::tip[Key points]
- "Intermediaries acting on behalf of relying parties shall be deemed to be relying parties and shall not store data about the content of the transaction" (Article 5b(10) of Regulation (EU) No 910/2014, as amended).
- An intermediary **registers as a relying party itself**. You, the intermediated relying party, are **still registered** in your own Member State, with an indication that you rely on an intermediary (Annex I points 14 and 15 of [Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng)).
- The intermediary's access certificate carries the **association to you** (Annex I point 16 and Annex IV, as amended by [2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng)).
- Your obligations stay yours. Article 5b(3) on requesting only registered data applies in full.
- The legal texts do not regulate the commercial or technical interface between you and the intermediary.
:::

## What the law says

- **Status.** Intermediaries are deemed relying parties and must not store data about the content of the transaction (Article 5b(10)).
- **Your registration.** Annex I to 2025/848 includes "an indication that the wallet-relying party relies upon an intermediary" (point 14) and "an association to the intermediary" (point 15).
- **The intermediary's registration and certificates.** Point 16, added by 2026/1730, records the association between the intermediary that holds the access certificate and the relying party on whose behalf it acts. Access certificates must include point 16 (Annex IV point 3(k), as amended).
- **Registration certificates.** These carry Annex I points 14 and 15 for the intermediated relying party (Annex V point 3(j)).
- **Public search.** The public register API can be searched on Annex I points 14 and 15 (Annex II point 2(1)(b)), so anyone can see who uses which intermediary.

## How it works in practice (ARF)

The [Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0) (sections 3.11.4 and 6.6.5) describes this flow. It is a technical framework, not law.

1. The intermediary registers once as a relying party and obtains access certificates. Because of point 16, it receives a **separate set of access certificates for each customer**.
2. Each customer is registered in its own Member State, with registration certificates for each intended use that show it uses the intermediary (`usesIntermediary`). **Each registrar designs its own process** for this. The intermediary might register customers, or customers might register themselves and name the intermediary.
3. The intermediary sends requests with its own access certificate and the customer's registration certificate.
4. The wallet checks that the intermediary in the registration certificate matches the access certificate. It shows the user **only the customer's trade name**, and logs the intermediary.
5. The intermediary verifies the presented data (as agreed with the customer), forwards it, and **deletes it immediately**.

The ARF adds: "an intermediated Relying Party using the services of an intermediary will not need an access certificate." It also says the interface between intermediary and relying party is out of its scope, and end-to-end encryption between wallet and relying party is not required.

## When an intermediary makes sense

- You have **few or occasional** wallet use cases and no in-house identity team.
- You need to go live quickly and want someone else to track the protocol profiles in [2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng), as amended.
- You already use an identity verification or login provider that offers wallet support.

## When your own verifier makes sense

- Wallet interactions are **core** to your service (for example banking or telecoms onboarding).
- You want **no third party** to see presented attributes in clear text.
- You need **full control** over keys, certificates, logging and the user experience.
- You operate in many channels, including proximity (ISO/IEC 18013-5 mdoc) and remote flows.

## Trade-offs

| | Intermediary | Own verifier |
| --- | --- | --- |
| Registration | You still register; the intermediary registers too | You register |
| Access certificates | Held by the intermediary, with an association to you | You obtain and manage them per instance |
| Technical effort | Low: integrate with the intermediary's API | High: OpenID4VP/HAIP, mdoc, trust lists, revocation |
| Data exposure | The intermediary sees the data in transit and must not store it | Only you |
| Dependency | Vendor lock-in and outage risk | You carry operational risk |
| What the user sees | Your trade name (ARF) | Your trade name |
| Over-asking liability | Yours: you must not request more than registered | Yours |

## Questions to ask an intermediary

- Are you **registered** as a relying party, and in which Member State?
- How will my **registration and point 15/16 associations** be handled with my registrar?
- Which **verifications** (authenticity, revocation, device binding) will you carry out for me?
- How do you **guarantee deletion** of transaction content (Article 5b(10))?
- Which **protocol profiles** of Annex II to 2024/2982 do you support?
- Is the **GDPR role split** (controller and processor) documented in a contract?

## What is not settled yet

- **GDPR roles.** Whether an intermediary is a processor, a controller or a joint controller is not settled by the eIDAS texts. It depends on the facts.
- **Cross-border intermediaries.** The texts do not say expressly whether an intermediary established in one Member State may serve relying parties registered in another. The ARF assumes it can.
- **Registrar processes** for intermediated relying parties differ by Member State and are mostly unpublished.

:::note[Guidance, not legal advice]
This page explains the official texts and the ARF in plain language. It is not legal advice. Review contracts with an intermediary with your legal advisers.
:::

## Related pages

- [How to register](/registration-guide/registration-process/)
- [Access and registration certificates](/registration-guide/certificates/)
- [Technical essentials](/technical-integration/openid4vp/)
- [FAQ for relying parties](/faq/)
- [Check whether you must accept the wallet](/check/)

## Sources

- [Regulation (EU) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng), Article 5b(10) of Regulation (EU) No 910/2014 as amended
- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Annexes I, II, IV and V
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng), Annexes I and II
- [EUDI Wallet Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0), sections 3.11.4 and 6.6.5

Last reviewed: 28 Oct 2026
