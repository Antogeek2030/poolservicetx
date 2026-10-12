# Pool Services Spring TX — Astro Site

Static Astro site for **poolservicesspringtx.com**, optimized for Cloudflare Pages.

## Features
- Responsive, mobile-first design
- Fresh blue + aqua + green color theme (pool-inspired)
- OpenStreetMap embed for 18913 Tomato St #102, Spring, TX 77379
- **Markdown blog** via Astro Content Collections (`src/content/blog/*.md`)
- SEO: meta tags, canonical, JSON-LD LocalBusiness schema, sitemap, robots.txt
- Fast static build for Google indexing
- Cloudflare Pages ready (static output, no adapter needed)

## Phone number
Placeholder: **(281) 555-0199** — replace across the project (search for `2815550199` and `555-0199`).

## Blog (Markdown)
1. Add a new `.md` file in `src/content/blog/`.
2. Use frontmatter:
   ```yaml
   ---
   title: "Your Title"
   description: "Short SEO description"
   pubDate: 2026-10-12
   author: "Pool Services Spring TX"
   tags: ["maintenance", "tips"]
   draft: false
   ---
   ```
3. Write the body in Markdown. The post appears automatically at `/blog/your-file-name/`.
4. Set `draft: true` to hide a post from the listing and sitemap paths.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub/GitLab repo.
2. In Cloudflare Dashboard → Workers & Pages → Create → Connect to Git.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add custom domain `poolservicesspringtx.com`.
5. Submit `https://poolservicesspringtx.com/sitemap-index.xml` in Google Search Console.

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output is in `dist/`.

## Notes
- Site is fully static — ideal for Pages and SEO.
- `@astrojs/sitemap` generates `/sitemap-index.xml` at build time.
- `public/robots.txt` points crawlers to the sitemap.
- Content Collections (Astro 5+) power the blog; no extra MDX dependency required for plain Markdown.
