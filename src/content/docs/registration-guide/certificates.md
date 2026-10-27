---
title: Access certificates and registration certificates explained
description: The difference between wallet-relying party access certificates and registration certificates, who issues them, when they are mandatory and how they are used in wallet requests.
sidebar:
  label: Access and registration certificates
---

:::tip[Key points]
- An **access certificate** proves **who you are**. Wallets use it to authenticate you and your request (Article 7 and Annex IV of [Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng)).
- A **registration certificate** states **what you registered**: your intended use, the data you may request and your privacy policy URL (Article 8 and Annex V).
- Both are issued **only to registered relying parties**, by certificate authorities your Member State authorises (Articles 7(1), 7(2), 8(1) and 8(2)(a), as amended by [2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng)).
- Since 2026/1730, every Member State **must** authorise at least one provider of registration certificates. Before that amendment, this was optional.
- Wallets must validate registration certificates **from 11 August 2028** ([2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), amending [2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng)).
- **No validity period** for either certificate is set in the implementing regulations we reviewed.
:::

## Side by side

| | Access certificate | Registration certificate |
| --- | --- | --- |
| Purpose | Identify and authenticate the relying party to the wallet | Show the wallet the registered intended use and attributes |
| Legal basis | Article 7 and Annex IV, 2025/848 | Article 8 and Annex V, 2025/848, as amended by 2026/1730 |
| Issued by | At least one certificate authority authorised by each Member State (Article 7(1)) | At least one certificate authority authorised by each Member State, issuing "in an automated manner and without undue delay after the registration" (Article 8(1), as amended) |
| Issued to | Registered relying parties only (Article 7(2)) | Registered relying parties only (Article 8(2)(a)) |
| Contents (summary) | Annex I points 1, 2, 3, 5, 6, 7(a) to (c) and 16, plus a reference to the national register where you are registered, the certificate chain location and policy references (Annex IV point 3(k), as amended) | Annex I points 1, 2, 3, 5, 6 and 8 to 15, the privacy policy URL and the harmonised general access policy (Annex V point 3(j), as amended) |
| Standard | ETSI TS 119 411-8 V1.1.1 (2025-10) (Annex IV point 3, as amended) | ETSI TS 119 475 V1.2.1 (2026-03) (Annex V point 3, as amended) |
| Format | X.509 certificate (as used by the presentation protocols, see below) | Signed JSON Web Token (RFC 7519) or CBOR Web Token (RFC 8392) (Annex V point 4) |
| Revocation | Published within 24 hours of a request (Annex IV point 3(h)) | Published within 24 hours of a request (Annex V point 3(g)) |

