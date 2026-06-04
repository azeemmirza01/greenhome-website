# Fix Vercel `DEPLOYMENT_NOT_FOUND`

`greenhomes-six.vercel.app` shows **404 DEPLOYMENT_NOT_FOUND** because the Vercel project exists but **no production deployment** was ever created. Your Next.js app builds successfully locally.

## Fastest fix (Vercel Dashboard — ~2 minutes)

1. Open **[Vercel Dashboard](https://vercel.com/dashboard)** → project **greenhomes-six**.
2. Go to **Settings** → **Git**.
3. If no repo is connected: **Connect Git Repository** → `azeemmirza01/greenhome-website` → **main**.
4. Confirm:
   - **Root Directory:** `.` (empty / project root)
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (default)
5. Go to **Deployments** → **Redeploy** (or wait for auto-deploy after connecting Git).
6. When status is **Ready**, open the **Production** URL from that deployment row (not an old bookmark).

### Or import fresh (recommended if Git was never connected)

1. **[Import greenhome-website](https://vercel.com/new/clone?repository-url=https://github.com/azeemmirza01/greenhome-website)**
2. Click **Deploy**.
3. Use the new `*.vercel.app` URL from the successful deployment.

## Terminal fix (links folder → deploys)

```bash
cd /Users/azeemmirza/Desktop/zoDev/greenhome-website
chmod +x scripts/deploy-vercel.sh
./scripts/deploy-vercel.sh
```

Or manually:

```bash
vercel login
vercel link    # select greenhomes-six
vercel --prod
```

## After deploy

Optional env var (when you add a custom domain):

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.co.uk` |

Redeploy after adding.
