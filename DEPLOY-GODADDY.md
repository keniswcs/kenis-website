# Deploy www.keniswcs.com on GoDaddy

The site builds to plain HTML, CSS, and JavaScript (`output: "export"` in `next.config.ts`). GoDaddy only serves files; it does not need Node.js. The production address is **https://www.keniswcs.com**, and `keniswcs.com` redirects to it.

| Part | What | When |
| --- | --- | --- |
| 1 | Check the GoDaddy hosting plan | Once |
| 2 | Connect the domain to hosting and set DNS for `www` | Once |
| 3 | Turn on SSL (HTTPS) | Once |
| 4 | Build a release on your computer | Every release |
| 5 | Upload the release to GoDaddy | Every release |
| 6 | Verify the live site | Every release |

---

## Part 1 - Check the hosting plan (once)

1. Sign in at [godaddy.com](https://www.godaddy.com) and open **My Products**.
2. Find the hosting product:
   - **Web Hosting (cPanel)**: Economy, Deluxe, Ultimate, or Web Hosting Plus. This is what you need.
   - **Websites + Marketing / Website Builder**: cannot host custom code. You need a cPanel Web Hosting plan instead.
   - **Managed WordPress**: possible via SFTP, but not recommended for this site.
3. If you have no hosting yet, buy **Web Hosting (Economy is enough)**.

## Part 2 - Connect the domain and set DNS for www (once)

### 2a. Attach keniswcs.com to the hosting plan

1. **My Products > Web Hosting > Set up** (or **Manage** if already set up).
2. Choose **keniswcs.com** as the primary domain and pick the data center closest to your visitors (for example, North America).
3. Open **cPanel Admin** when setup finishes. On the cPanel home page, note the **Shared IP Address** on the right (General Information).

If the domain and hosting are in the same GoDaddy account, GoDaddy usually creates the DNS records for you. Still check them in 2b.

### 2b. DNS records

**My Products > Domains > keniswcs.com > DNS** (Manage DNS). You need:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | your hosting Shared IP Address | 1 hour |
| CNAME | `www` | `@` (or `keniswcs.com`) | 1 hour |

- Delete any other **A** record for `@` (for example GoDaddy's default "Parked" record) and any other `www` record.
- Remove **Domain Forwarding** for keniswcs.com if it is set (Domains > keniswcs.com > Forwarding).
- **Do not touch MX, TXT (SPF/DKIM), or other email records**, or email to info@keniswcs.com can stop working.

### 2c. Wait for DNS

Changes usually apply within an hour (up to 48 hours). Check from PowerShell:

```powershell
nslookup keniswcs.com
nslookup www.keniswcs.com
```

Both should return your hosting IP (www may show `keniswcs.com` as an alias first).

## Part 3 - Turn on SSL / HTTPS (once)

The site redirects every visitor to `https://www.keniswcs.com`, so the certificate must cover **both** `keniswcs.com` and `www.keniswcs.com`.

1. cPanel > **Security > SSL/TLS Status**.
2. Make sure `keniswcs.com` and `www.keniswcs.com` are both listed, then click **Run AutoSSL**. (On some plans: My Products > Web Hosting > Manage > **Settings > SSL**.)
3. Wait until both show a valid certificate (often minutes, sometimes a few hours after DNS is correct).

Do the first upload only after the certificate is active. If you must upload earlier, delete `.htaccess` from `public_html` until SSL is ready, then upload it again.

## Part 4 - Build a release (every release)

Work happens on `develop`; production is always built from `main`.

1. **Merge to main** with a pull request on GitHub (develop > main), then on your computer:

   ```powershell
   cd C:\Users\chakr\Documents\KenisWCS\kenis-website
   git checkout main
   git pull
   ```

2. **Install, check, and build:**

   ```powershell
   npm ci
   npm run lint
   npm run build
   ```

   The build creates the `out\` folder. It must contain `index.html`, `404.html`, `.htaccess`, `_next\`, `images\`, and one folder per page (`capabilities\`, `platform\`, `deployment\`, `ai-operations\`, `analytics\`, `expertise\`, `contact\`).

3. **Optional local preview** of the exact files you will upload:

   ```powershell
   npx serve out
   ```

   Open the address it prints (usually http://localhost:3000).

4. **Create the upload zip** (contents of `out\`, including `.htaccess`):

   ```powershell
   $stamp = Get-Date -Format "yyyy-MM-dd-HHmm"
   New-Item -ItemType Directory -Force ..\releases | Out-Null
   Compress-Archive -Path (Get-ChildItem out -Force).FullName -DestinationPath "..\releases\keniswcs-$stamp.zip"
   ```

   Keep previous zips in `KenisWCS\releases\`; they are your rollback.

5. **Switch back to develop** for further work: `git checkout develop`.

## Part 5 - Upload to GoDaddy (every release)

### Option A - cPanel File Manager (recommended)

1. cPanel > **Files > File Manager** > open **public_html**.
2. Click **Settings** (top right) and tick **Show Hidden Files (dotfiles)**.
3. **First release only:** delete GoDaddy's placeholder files (for example `index.php`, `default.html`, `coming-soon` files). Keep `cgi-bin` and `.well-known` (SSL uses it).
4. **Later releases:** delete the old site files and folders (`_next`, page folders, `index.html`, and so on) so no outdated files remain. Again keep `cgi-bin` and `.well-known`.
5. Click **Upload**, select the zip from `KenisWCS\releases\`, and wait for 100%.
6. Back in public_html, right-click the zip > **Extract** > extract into `/public_html`.
7. Confirm `index.html` and `.htaccess` sit directly in public_html (not inside a subfolder), then delete the zip.

### Option B - FTP (FileZilla)

1. cPanel > **Files > FTP Accounts**: create an account (or use the main cPanel login).
2. In FileZilla connect to `ftp.keniswcs.com` (or the server IP) on port 21 with **explicit FTP over TLS**.
3. Upload everything inside `out\` (including `.htaccess`) into `/public_html`, overwriting existing files.

## Part 6 - Verify (every release)

In a private browser window:

- [ ] `https://www.keniswcs.com` loads with the padlock
- [ ] `http://keniswcs.com`, `https://keniswcs.com`, and `http://www.keniswcs.com` all end up at `https://www.keniswcs.com`
- [ ] Every menu page loads directly, for example `https://www.keniswcs.com/analytics/` and `https://www.keniswcs.com/platform/`
- [ ] A made-up address such as `https://www.keniswcs.com/test-404/` shows the KENIS 404 page
- [ ] Slideshow, analytics dashboard, and platform module switches work
- [ ] Phone link calls (901) 651-1909 on a mobile phone; the contact form opens an email to info@keniswcs.com
- [ ] `https://www.keniswcs.com/sitemap.xml` and `/robots.txt` load

If the browser still shows the old site, hard-refresh (Ctrl+F5) or try another device; DNS or browser caches can lag.

## After launch (recommended)

- **Email:** make sure the mailbox `info@keniswcs.com` exists (GoDaddy Professional Email or Microsoft 365), because the contact form and footer use it.
- **Google Search Console:** add `https://www.keniswcs.com`, verify with the DNS TXT record it gives you, and submit `https://www.keniswcs.com/sitemap.xml`.
- **HSTS:** after HTTPS has worked for a week on both addresses, uncomment the `Strict-Transport-Security` line in `public/.htaccess` and release again.

## Rollback

Upload and extract the previous zip from `KenisWCS\releases\` (Part 5). The site returns to that version immediately.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| "Too many redirects" | SSL is not active yet, or another redirect is set in GoDaddy (Domain Forwarding or cPanel **Domains > Force HTTPS Redirect** fighting the rules). Remove the duplicate redirect, or temporarily delete `.htaccess`. |
| Certificate warning | AutoSSL has not covered `www.keniswcs.com` yet. Check DNS (Part 2), then re-run AutoSSL. |
| 403 Forbidden on the home page | `index.html` is not directly in public_html (it was extracted into a subfolder). Move the files up one level. |
| GoDaddy "parked" or "coming soon" page | DNS still points elsewhere, or placeholder files remain in public_html. |
| Pages work from the menu but 404 when opened directly | Page folders (for example `platform/index.html`) were not uploaded. Re-extract the full zip. |
| Styles missing | The `_next` folder was not uploaded, or `.htaccess` was edited incorrectly. Re-upload the full release. |

## Notes

- Upload only the contents of `out\`. Never upload `src\`, `docs\`, `node_modules\`, or `package.json`; `docs\` holds internal documents.
- Image optimization is disabled (`images.unoptimized`) because shared hosting has no Next.js image server.
- The contact form opens the visitor's mail app. To send without that, add a form service later (Formspree, Basin, or a small serverless API).
