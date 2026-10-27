---
title: Relying-party registration checklist
description: A practical checklist to prepare your EUDI Wallet relying-party registration, covering your legal entity, use cases, attribute mapping, privacy policy and certificate readiness.
sidebar:
  label: Registration checklist
---

:::tip[Key points]
- Use this list to collect everything Annex I to [Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng) asks for **before** you open your registrar's portal.
- The heaviest work is usually the **attribute mapping**: one list of data per intended use, and no more than you need.
- Your national registrar may ask for extra supporting documents under its registration policy (Article 4(3)). Check it first.
- Nothing here replaces your own GDPR assessment.
:::

New to this? Start with the [two-minute check](/check/) and [How to register](/registration-guide/registration-process/).

## 1. Legal entity

- [ ] Confirm the **Member State where you are established**. That is where you register (Article 5b(1) of Regulation (EU) No 910/2014).
- [ ] Check whether you are **already registered** in another national register. Registrars check for this (Article 6(3)(d) of 2025/848).
- [ ] Official **name** as in your official record, with the record's identification data (Annex I point 1).
- [ ] **User-friendly name**, such as a trade or service name users will recognise (point 2).
- [ ] **Identifiers** you hold: EORI, business register number, LEI, VAT number, excise number, tax reference, EUID or other national identifier (point 3), with the country prefix where required (point 6).
- [ ] **Physical address** of establishment (point 4) and your **URL** (point 5).
- [ ] Whether you are a **public sector body** (point 11).
- [ ] Your **entitlement**: for most service providers, `Service_Provider` (point 12).
- [ ] **Power of attorney** for the person who registers on your behalf, if needed (Article 6(3)(b)).

## 2. Contacts

- [ ] At least one of: a **helpdesk website**, a **phone number** or an **email address** for registration and wallet-use matters (point 7). Use a shared mailbox, not a person.
- [ ] An internal owner who keeps the registration **up to date without undue delay** (Article 5(3)).

## 3. Use cases (intended uses)

- [ ] A short **description of the type of services** you provide (point 8).
- [ ] A list of every **intended use**, for example "age check at checkout" or "account opening".
- [ ] For each intended use, a plain-language **description** (point 10).
- [ ] A **lawful basis** under the GDPR, and any sector-specific rule, for each intended use. Registration does not authorise processing. Article 5b(4) keeps sectoral law in place.

## 4. Attribute mapping

- [ ] For each intended use, the **list of attestations and attributes** you will request, with a user-friendly name, the technical name and the attestation type (point 9).
- [ ] Each attribute justified as **necessary** for that use. Prefer derived attributes (for example an "over 18" claim) to full data.
- [ ] Check that your live requests will **never ask for more** than the registered list (Article 5b(3)). Over-asking is a ground for suspension (Article 9(2)(c) of 2025/848).
- [ ] Decide whether you can accept **pseudonyms**. You may not refuse them where the law does not require identification (Article 5b(9)).

See [What data can you request?](/technical-integration/data-requests/).

## 5. Privacy policy

- [ ] A public **privacy policy URL** covering each intended use. It goes into your registration certificate (Article 8(2)(g) and Annex V of 2025/848, as amended).
- [ ] The policy names the data, purposes, retention and user rights for wallet interactions.
- [ ] A process for **erasure requests** that users send from their wallet dashboard (Article 5a(4)(d)(ii)).
- [ ] If you might receive the user's **portrait**, a rule not to keep it unless necessary or required by law ([2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng), new Article 3a of 2024/2977).

## 6. Intermediary or own verifier

- [ ] Decide whether you build your own verifier or use an **intermediary**. See [Intermediary or own verifier?](/registration-guide/intermediaries/).
- [ ] If you use one, record that you rely on an intermediary and its association (Annex I points 14 and 15).

## 7. Certificate readiness

- [ ] Find your Member State's authorised providers of **access** and **registration certificates** (Articles 7(1) and 8(1)). See [National registers](/national-trackers/member-states/).
- [ ] Plan **key generation and storage** for each verifier instance and how you will submit certificate signing requests (ARF v3.0.0, section 6.4.2).
- [ ] Plan for **one registration certificate per intended use**, and include the right one in each request (ARF section 6.6.3.3).
- [ ] Monitor **revocation** and expiry. Certificates are revoked when your registration changes, is suspended or cancelled (Article 9(6)). No EU-level validity period is set.
- [ ] Check that your verifier supports the protocol profiles in Annex II to 2024/2982. See [Technical essentials](/technical-integration/openid4vp/).

## 8. After you register

- [ ] Your entry appears in the public register. Check it for accuracy (Article 3(4)).
- [ ] Put registration updates into your change process for new attributes, new uses and new contacts.
- [ ] Know the **deadlines** that apply to you: [Deadlines for relying parties](/deadlines/).

:::note[Guidance, not legal advice]
This checklist is a practical aid based on the official texts. It is not legal advice and it is not complete for every sector. Your registrar's policy and your legal advisers take precedence.
:::

## Related pages

- [Registration requirements under CIR 2025/848](/registration-guide/registration-requirements/)
- [Access and registration certificates](/registration-guide/certificates/)
- [FAQ for relying parties](/faq/)

## Sources

- [Regulation (EU) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng), Articles 5a and 5b of Regulation (EU) No 910/2014 as amended
- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Articles 4 to 9 and Annex I
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng)
- [Commission Implementing Regulation (EU) 2026/1731](https://eur-lex.europa.eu/eli/reg_impl/2026/1731/oj/eng)
- [EUDI Wallet Architecture and Reference Framework v3.0.0](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework/releases/tag/v3.0.0)

Last reviewed: 28 Oct 2026
