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

## Pending: custom domains (once the zone moves into the EUDIWallet account)

`eudiwalletrp.com` and `www.eudiwalletrp.com` are already registered on the Pages project (status `pending`, "CNAME record not set").
1. Move the `eudiwalletrp.com` zone into the EUDIWallet account (nameservers currently `love`/`tosana.ns.cloudflare.com`; check whether they change after the move and update them at the registrar if so).
2. Add **Zone → Zone Read** and **Zone → DNS Edit** (scoped to eudiwalletrp.com) to the API token (add **Zone → Single Redirect / Dynamic Redirect Edit** or **Account → Bulk URL Redirects Edit** if the redirect is managed via the API).
3. DNS (proxied): `CNAME eudiwalletrp.com → eudiwalletrp-kb.pages.dev` (CNAME flattening at the apex) and `CNAME www → eudiwalletrp-kb.pages.dev`. With the zone in the same account, Cloudflare usually creates these automatically when the domain is (re)validated; to re-trigger, retry/re-add the domain on the project (`PATCH /accounts/{id}/pages/projects/eudiwalletrp-kb/domains/{name}`).
4. Confirm both domains show `active` and certificates are issued.
5. Make the apex the primary domain: 301 `www.eudiwalletrp.com/*` → `https://eudiwalletrp.com/${1}`, keeping the path and query string, via a Redirect Rule (Single Redirect) on the zone or a Bulk Redirect list and rule.
6. (Optional) Redirect `eudiwalletrp-kb.pages.dev` to the apex via a Bulk Redirect so the apex is the only URL search engines see.
