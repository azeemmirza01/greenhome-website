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

### Critical: upload these folders

Pages are stored as **folders with `index.html` inside**:

```
public_html/
  index.html
  quote/
    index.html          ← /quote/ page
  services/
    solar-panels-on-lease/
      index.html        ← service page
    air-source-heat-pump-grants/
      index.html        ← service page
  .htaccess             ← rename from htaccess.txt if needed
```

If you only upload `quote.html` (old format) or skip the `quote/` folder, `/quote` will show 404.

4. **`.htaccess`**: upload `htaccess.txt` from `out/` and rename to `.htaccess` in `public_html`
5. Test these URLs:
   - `https://greenhomesnw.co.uk/quote/` (or `/quote` — Apache redirects to `/quote/`)
   - `https://greenhomesnw.co.uk/services/solar-panels-on-lease/`
   - `https://greenhomesnw.co.uk/services/air-source-heat-pump-grants/`

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
