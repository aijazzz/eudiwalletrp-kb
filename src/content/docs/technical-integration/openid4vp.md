---
title: 'Technical essentials: OpenID4VP, access certificates and registration certificates'
description: The protocol profiles a relying party must support, how access certificates authenticate your requests, where the registration certificate goes, and the key ARF points.
sidebar:
  label: Technical essentials
---

:::tip[Key points]
- The legally binding protocol rules are in **Annex II to [Implementing Regulation (EU) 2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng)**, as replaced by **[2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng)**. It applies ISO/IEC 18013-7:2025 Annex C and clauses 4.1, 4.2, 5 and 6 of **ETSI TS 119 472-2 V1.2.1 (2026-03)**, with adaptations.
- Two profiles: **ISO/IEC-mdoc** (ISO/IEC 18013-5 and 18013-7 Annex C) and **OpenID4VC-HAIP** (OpenID4VP over redirects or the browser Digital Credentials API).
- On the OpenID4VP side you sign the request with your **access certificate**, using the **`x509_hash`** client identifier prefix, and put your **registration certificate** in **`verifier_info`**.
- Versions used on this page: **[OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)** (final, July 2025), **[OpenID4VC HAIP 1.0](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0.html)** (final, December 2025) and **[ARF v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0)** (July 2026).
:::

:::caution[Check the referenced versions]
The implementing regulation refers to HAIP and OpenID4VP through ETSI TS 119 472-2 V1.2.1. We have not verified which exact HAIP and OpenID4VP versions that ETSI document references. Confirm this against the ETSI text before you rely on version-specific behaviour.
:::

## The legal layer

