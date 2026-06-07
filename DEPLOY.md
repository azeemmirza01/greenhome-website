# Deploy GreenHomesNW

## Build (creates `out/` folder)

```bash
npm run build
```

After build, upload everything inside the **`out/`** folder to Hostinger `public_html`.

---

## Hostinger (static hosting)

1. Run `npm run build`
2. Open Hostinger **File Manager** → `public_html`
3. Upload **all files and folders inside `out/`** (not the `out` folder itself)
4. Confirm `.htaccess` is in `public_html` (enables clean URLs like `/quote/` and redirects old `.html` links)
5. Test: `https://yourdomain.com/quote/` and `https://yourdomain.com/services/solar-panels-on-lease/`
6. Done — no Node.js or zip needed

Set env vars in `.env.local` **before** building:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

---

## Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add the same env vars in Vercel → Settings → Environment Variables
4. Deploy — Vercel runs `npm run build` automatically
