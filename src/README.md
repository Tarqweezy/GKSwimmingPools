# GK Swimming Pools — Astro Website

Migrated from Wix. Built with Astro + Cloudflare Pages.

## Getting Started

```bash
npm install
npm run dev       # starts dev server at localhost:4321
npm run build     # builds to /dist
npm run preview   # previews the build locally
```

## Before You Deploy

1. **Web3Forms key** — Sign up at https://web3forms.com (free), get your access key, and replace `YOUR_ACCESS_KEY_HERE` in `src/components/ContactForm.astro`

2. **Images** — Download all images from your Wix Media Manager and put them in `public/images/`. Then update image `src` attributes in the pages to point to `/images/your-image.jpg`

3. **Blog** — Add blog posts as Markdown files in `src/content/blog/`. See the blog setup guide below.

## Site Structure

```
src/
  layouts/
    Layout.astro          ← master template (nav, footer, head)
  components/
    ContactForm.astro     ← reusable contact form (Web3Forms)
  pages/
    index.astro           ← home page
    our-story.astro       ← our story page
    contact.astro         ← contact page
    services/
      pool-maintenance.astro
      pool-inspections.astro
      pool-repairs.astro
      pool-remodeling.astro
      jacuzzi-service.astro
  styles/
    global.css            ← all brand tokens, typography, components
public/
  _redirects              ← 301 redirects from old Wix URLs
  images/                 ← put your downloaded Wix images here
```

## URL Mapping (Old Wix → New Astro)

| Old Wix URL | New URL |
|---|---|
| `/swimming-pool-maintenance` | `/services/pool-maintenance` |
| `/swimming-pool-inspections` | `/services/pool-inspections` |
| `/swimming-pool-repairs` | `/services/pool-repairs` |
| `/pool-renovations` | `/services/pool-remodeling` |
| `/jacuzzi-hot-tub-services` | `/services/jacuzzi-service` |

The `public/_redirects` file handles these automatically on Cloudflare Pages.

## Adding Blog Posts

Create a file in `src/content/blog/` like this:

```markdown
---
title: "How to Balance Your Pool's pH"
description: "A complete guide to keeping your pool chemistry balanced in LA's climate."
pubDate: 2024-05-10
---

Your blog post content here...
```

The filename becomes the URL slug: `how-to-balance-pool-ph.md` → `/blog/how-to-balance-pool-ph`

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Workers & Pages → Create Application → Pages
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set build output: `dist`
6. Click Save & Deploy
7. Add your custom domain under Custom Domains

## Brand Tokens (CSS Variables)

Edit in `src/styles/global.css`:

- `--color-deep` → #0a1628 (dark navy)
- `--color-water` → #1a6fa8 (pool blue)
- `--color-sun` → #f5a623 (California sun / CTAs)
- `--font-display` → Barlow Condensed (headings)
- `--font-body` → Barlow (body text)
