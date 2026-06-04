#!/usr/bin/env bash
# Deploy GREENHOMESNW to Vercel (fixes DEPLOYMENT_NOT_FOUND)
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Checking Vercel login..."
if ! vercel whoami &>/dev/null; then
  echo "   Run: vercel login"
  vercel login
fi

echo "→ Linking this folder to your Vercel project (choose 'greenhomes-six' or create new)..."
vercel link

echo "→ Building and deploying to production..."
vercel --prod

echo ""
echo "✓ Done. Open the Production URL shown above (not an old bookmark)."
