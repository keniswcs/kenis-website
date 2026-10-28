# kenis-website

Marketing site for **[www.keniswcs.com](https://www.keniswcs.com)** — KENIS WCS Integrated Solutions.

Repository: [github.com/keniswcs/kenis-website](https://github.com/keniswcs/kenis-website) (private, in the `keniswcs` GitHub organization)

Integration & Orchestration Platform between WMS and WCS, floor operations, implementation, and AI-powered recovery.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| Fonts | Syne + IBM Plex Sans (Google Fonts) |
| Hosting target | GoDaddy (static export → FTP / File Manager) |

## Project structure

```
kenis-website/
├── docs/                     # Product source briefs
├── public/                   # Static assets (logo, robots.txt, sitemap.xml)
├── src/
│   ├── app/                  # One folder per page (App Router)
│   │   ├── page.tsx          # Home: slideshow + overview
│   │   ├── capabilities/     # /capabilities
│   │   ├── platform/         # /platform
│   │   ├── deployment/       # /deployment
│   │   ├── ai-operations/    # /ai-operations
│   │   ├── analytics/        # /analytics (live UCH/RCH sample dashboard)
│   │   ├── expertise/        # /expertise
│   │   └── contact/          # /contact
│   ├── components/           # Header, footer, slideshow, shared page pieces
│   ├── content/              # Editable copy, one file per page
│   └── lib/                  # Shared utilities (future)
├── next.config.ts            # Static export configured
└── package.json
```

## Local development

```bash
git clone https://github.com/keniswcs/kenis-website.git
cd kenis-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

All wording lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | Company name, menu, contact email, home page, and the slideshow (`hero.slides`) |
| `capabilities.ts` | Solutions page (`/capabilities`) |
| `platform.ts` | Integration & Orchestration Platform page |
| `deployment.ts` | Deployment page |
| `ai-operations.ts` | AI Operations page |
| `analytics.ts` | Reporting & Analytics page, UCH/RCH definitions, and the sample dashboard data |
| `expertise.ts` | Why KENIS page (`/expertise`): about KENIS, why KENIS, and expertise |
| `contact.ts` | Contact page and form topics |
| `seo.ts` | Search titles and keywords for each page |

If you add a new page, also add it to the menu in `site.ts`, to `seo.ts`, and to `public/sitemap.xml`.

Logo files live in `public/images/` (`kenis-logo.jpeg` is the original artwork, `kenis-mark.png` is the round cutout used on the page). The browser tab icons are `src/app/icon.png` and `src/app/apple-icon.png`.

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
