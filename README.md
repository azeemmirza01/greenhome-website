# GREENHOMESNW Website

Next.js static site for UK solar and heat pump lead generation.

## Stack

- Next.js 15 (App Router, static export)
- React 19
- Tailwind CSS 3
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://greenhomesnw.co.uk
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

## Build

```bash
npm run build
```

Upload everything inside the generated `out/` folder to Hostinger `public_html`. See [DEPLOY.md](DEPLOY.md).
