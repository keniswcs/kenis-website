# kenis-website

Marketing site for **[www.keniswcs.com](https://www.keniswcs.com)** — KENIS WCS Integrated Solutions.

Repository: [github.com/mathukureddy/kenis-website](https://github.com/mathukureddy/kenis-website) (private)

Integration & Orchestration Platform between WMS and WCS, floor operations, implementation, and AI-powered recovery.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| Icons | lucide-react |
| Fonts | Syne + IBM Plex Sans (Google Fonts) |
| Hosting target | GoDaddy (static export → FTP / File Manager) |

## Project structure

```
kenis-website/
├── docs/                     # Product source briefs and the internal technical brief
├── public/                   # Static assets (logo, robots.txt, sitemap.xml)
├── src/
│   ├── app/                  # One folder per page (App Router)
│   │   ├── page.tsx          # Home
│   │   ├── solutions/        # /solutions (all five solutions)
│   │   │   ├── ai-operations/  # /solutions/ai-operations
│   │   │   └── analytics/      # /solutions/analytics (live UCH/RCH sample dashboard)
│   │   ├── platform/         # /platform
│   │   ├── why-kenis/        # /why-kenis
│   │   └── contact/          # /contact
│   ├── components/           # Header, footer, and shared page pieces
│   ├── content/              # Editable copy, one file per page
│   └── lib/                  # Page metadata helper
├── next.config.ts            # Static export configured
└── package.json
```

## Local development

```bash
git clone https://github.com/mathukureddy/kenis-website.git
cd kenis-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All wording lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Company name, menu (including the Solutions dropdown), contact details, and the closing call to action |
| `home.ts` | Home page: the three hero slides (Integrate, Operate, Optimize), "Why it matters", and "One Partner" |
| `capabilities.ts` | Solutions page: delivery lifecycle and the eight services with activities and outcomes |
| `ai-operations.ts` | AI Operations page: steps, use cases, monitoring, benefits, and guardrails |
| `analytics.ts` | Operational Analytics page: UCH/RCH, sample dashboard data, views, data sources, and features |
| `platform.ts` | Platform page: architecture, core services, error handling, SLA tiers, modules, and scenarios |
| `deployment.ts` | Deployment page: options, comparison, disaster recovery, guardrails, and process |
| `expertise.ts` | Why KENIS page: technology expertise and what sets KENIS apart |
| `contact.ts` | Contact page and form topics |
| `seo.ts` | Search titles and keywords for each page |

If you add a new page, also add it to the menu in `site.ts`, to `seo.ts`, and to `public/sitemap.xml`. If you retire or move a page, add a 301 redirect for the old address to both `netlify.toml` and `public/.htaccess`.

Logo files live in `public/images/` (`kenis-logo.jpeg` is the original artwork, `kenis-mark.png` is the round cutout used on the page). The browser tab icons are `src/app/icon.png` and `src/app/apple-icon.png`. The warehouse floor backgrounds (`floor-conveyors.jpg` for the home hero and page headers, `floor-workflow.jpg` for the home "One Partner" section and the Platform header, `ai-operations.jpg` for the AI Operations header, `floor-packing.jpg` for the closing call to action) are AI-generated and set in `src/components/FloorPhoto.tsx`.

## Hosting

Production is **https://www.keniswcs.com**, hosted on **Netlify** with the domain registered at GoDaddy. Merging `develop` into `main` publishes the site automatically. Release process, DNS records, and troubleshooting: [HOSTING-AND-RELEASE-PROCESS.md](./HOSTING-AND-RELEASE-PROCESS.md). Setup steps: [DEPLOY-NETLIFY.md](./DEPLOY-NETLIFY.md).

`npm run build` exports the static site to `out/`. To host on GoDaddy cPanel instead, upload the contents of `out/` as described in [DEPLOY-GODADDY.md](./DEPLOY-GODADDY.md).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
| `npm run start` | Not used (the site is a static export) |
