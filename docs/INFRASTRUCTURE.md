# Infrastructure notes

- Cloudflare account: `EUDIWallet` (id `8072e854d122b3c345b8c1cddd8362ed`)
- Pages project: `eudiwalletrp-kb` (direct upload, production branch `main`) → https://eudiwalletrp-kb.pages.dev
- Deploy: `.github/workflows/deploy.yml` (push to `main` / manual), repo secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

## Pending: Cloudflare Web Analytics

The current API token cannot create Web Analytics sites (`POST /accounts/{id}/rum/site_info` → `10000 Authentication error`).
Options:
1. Dashboard: Workers & Pages → `eudiwalletrp-kb` → Metrics → Web Analytics → **Enable** (Cloudflare injects the beacon automatically on the next deployment), or
2. Give a token Web Analytics edit permission, create the site via the API, and add the beacon to `astro.config.mjs`:
   ```js
   head: [{ tag: 'script', attrs: { defer: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "<SITE_TOKEN>"}' } }],
   ```

## Custom domains (live since 4 Nov 2026)

- Zone `eudiwalletrp.com` (id `329552e3210535742a655c545899724a`) is in the EUDIWallet account, status `active`. Nameservers `adelaide.ns.cloudflare.com` / `roan.ns.cloudflare.com`; registrar is Cloudflare.
- Pages custom domains on `eudiwalletrp-kb`: `eudiwalletrp.com` and `www.eudiwalletrp.com`, both `active`. Certificates are issued by Google Trust Services; Pages renews them automatically.
- DNS (proxied): `CNAME eudiwalletrp.com → eudiwalletrp-kb.pages.dev` (CNAME flattening at the apex) and `CNAME www → eudiwalletrp-kb.pages.dev`.
- The apex is the primary domain. A Single Redirect rule (phase `http_request_dynamic_redirect`) sends `www.eudiwalletrp.com/*` with a 301 to `https://eudiwalletrp.com/*`, keeping the path and query string.
- Always Use HTTPS is on. SSL/TLS mode is `full`.
- Two old `_acme-challenge` TXT records came over with the zone import. They did not block certificate issuance and were left in place; they can be deleted.
- (Optional, not done) Redirect `eudiwalletrp-kb.pages.dev` to the apex via a Bulk Redirect so the apex is the only URL search engines see.

## Email Routing

- Enabled on the zone. The MX records (`route1/2/3.mx.cloudflare.net`), SPF (`v=spf1 include:_spf.mx.cloudflare.net ~all`) and DKIM (`cf2024-1._domainkey`) records are managed by Email Routing.
- Verified destination address: `eengineer@gmail.com`.
- Rules: `info@eudiwalletrp.com` forwards to `eengineer@gmail.com`; the catch-all forwards to `eengineer@gmail.com`. Both are enabled.

## API tokens

- The GitHub repo secret `CLOUDFLARE_API_TOKEN` (used by the deploy workflow) still holds the older token, which expires around 25 Jan 2027. Replace it before then.
- A newer account API token (no expiry date set) was used for the zone, DNS, redirect and Email Routing setup.
