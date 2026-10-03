# Host www.keniswcs.com on Netlify (domain stays at GoDaddy)

Netlify builds the site from GitHub and serves it with free HTTPS. GoDaddy keeps the domain registration; you only change two DNS records there. Every merge to `main` goes live automatically.

Build settings, redirects (`keniswcs.com` to `https://www.keniswcs.com`), and security headers live in `netlify.toml`, so Netlify needs no manual build configuration.

## Part 1 - Create the Netlify site (once)

1. Go to [app.netlify.com](https://app.netlify.com) and **Sign up with GitHub** (use the `mathukureddy` account).
2. Click **Add new project > Import an existing project > GitHub**.
3. When GitHub asks for access, choose **Only select repositories > kenis-website** and approve. (The repo is private; Netlify can only see repos you grant.)
4. Select **kenis-website**. Check the settings Netlify reads from `netlify.toml`:
   - Branch to deploy: **main**
   - Build command: `npm run build`
   - Publish directory: `out`
5. Optional: set the project name to `keniswcs`, so the temporary address is `https://keniswcs.netlify.app`.
6. Click **Deploy**. The first build takes 1 to 3 minutes. Open the `.netlify.app` address and check that the site works.

## Part 2 - Add the domain in Netlify (once)

1. In the project: **Domain management > Add a domain**.
2. Enter `www.keniswcs.com` and confirm. When Netlify asks, also add `keniswcs.com`.
3. Make sure **www.keniswcs.com** is the **primary domain**; Netlify then redirects `keniswcs.com` to it.
4. Netlify shows "Awaiting External DNS" and the records to create. Keep this page open.

## Part 3 - Point the domain from GoDaddy (once)

1. GoDaddy: **My Products > Domains > keniswcs.com > DNS** (Manage DNS).
2. Set exactly these two records (edit existing ones rather than adding duplicates):

   | Type | Name | Value | TTL |
   | --- | --- | --- | --- |
   | A | `@` | `75.2.60.5` | 1 hour |
   | CNAME | `www` | `keniswcs.netlify.app` (your Netlify address) | 1 hour |

3. Delete any **other** A record for `@` (for example GoDaddy's "Parked" record or an old hosting IP) and any other `www` record.
4. Turn off **Domain Forwarding** for keniswcs.com if it is on.
5. **Do not change MX, TXT (SPF/DKIM), or other email records.** Email to info@keniswcs.com depends on them.
6. If you have a GoDaddy Web Hosting plan you no longer need, cancel it only after the Netlify site is live.

Check propagation from PowerShell (usually under an hour, up to 48 hours):

```powershell
nslookup keniswcs.com        # should return 75.2.60.5
nslookup www.keniswcs.com    # should show keniswcs.netlify.app
```

## Part 4 - HTTPS (once)

1. Netlify: **Domain management > HTTPS > Verify DNS configuration**.
2. Click **Provision certificate** if it does not start automatically. Netlify issues a free Let's Encrypt certificate for both addresses, usually within minutes of DNS resolving.
3. HTTP-to-HTTPS redirect is automatic.

## Part 5 - Verify (after setup and after big releases)

- [ ] `https://www.keniswcs.com` loads with the padlock
- [ ] `http://keniswcs.com` and `https://keniswcs.com` redirect to `https://www.keniswcs.com`
- [ ] Every menu page opens directly, for example `https://www.keniswcs.com/analytics/`
- [ ] A made-up address shows the KENIS 404 page
- [ ] Email to info@keniswcs.com still arrives

## Releasing changes

1. Work on `develop` and push.
2. Open a pull request **develop > main** on GitHub and merge it.
3. Netlify builds and publishes `main` automatically (watch **Deploys** in Netlify).

Netlify also builds a **Deploy Preview** for each pull request, with its own temporary link to review changes before merging.

**Rollback:** Netlify > **Deploys** > pick an earlier deploy > **Publish deploy**.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Build fails | Open the failed deploy log in Netlify. Run `npm ci` and `npm run build` locally to reproduce. |
| "Awaiting External DNS" for hours | Check the GoDaddy records against Part 3 and remove duplicate A or `www` records. |
| Certificate not issued | DNS must resolve to Netlify first. Then **Verify DNS configuration** and **Provision certificate** again. |
| GoDaddy "parked" page | The old A record is still present, or DNS has not propagated yet. |
| Email stopped working | An MX or TXT record was removed. Restore it from your email provider's settings (GoDaddy Email or Microsoft 365). |