| Text | What it covers for relying parties |
| --- | --- |
| Article 5b of Regulation (EU) No 910/2014 | Registration; identify yourself to the user; request only registered data; validate PID and attestations yourself |
| [2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), as amended by [2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng) | Registration, access certificates (Annex IV, ETSI TS 119 411-8 V1.1.1) and registration certificates (Annex V, ETSI TS 119 475 V1.2.1) |
| 2024/2982, as amended by 2026/1731 | Wallet checks on your requests (Article 3) and the presentation protocols (Annex II) |
| [2024/2979](https://eur-lex.europa.eu/eli/reg_impl/2024/2979/oj/eng), as amended | Integrity and core functions of wallets, including the transaction log |

## Presentation profiles (Annex II to 2024/2982)

- **ISO/IEC-mdoc profile.** Built on ISO/IEC 18013-5 for non-API-mediated (proximity) flows and on Annex C of ISO/IEC 18013-7 for API-mediated flows.
  - Put the CBOR-encoded registration certificate in the `requestInfo` member labelled `euWrprc` (ISO/IEC 18013-5-REQ-06 and REQ-07).
- **OpenID4VC-HAIP profile.** Built on HAIP sections 5, 5.1, 5.3, 7 and 8 for redirects, and sections 5, 5.2, 5.3, 7 and 8 for the API-mediated (Digital Credentials API) flow.
  - For mdoc credentials, apply HAIP's "ISO mdocs" profile; for SD-JWT VCs, its "IETF SD-JWT VCs" profile (OIDFVP-HAIP-GEN-04 and GEN-05).
- **Wallets and the mediating API.** Wallets must support a mediating API for both protocols (EAAP-API-GEN-01).
- **Cross-device flows.** Wallets "should not support" the redirect mechanism for cross-device presentations (OIDFVP-HAIP-SUPPORT-03). Plan for the Digital Credentials API for cross-device use.

## Client authentication with the access certificate

OpenID4VP 1.0 section 5.9.3 defines certificate-based client identifier prefixes:

- **`x509_san_dns`:** the client identifier is a DNS name that must match a dNSName SAN in the leaf certificate. The request is signed and the certificate chain is sent in the `x5c` header.
- **`x509_hash`:** the client identifier is the base64url-encoded SHA-256 hash of the DER-encoded leaf certificate. The request is signed, with the chain in `x5c`.

HAIP 1.0 states: "For signed requests, the Verifier MUST use, and the Wallet MUST accept the Client Identifier Prefix x509_hash". The trust anchor is not included in `x5c`.

The EU profile adds: "The leaf certificate mentioned in OpenID4VP section 5.9.3 for use with the x509_hash Client Identifier Prefix shall be a RP access certificate as specified in ETSI TS 119 475" (OIDFVP-HAIP-COMMON-REQ-RO-23).

In practice:

1. Generate a key pair per verifier instance and obtain an access certificate from an authorised provider (see [Access and registration certificates](/registration-guide/certificates/)).
2. Sign each authorisation request object with that key and send the chain in `x5c`.
3. Set `client_id` to `x509_hash:<hash of your leaf certificate>`.
4. Over the Digital Credentials API, the audience of the presentation is always your web origin with the reserved `origin:` prefix (for example `origin:https://verifier.example.com/`). Wallets must not accept `origin:` as a client identifier in requests (OpenID4VP 1.0, section 5.9.3 and Appendix A).

The wallet authenticates and validates the access certificate itself, without delegating this to the operating system or browser (Article 3(1) of 2024/2982, as amended), and shows the user information from it (Article 3(5)).

## The registration certificate in the request

- OpenID4VP 1.0 defines an optional `verifier_info` parameter: an array of attestations about the verifier, each with a `format`, `data` and optional `credential_ids`. In plain OpenID4VP it is at the wallet's discretion whether it uses this information.
- The EU profile makes this concrete: "One of the elements of the verifier_info parameter shall include the registration certificate." (OIDFVP-HAIP-COMMON-REQ-RO-13).
- Send **one** registration certificate per request, for the intended use that request serves (ARF v3.0.0, section 6.6.3.3).
- Registration certificates are signed JWTs or CWTs (Annex V point 4 of 2025/848).
- Wallets validate the certificate and check for over-asking (WRP-VALIDATION and WRP-OVERASKING requirements). Article 3(4) of 2024/2982 applies from **11 August 2028**. See [What data can you request?](/technical-integration/data-requests/).

## Querying credentials

- OpenID4VP 1.0 uses the **Digital Credentials Query Language** (`dcql_query`) to say which credentials and claims you want.
- Request only claims covered by your registration certificate.

## Key ARF points (v3.0.0)

The ARF is the EU's technical reference framework. It is **not legally binding**, but it shows how the Commission and Member States expect the system to work.

- **Identifiers.** The registrar assigns an EU-wide unique relying-party identifier. You register one or more services; intended-use identifiers are generated by the registrar (section 3.11).
- **Certificates.** Access certificates bind to a relying-party instance key pair and contain the relying-party and service identifiers. Each registration certificate contains exactly one intended use (sections 3.11 and 6.4.2).
- **Suspension.** If your registration is suspended, all your certificates are revoked; revocation status follows ETSI TS 119 475 (section 6.4.3).
- **Your own checks.** You validate PID and attestations yourself (Article 5b(9)): authenticity, revocation status and device binding as applicable (section 6.6.3).
- **Technical specifications.** TS5 (registration formats and API), TS6 (common registration data), TS7 (deletion requests) and TS8 (reporting a relying party to a DPA) are published in the [standards and technical specifications repository](https://github.com/eu-digital-identity-wallet/eudi-doc-standards-and-technical-specifications).

## What is not settled yet

- **ETSI references.** Several requirements depend on ETSI TS 119 472-2, TS 119 475 and TS 119 411-8, which we summarise but have not reviewed in full here.
- **Certificate validity periods** are not set in the implementing regulations.
- **Browser support** for the Digital Credentials API varies. The regulation itself notes non-conformities caused by operating systems and browsers (note to EAAP-API-GEN-01).

:::note[Guidance, not legal advice]
This page summarises official specifications for orientation. It is not legal or implementation advice. Always build against the exact specification versions referenced by the implementing regulations.
:::

## Related pages

- [Access and registration certificates](/registration-guide/certificates/)
- [What data can you request?](/technical-integration/data-requests/)
- [Intermediary or own verifier?](/registration-guide/intermediaries/)
- [Deadlines for relying parties](/deadlines/)
- [Check whether you must accept the wallet](/check/)

## Sources

- [Commission Implementing Regulation (EU) 2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), Article 4 and Annex XII (new Annex II to 2024/2982)
- [Commission Implementing Regulation (EU) 2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng)
- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng) and [2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng), Annexes IV and V
- [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html), sections 5.1 and 5.9.3
- [OpenID4VC High Assurance Interoperability Profile 1.0](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0.html)
- [EUDI Wallet Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0), sections 3.11, 6.4 and 6.6

Last reviewed: 28 Oct 2026
