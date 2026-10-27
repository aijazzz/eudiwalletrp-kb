---
title: FAQ for relying parties
description: Short answers to common questions on where to register, whether you register once or per country, how long certificates last, and what happens on refusal or suspension.
sidebar:
  label: FAQ
---

:::tip[Key points]
- You register in the **Member State where you are established** (Article 5b(1) of Regulation (EU) No 910/2014).
- The rules point to **one registration** in one national register, but they do not say so in those words.
- **Certificate validity periods are not set** in Implementing Regulation (EU) 2025/848. Ask your certificate provider.
- A registrar **must reject** a registration it cannot verify (Article 6(6) of 2025/848). It can **suspend or cancel** a registration on the grounds in Article 9, and must tell you why within 24 hours.
:::

Start with the [two-minute check](/check/) if you are not yet sure whether you must accept the wallet.

## Where do I register?

In the national register of the Member State where you are established. Article 5b(1) says: "the relying party shall register in the Member State where it is established."

Each Member State designates a registrar. See [National registers](/national-trackers/member-states/) for the registrars we could confirm. Most Member States have not yet published theirs.

## Do I register once, or in every country where I offer services?

As far as the texts go: **once**, in your Member State of establishment.

- Article 5b(1) ties registration to your Member State of establishment, not to where your users are.
- Article 6(3)(d) of 2025/848 asks the registrar to verify "the absence of an existing registration in another national register". That check only makes sense if you hold one registration.
- Your registration data is published in a form suitable for automated processing (Article 5b(5)), so wallets in other Member States can rely on it.

:::caution[Not stated in so many words]
Neither the Regulation nor 2025/848 says "register only once". The single-registration reading follows from Articles 5b(1) and 6(3)(d). Confirm with your registrar, especially if you have establishments in more than one Member State.
:::

## Can I hold several registrations?

2025/848 refers to "a specific registration" (Article 6(7)), which suggests a relying party can have more than one, for example per service or intended use. The text does not say how a registrar should handle several registrations from one party. Ask your registrar.

## We are established outside the EU. Can we register?

Article 5b only covers registration in the Member State where you are established. It does not set out a route for relying parties established outside the EU. This is an open question; see [Who needs to register](/registration-guide/who-needs-to-register/).

## Is there a fee?

The Regulation only says the registration process "shall be cost-effective and proportionate-to-risk" (Article 5b(2)). Fees, if any, are set nationally.

## How long are access and registration certificates valid?

**The legal texts we checked do not set a validity period.** 2025/848 sets content and revocation rules for both certificates, but no lifetime. Expect your national certificate provider to set it. See [Access and registration certificates](/registration-guide/certificates/).

## What do I have to keep up to date?

You must inform the registrar without delay about changes to your registration (Article 5b(6) of the Regulation; Article 5(3) of 2025/848). If certificate content is no longer accurate, the provider revokes the certificate.

## Can my registration be refused?

Yes. Where the registrar cannot verify your information under Article 6(3) to (5), it "shall reject the registration" (Article 6(6) of 2025/848). The national register must describe the redress mechanism available under national law (Article 4(3)(f)).

## Can my registration be suspended or cancelled?

Yes, under Article 9 of 2025/848.

| Situation | Registrar must or may act | Source |
| --- | --- | --- |
| A supervisory body requests it under Article 46a(4)(f) of the Regulation | Must | Art 9(1) |
| You request it yourself | Must | Art 9(3) |
| The registrar has reason to believe your registration is inaccurate, out of date or misleading | May | Art 9(2)(a) |
| You do not comply with the registration policy | May | Art 9(2)(b) |
| You request more attributes than you registered | May | Art 9(2)(c) |
| You otherwise breach Union or national law in your role as relying party | May | Art 9(2)(d) |

- For the "may" cases, the registrar must run a proportionality assessment first. It can then act with or without prior notice (Art 9(4)).
- You must be told without undue delay, and no later than 24 hours after the suspension or cancellation. The notice gives the reasons and the means of redress or appeal (Art 9(5)).
- Your access and registration certificates are then revoked without undue delay (Art 9(6)).

## How do I stop relying on the wallet?

Notify the registrar without undue delay and ask for the registration to be cancelled (Article 6(7) of 2025/848). Registrars keep the records of your registration for 10 years (Article 10).

## When do the rules apply?

2025/848 applies from 24 December 2026. See [Deadlines 2026–2027](/deadlines/).

:::note[Guidance, not legal advice]
These answers explain the official texts in plain language. They are not legal advice. Where the texts are silent, we say so; check with your registrar or legal team.
:::

## Related pages

- [How to register](/registration-guide/registration-process/)
- [Registration requirements under CIR 2025/848](/registration-guide/registration-requirements/)
- [Relying-party registration checklist](/registration-guide/checklist/)
- [Intermediary or own verifier?](/registration-guide/intermediaries/)
- [What data can you request?](/technical-integration/data-requests/)
- [Technical essentials](/technical-integration/openid4vp/)

## Sources

- [Regulation (EU) No 910/2014 as amended by Regulation (EU) 2024/1183](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng), Articles 5b and 46a
- [Commission Implementing Regulation (EU) 2025/848](https://eur-lex.europa.eu/eli/reg_impl/2025/848/oj/eng), Articles 4, 5, 6, 9, 10 and 11
- [Commission Implementing Regulation (EU) 2026/1730](https://eur-lex.europa.eu/eli/reg_impl/2026/1730/oj/eng) (amending Article 6 of 2025/848)
- [Architecture and Reference Framework](https://eu-digital-identity-wallet.github.io/eudi-doc-architecture-and-reference-framework/latest/)

Last reviewed: 28 Oct 2026
