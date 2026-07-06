# Outstanding tasks

Real-world tasks (not code) still needed to finish the SEO/launch work:

## 1. Google Business Profile
- Set up at google.com/business
- Choose "I deliver goods and services to my customers" (service-area business, keeps address private)
- Add all 12 service cities
- Category: most specific match available (e.g. "Pool cleaning service")
- Hours: Mon-Sat, 7am-6pm, closed Sunday
- Add real job photos

## 2. Citations (NAP must exactly match the site)
- [x] Yelp: https://www.yelp.com/biz/gk-pool-maintenance-santa-clarita-4
- [ ] Bing Places for Business (bingplaces.com)
- [ ] Apple Maps Connect (mapsconnect.apple.com)
- [ ] BBB (optional, adds trust)

## 3. Google Search Console
- Verify the domain once live (DNS TXT record via Cloudflare, or HTML file upload)
- Submit sitemap: `https://www.gkswimmingpools.com/sitemap-index.xml`

## 4. Review schema
- Add `AggregateRating` / `Review` JSON-LD once there are real reviews on Google or Yelp
- Never fabricate ratings or review counts, Google penalizes this

---

## Also still pending (separate from above)
- [x] Contact form: Web3Forms access key added to `src/components/ContactForm.astro` — form is live, test a submission once deployed
- Schema placeholders confirmed: priceRange "$$", hours Mon-Sat 7am-6pm, email admin@GKswimmingpools.com, sameAs (Yelp + Google Business Profile) — all set in `src/layouts/Layout.astro`
