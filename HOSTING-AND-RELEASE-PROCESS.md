# Hosting and Release Process - www.keniswcs.com

How the KENIS WCS website is hosted, how changes reach production, and how the setup was done. Use this as the runbook for releases and troubleshooting.

Last verified: October 2, 2026.

---

## 1. How it fits together

```
 Developer (local)                GitHub (private repo)                 Netlify                     Visitors
 -----------------                ---------------------                 -------                     --------
 npm run dev        push    +---> develop ---- pull request ---+        builds main    serves     https://www.keniswcs.com
 localhost:3000  ---------- |                                  v  --->  npm run build  -------->  (Netlify CDN + HTTPS)
                            |                     main (production)     publishes out/
                            |                                                  ^
 GoDaddy: domain registration + DNS (A and CNAME point to Netlify) -----------+
          + Microsoft 365 email for info@keniswcs.com (unchanged)
```

- **GitHub** holds the code. `develop` is for ongoing work; `main` is production.
- **Netlify** builds `main` automatically and serves the site worldwide with free HTTPS.
- **GoDaddy** keeps the domain registration, DNS, and email. It does not host the website.

## 2. Production setup at a glance

| Item | Value |
| --- | --- |
| Live site | https://www.keniswcs.com (primary) |
| Other addresses | `keniswcs.com`, `http://...` redirect to https://www.keniswcs.com |
| Code repository | https://github.com/mathukureddy/kenis-website (private) |
| Production branch | `main` (work happens on `develop`) |
| Hosting | Netlify project `keniswcs`, free plan; temporary address https://keniswcs.netlify.app |
| Build | `npm run build` (Next.js static export to `out/`), Node 24, settings in `netlify.toml` |
| Domain registrar and DNS | GoDaddy (name servers `ns11.domaincontrol.com`, `ns12.domaincontrol.com`) |
| SSL certificate | Let's Encrypt via Netlify, covers `keniswcs.com` and `www.keniswcs.com`, renews automatically |
| Email | Microsoft 365 through GoDaddy (info@keniswcs.com) |
| Contact form | Netlify Forms, form `contact`; each submission is emailed to info@keniswcs.com with the visitor's email as Reply-To (setup in [DEPLOY-NETLIFY.md](./DEPLOY-NETLIFY.md), Part 6) |
| Netlify sign-in | "Log in with GitHub" using the `mathukureddy` account |

## 3. DNS records in GoDaddy

**Website records (point to Netlify):**

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `75.2.60.5` |
| CNAME | `www` | `keniswcs.netlify.app` |

**Email records (Microsoft 365) - do not change or delete:**

| Type | Name | Value |
| --- | --- | --- |
| MX | `@` | `keniswcs-com.mail.protection.outlook.com` |
| TXT | `@` | `NETORGFT21168549.onmicrosoft.com` (Microsoft domain verification) |
| TXT | `@` | `v=spf1 include:secureserver.net -all` (SPF) |
| CNAME | `autodiscover` | `autodiscover.outlook.com` |

GoDaddy may also list other email-related records (for example DKIM or `_domainconnect`). Leave those as they are. A TXT record starting with `google-site-verification=` proves ownership to Google Search Console (section 8); keep it too.

## 4. Releasing a change (every time)

1. **Develop locally** on the `develop` branch:

   ```powershell
   cd C:\Users\chakr\Documents\KenisWCS\kenis-website
   git checkout develop
   git pull
   npm run dev          # preview at http://localhost:3000
   ```

2. **Check before committing:**

   ```powershell
   npm run lint
   npm run build        # must finish without errors
   ```

   Stop the dev server (Ctrl+C) before `npm ci` or a fresh install; on Windows it locks files in `node_modules`.

3. **Commit and push to develop:**

   ```powershell
   git add -A
   git commit -m "Describe the change"
   git push
   ```

4. **Open a pull request** from `develop` to `main` on GitHub (or `gh pr create --base main --head develop`). Netlify adds a **Deploy Preview** link to the pull request; open it to review the change on a temporary address.

5. **Merge the pull request.** Netlify builds `main` and publishes it to https://www.keniswcs.com, usually within 1 to 3 minutes. Progress is under Netlify > project > **Deploys**.

