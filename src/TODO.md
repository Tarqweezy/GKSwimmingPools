# Outstanding tasks

Real-world tasks (not code) still needed to finish the SEO/launch work:

## 1. Google Business Profile
- [x] Set up as service-area business, all 12 cities added, NAP verified, hours set, photos added
- [x] Website URL updated to https://gkswimmingpools.com

## 2. Citations (NAP must exactly match the site)
- [x] Yelp: https://www.yelp.com/biz/gk-pool-maintenance-santa-clarita-4
- [ ] Bing Places for Business (bingplaces.com)
- [ ] Apple Maps Connect (mapsconnect.apple.com)
- [ ] BBB (optional, adds trust)

## 3. Google Search Console
- [x] Domain verified via HTML meta tag (in Layout.astro, applies site-wide)
- [x] Sitemap submitted: `https://gkswimmingpools.com/sitemap-index.xml`

## 4. Review schema
- [x] AggregateRating added: 4.8 stars, 13 reviews (weighted from Google 10×5.0 + Yelp 3×4.0). Update the math in `src/layouts/Layout.astro` whenever real counts change.

---

## Technical finishing touches (site is live now)
- [x] Favicon (generated from GK.png logo, full set in `public/favicon/`)
- [x] Custom 404 page (`src/pages/404.astro` — branded, with popular page links)
- [x] Analytics: Google Analytics 4 installed site-wide (Measurement ID G-7QDN080XF0, in `src/layouts/Layout.astro`)
- [x] City page word count improved: added service card descriptions + a genuinely city-specific "Why [City] Homeowners Choose GK" trust paragraph on all 12 pages (drawn from the already-researched local facts, not generic filler)

## Also done
- [x] Google Ads conversion tracking installed (AW-17308243497) — phone call clicks tracked automatically on every tel: link site-wide, form submission tracked only on confirmed successful Web3Forms submission (not just click, to avoid counting failed/invalid attempts)
- [x] Schema quick wins: FAQPage (homepage + commercial page), Service schema (all 6 service pages), BreadcrumbList (all nested pages) — auto-generated in Layout.astro so future pages inherit automatically
- [x] Migration 301 redirects added (netlify.toml) for old Wix URLs still in Google's index: /swimming-pool-maintenance, /residential-swimming-pool-services, /commercial-swimming-pool-services. Watch Search Console → Indexing → Pages → "Not found (404)" over the coming weeks and add redirects for any more that surface.

## Resolved
- [x] Commercial confirmed (apartments, hotels, gyms, all cities). Built /services/commercial-pool-services targeting real keyword data; old Wix commercial URL now 301s to it; added to nav, mobile menu, footer, and a linked line on all city pages.
- [x] Contact form: Web3Forms access key added to `src/components/ContactForm.astro` — form is live, test a submission once deployed
- Schema placeholders confirmed: priceRange "$$", hours Mon-Sat 7am-6pm, email admin@GKswimmingpools.com, sameAs (Yelp + Google Business Profile) — all set in `src/layouts/Layout.astro`
- Domain is live via Netlify (not Cloudflare) — see wrangler.jsonc, unused but harmless leftover from the earlier Cloudflare attempt
