# Vercel test deploy (before Hostinger)

Your app works locally (`npm run dev` → http://localhost:3000).  
`greenhomes-six.vercel.app` fails because **that Vercel project has zero deployments** — not because the code is wrong.

## Do this now (3 commands)

**Stop `npm run dev` first** (Ctrl+C), then in Terminal:

```bash
cd /Users/azeemmirza/Desktop/zoDev/greenhome-website
./scripts/deploy-vercel.sh
```

Or step by step:

```bash
cd /Users/azeemmirza/Desktop/zoDev/greenhome-website
npx vercel@latest login
npx vercel@latest --prod
```

When `vercel --prod` asks:

| Prompt | Answer |
|--------|--------|
| Set up and deploy? | **Y** |
| Which scope? | Your Vercel account |
| Link to existing project? | **Y** → pick **greenhomes-six** *or* **N** to create **greenhome-website** |
| Directory | **./** (press Enter) |

Use the **Production URL printed at the end** — that is your live test site.

---

## Dashboard alternative (no terminal)

1. Open: https://vercel.com/new/clone?repository-url=https://github.com/azeemmirza01/greenhome-website  
2. Click **Deploy** (do not create an empty project).  
3. Open the URL from the **Ready** deployment.

---

## After testing → Hostinger

Next.js needs **Node.js hosting** on Hostinger (VPS or Business with Node), not plain PHP shared hosting. Options:

- **VPS** — run `npm run build && npm start`  
- **Static export** — only if you drop dynamic city routes (not recommended for this site)

We can set up Hostinger when you are ready.
