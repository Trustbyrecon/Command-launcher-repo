# Command Launcher Repo Skeleton

## Quickstart
- Add GitHub secrets: NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID (and DNS_TOKEN, CLOUDFLARE_ZONE_ID if using DNS automation).
- Run **Actions → Command Launcher → Run workflow** with `op=switchDomain` and `domain=hookahplus.net`.

## Local
```bash
cp .env.example .env
npm ci
DRY_RUN=1 node scripts/launcher.js switchDomain hookahplus.net
```
