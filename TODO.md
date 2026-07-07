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
- [ ] Verify domain (TXT record via Netlify DNS, since domain now points there)
- [ ] Submit sitemap: `https://gkswimmingpools.com/sitemap-index.xml`

## 4. Review schema
- Add `AggregateRating` / `Review` JSON-LD once there are real reviews on Google or Yelp
- Never fabricate ratings or review counts, Google penalizes this

---

## Technical finishing touches (site is live now)
- [ ] Custom 404 page (currently shows Netlify's generic default)
- [ ] Proper favicon (currently just reusing the full logo file)
- [ ] Analytics (Google Analytics or similar — currently zero visibility into traffic)
- [ ] City page word count still ~200-235 words vs. the 300-500 target in gk-seo skill

## Also still pending (separate from above)
- [x] Contact form: Web3Forms access key added to `src/components/ContactForm.astro` — form is live, test a submission once deployed
- Schema placeholders confirmed: priceRange "$$", hours Mon-Sat 7am-6pm, email admin@GKswimmingpools.com, sameAs (Yelp + Google Business Profile) — all set in `src/layouts/Layout.astro`
- Domain is live via Netlify (not Cloudflare) — see wrangler.jsonc, unused but harmless leftover from the earlier Cloudflare attempt