The Commission publishes a list of the providers of access certificates and of registration certificates notified by Member States ([Implementing Regulation (EU) 2024/2980](https://eur-lex.europa.eu/eli/reg_impl/2024/2980/oj/eng), Article 5(2), as amended by 2026/1731).

## The access certificate

- **Checks before issue.** The provider must verify that you are in a national register with a valid registration status, and that the certificate content matches the register (Annex IV point 3(c)).
- **Ongoing monitoring.** The provider monitors the register and revokes the certificate when its content is no longer accurate or your registration is suspended or cancelled (Annex IV point 3(e)).
- **Transparency.** Where relevant, the policy describes how issued certificates are logged under RFC 9162 Certificate Transparency (Annex IV point 3(j)).
- **In practice (ARF).** The [Architecture and Reference Framework (ARF) v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0) describes access certificates issued per relying-party instance: you generate a key pair and send a certificate signing request to the access certificate authority (ARF section 3.11 and section 6.4.2). The ARF is a technical framework, not law.

## The registration certificate

- **One intended use per certificate.** Member States must ensure that each intended use is expressed in the certificates (Article 8(2)(b)). The ARF goes further and puts exactly one intended use in each registration certificate (ARF section 3.11).
- **General access policy.** Each certificate carries a harmonised policy telling users that you may only request the data in the certificate for the registered intended use (Article 8(2)(c), Annex V point 3(j)).
- **Privacy policy.** You must provide a URL to your privacy policy for the intended use (Article 8(2)(g)).
- **Reissue and revocation.** The provider monitors the register automatically and reissues or revokes the certificate when your registration changes, is suspended or cancelled (Annex V point 3(d)).
- **Point 16 gap.** 2026/1730 added Annex I point 16 to the access certificate contents but not to the registration certificate list. We report this as written.

## How they are used in a wallet request

The presentation protocols are set in Annex II to Implementing Regulation 2024/2982, as replaced by 2026/1731:

- **OpenID4VP (HAIP profile).** You sign the request. The leaf certificate used with the `x509_hash` client identifier prefix "shall be a RP access certificate as specified in ETSI TS 119 475" (requirement OIDFVP-HAIP-COMMON-REQ-RO-23). The registration certificate goes in the `verifier_info` parameter (requirement RO-13).
- **ISO/IEC mdoc.** The request's `requestInfo` contains a member `euWrprc` holding the CBOR-encoded registration certificate (requirements ISO/IEC 18013-5-REQ-06 and REQ-07).
- **Wallet checks.** The wallet authenticates and validates your access certificate itself, "without delegating execution of these processes to an operating system browser or other intermediary application" (Article 3(1) of 2024/2982, as amended). It shows the user information from the access certificate (Article 3(5)).
- **Registration certificate checks.** The wallet validates the registration certificate and compares your request with it, warning the user about over-asking (requirements WRP-VALIDATION-01 to 03 and WRP-OVERASKING-01 to 03). The underlying duty in Article 3(4) of 2024/2982 applies from **11 August 2028** (Article 8 of 2024/2982, as replaced by 2026/1731).

See [Technical essentials](/technical-integration/openid4vp/) for the protocol details and [What data can you request?](/technical-integration/data-requests/) for the over-asking rules.

## When they are mandatory

- **Access certificate:** wallets must authenticate relying parties, so in practice you need one for every live wallet interaction, unless an intermediary uses its own access certificate on your behalf (see [Intermediary or own verifier?](/registration-guide/intermediaries/)). The ARF notes that "an intermediated Relying Party using the services of an intermediary will not need an access certificate".
- **Registration certificate:** Member States must make them available (Article 8(1), as amended), and the presentation profiles require you to include one. Wallets only have to validate them from 11 August 2028. Whether a request without one may still be processed before that date is not spelt out; treat including it as required.

## What is not settled yet

- **Validity periods.** Neither 2025/848 nor 2026/1730 sets how long either certificate is valid. They may follow from the ETSI specifications or national certificate policies. We have not verified this, and we do not state a period.
- **Fees** for certificates are not set at EU level.
- **Which authorities** issue certificates in each Member State. Only some have been named; see [National registers](/national-trackers/member-states/).

:::note[Guidance, not legal advice]
This page explains the official texts in plain language. It is not legal advice. Check the certificate policy of your national provider.
:::

## Related pages

- [How to register](/registration-guide/registration-process/)
- [Registration requirements under CIR 2025/848](/registration-guide/registration-requirements/)
- [Technical essentials](/technical-integration/openid4vp/)
- [Deadlines for relying parties](/deadlines/)
- [FAQ for relying parties](/faq/)
- [Check whether you must accept the wallet](/check/)

## Sources

- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Articles 7 to 9 and Annexes IV and V
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng), Article 1 and Annexes II and III
- [Commission Implementing Regulation (EU) 2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), amending 2024/2980 and 2024/2982
- [Commission Implementing Regulation (EU) 2024/2982](https://eur-lex.europa.eu/eli/reg_impl/2024/2982/oj/eng) on protocols and interfaces
- [Commission Implementing Regulation (EU) 2024/2980](https://eur-lex.europa.eu/eli/reg_impl/2024/2980/oj/eng) on notifications to the Commission
- [EUDI Wallet Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0), sections 3.11, 6.4.2 and 6.6.3

Last reviewed: 28 Oct 2026