6. **Verify** with the checklist in section 5.

**Rollback:** Netlify > **Deploys** > select the last good deploy > **Publish deploy**. The site switches back immediately. Afterwards, revert or fix the change in GitHub so the next merge does not reintroduce it.

## 5. Verification checklist

After each release, in a private browser window:

- [ ] https://www.keniswcs.com loads with the padlock
- [ ] `keniswcs.com` and `http://` addresses redirect to https://www.keniswcs.com
- [ ] Each menu page opens directly (Capabilities, Platform, Deployment, AI Operations, Analytics, Expertise, Contact)
- [ ] A made-up address (for example `/test-404/`) shows the KENIS 404 page
- [ ] Solutions dropdown (desktop) and full-screen menu (phone) work, and the analytics dashboard updates
- [ ] Old addresses such as `/capabilities/` and `/analytics/` redirect to their new pages
- [ ] Phone link works, and a test message from the contact form arrives at info@keniswcs.com

**Command-line checks (PowerShell):**

```powershell
# DNS should point to Netlify
Resolve-DnsName keniswcs.com -Type A -Server 8.8.8.8          # 75.2.60.5
Resolve-DnsName www.keniswcs.com -Type CNAME -Server 8.8.8.8  # keniswcs.netlify.app

# Email record must still be present
Resolve-DnsName keniswcs.com -Type MX -Server 8.8.8.8         # keniswcs-com.mail.protection.outlook.com

# Main pages should return 200
'/', '/solutions/', '/solutions/analytics/', '/platform/', '/why-kenis/', '/contact/' | ForEach-Object {
  "{0,-24} {1}" -f $_, (Invoke-WebRequest "https://www.keniswcs.com$_" -UseBasicParsing).StatusCode
}
```

## 6. How the setup was done (October 2, 2026)

