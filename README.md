# kenis-website

Marketing site for **[keniswcs.com](https://keniswcs.com)** — KENIS WCS Integrated Solutions.

Repository: [github.com/mathukureddy/kenis-website](https://github.com/mathukureddy/kenis-website) (private)

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
| `site.ts` | Company name, menu, contact email, home page, and the slideshow (`hero.slides`) |
| `capabilities.ts` | Capabilities page |
| `platform.ts` | Integration & Orchestration Platform page |
| `deployment.ts` | Deployment page |
| `ai-operations.ts` | AI Operations page |
| `expertise.ts` | Expertise page |
| `contact.ts` | Contact page and form topics |

If you add a new page, also add it to the menu in `site.ts` and to `public/sitemap.xml`.

Logo files live in `public/images/` (`kenis-logo.jpeg` is the original artwork, `kenis-mark.png` is the round cutout used on the page). The browser tab icons are `src/app/icon.png` and `src/app/apple-icon.png`.

## Production build (GoDaddy)

```bash
npm run build
```

Output lands in `out/`. Upload the **contents** of `out/` to your GoDaddy web root (`public_html` or the domain folder).

See [DEPLOY-GODADDY.md](./DEPLOY-GODADDY.md) for step-by-step hosting setup.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
| `npm run start` | Not used for static GoDaddy hosting |
