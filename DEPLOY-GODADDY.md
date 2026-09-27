# Deploy keniswcs.com on GoDaddy

This site builds as **static HTML/CSS/JS** (`output: "export"`), which works on GoDaddy shared hosting, cPanel, or Managed WordPress *file hosting* without needing Node.js on the server.

## 1. Point the domain (if not already)

In GoDaddy Domain Settings for **keniswcs.com**:

- If using GoDaddy Web Hosting: attach the domain to the hosting plan.
- DNS A record typically points to your hosting IP (GoDaddy shows this under hosting details).
- Allow DNS propagation (can take minutes to hours).

## 2. Build locally

```bash
cd kenis-website
npm install
npm run build
```

Confirm `kenis-website/out/` contains `index.html`, `_next/`, etc.

## 3. Upload files

### Option A — cPanel File Manager

1. Log in to GoDaddy → Hosting → cPanel → **File Manager**.
2. Open `public_html` (or the folder mapped to keniswcs.com).
3. Upload **all contents** of `out/` (not the `out` folder itself).
4. Ensure `index.html` sits at the root of that folder.

### Option B — FTP / SFTP

1. Create an FTP user in GoDaddy hosting.
2. Connect with FileZilla (or similar) to the host GoDaddy provides.
3. Sync the contents of `out/` to `public_html`.

## 4. HTTPS

In GoDaddy hosting, enable the free SSL certificate for keniswcs.com (often under SSL/TLS or Security). Force HTTPS if the control panel offers it.

## 5. Verify

Visit `https://keniswcs.com` and check:

- Home page loads
- Each menu page loads directly by URL, for example `https://keniswcs.com/platform/` and `https://keniswcs.com/contact/` (each page is exported as its own folder with an `index.html`)
- Contact form opens mail to `info@keniswcs.com` (update in `src/content/site.ts` if needed)

## 6. Redeploy after changes

```bash
npm run build
```

Re-upload changed files under `out/` (or replace the whole root for simplicity).

## Notes

- **Do not** upload `src/`, `node_modules/`, or `package.json` to GoDaddy for this static setup—only `out/`.
- Image optimization is disabled (`images.unoptimized`) because there is no Next.js image server on shared hosting.
- For a contact form that emails without opening the visitor’s mail client, add a form backend later (Formspree, Basin, or a small serverless API)—not required for the static launch.
- If you later move to Vercel/Netlify/Cloudflare Pages, you can remove `output: "export"` and use the default Next.js server/edge features.