| Step | What happened |
| --- | --- |
| 1. Repository | Website moved to its own private GitHub repo, `mathukureddy/kenis-website`, with `main` for production and `develop` for work. Changes reach `main` only through pull requests ([#1](https://github.com/mathukureddy/kenis-website/pull/1) to [#4](https://github.com/mathukureddy/kenis-website/pull/4)). |
| 2. Production readiness | Site address set to https://www.keniswcs.com in metadata, sitemap, and robots.txt. Added `public/.htaccess` (used only if hosted on GoDaddy cPanel) and `netlify.toml` (Netlify build settings and security headers). |
| 3. GoDaddy account check | My Products showed only **Domain** and **Email**, with no hosting plan. Public checks showed keniswcs.com was a GoDaddy **parked page** (A records `3.33.130.190` and `15.197.148.33`) with no HTTPS. |
| 4. Hosting decision | Chose **Netlify** over buying GoDaddy Web Hosting: free for commercial use, automatic publishing from GitHub, deploy previews, one-click rollback, automatic HTTPS. Domain and email stay at GoDaddy. |
| 5. Netlify project | Signed up with GitHub, imported `kenis-website`, deployed `main`. Site ran at https://keniswcs.netlify.app. |
| 6. Custom domain | Added `www.keniswcs.com` and `keniswcs.com` in Netlify Domain management. |
| 7. DNS change in GoDaddy | Deleted the two parked A records, added A `@` to `75.2.60.5`, changed CNAME `www` to `keniswcs.netlify.app`. Email records untouched. DNS resolved worldwide within minutes. |
| 8. HTTPS | Netlify issued a Let's Encrypt certificate for both addresses (valid until December 31, 2026, auto-renewing). |
| 9. Redirect loop fixed | Netlify's primary domain was initially `keniswcs.com` (www redirected to it) while `netlify.toml` redirected `keniswcs.com` to www, causing "too many redirects". Fixed in [PR #4](https://github.com/mathukureddy/kenis-website/pull/4) by removing the redirect from `netlify.toml`, then setting **www.keniswcs.com as primary domain** in Netlify. |
| 10. Final verification | `keniswcs.com` and `http://` redirect to https://www.keniswcs.com; all pages return 200; custom 404 works; security headers present; email records intact. |

## 7. Troubleshooting

| Symptom | Likely cause and fix |
| --- | --- |
| "Too many redirects" | Primary domain and a redirect rule disagree. In Netlify, set `www.keniswcs.com` as primary domain. Do not add domain redirects to `netlify.toml`. |
| Site shows GoDaddy "parked" page | GoDaddy A record changed back or a duplicate A record exists. Restore the records in section 3. |
| Certificate warning | DNS not pointing to Netlify. Fix DNS, then Netlify > Domain management > HTTPS > **Verify DNS configuration** and **Provision certificate**. |
| Change not visible after merge | Check Netlify **Deploys** for a failed build; open the log. Hard-refresh the browser (Ctrl+F5). |
| Netlify build fails | Reproduce locally with `npm ci` and `npm run build`, fix on `develop`, and merge again. The live site keeps the last good version until a build succeeds. |
| Email stopped working | An email DNS record was removed or edited. Restore the records in section 3, or use GoDaddy's email setup tool for Microsoft 365. |
| `npm ci` fails with `EPERM` on Windows | The dev server is running and locking files. Stop it and rerun. |
| Contact form fails or emails stop | Netlify > **Forms**: form detection must be on and a form named `contact` must exist; check the email notification for info@keniswcs.com. See [DEPLOY-NETLIFY.md](./DEPLOY-NETLIFY.md), Part 6. |

## 8. Search engines (Google Search Console)

What the site provides for search engines:

- `public/sitemap.xml` lists every page (update `<lastmod>` when a page changes; add new pages here).
- `public/robots.txt` allows all crawlers and points to the sitemap.
- Each page has a title, description, keywords, canonical URL, and social preview tags. Edit them in `src/content/seo.ts` (titles and keywords) and the page's content file (description).
- The layout adds Organization and WebSite structured data (JSON-LD) with name, logo, email, and phone.

Google does not use the keywords tag for ranking; titles, descriptions, and page text matter most. The keywords help Bing and keep the target terms documented.

**Google Search Console setup (once):**

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with the Google account that should own the site.
2. **Add property > Domain**, enter `keniswcs.com` (covers www, the apex, http, and https).
3. Verify ownership with the DNS TXT record Google shows (`google-site-verification=...`):
   - Easiest: choose **GoDaddy** in Google's provider list and click **Start verification**; sign in to GoDaddy and approve, and the record is added for you.
   - Manual: GoDaddy > keniswcs.com > **DNS** > **Add New Record** > Type **TXT**, Name `@`, Value = the full `google-site-verification=...` string, TTL 1 hour. Then click **Verify** in Google (can take a few minutes to an hour).
   - This adds a new TXT record. Do not edit or delete the existing Microsoft 365 TXT records.
4. **Sitemaps** > enter `sitemap.xml` > **Submit** (full address `https://www.keniswcs.com/sitemap.xml`).
5. Optional, faster first crawl: **URL inspection** > `https://www.keniswcs.com/` > **Request indexing**. Repeat for key pages.
6. Bing: at [bing.com/webmasters](https://www.bing.com/webmasters), **Import from Google Search Console** to copy the site and sitemap.

New sites usually appear in Google within a few days to a few weeks. Check **Pages** (indexing) and **Performance** (search queries) in Search Console.

## 9. Access and ownership

| System | Used for | Access |
| --- | --- | --- |
| GitHub `mathukureddy` | Code, pull requests | Owner account; repo is private |
| Netlify | Builds and hosting | Signed in with the GitHub account; Netlify's GitHub app should have access only to `kenis-website` |
| GoDaddy | Domain renewal, DNS, Microsoft 365 email | GoDaddy account owner |

- Keep **domain auto-renew** on in GoDaddy; if the domain expires, the site and email both stop.
- Never share passwords in chat, documents, or the repository. Add team members through each service's own team or collaborator settings.

## 10. Related documents

- [DEPLOY-NETLIFY.md](./DEPLOY-NETLIFY.md): step-by-step Netlify and GoDaddy DNS setup.
- [DEPLOY-GODADDY.md](./DEPLOY-GODADDY.md): alternative hosting on GoDaddy cPanel Web Hosting (manual zip upload), if ever needed.
- [README.md](./README.md): project structure and where to edit content.
