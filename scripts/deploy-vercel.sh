#!/usr/bin/env bash
# One-time Vercel test deploy (stop `npm run dev` before running)
set -euo pipefail
cd "$(dirname "$0")/.."

VC="npx vercel@latest"

echo "=============================================="
echo " GREENHOMESNW — Vercel test deploy"
echo "=============================================="
echo ""
echo "1) Stop 'npm run dev' first (Ctrl+C in that terminal)"
echo "2) Browser will open for Vercel login if needed"
echo ""

if ! $VC whoami &>/dev/null; then
  echo "→ Logging in to Vercel..."
  $VC login
fi

echo "→ Deploying to production..."
echo "   (Answer prompts: link project = Yes, name = greenhome-website or greenhomes-six)"
echo ""

$VC --prod

echo ""
echo "✓ Copy the Production URL above and open it in your browser."
echo "  Ignore greenhomes-six.vercel.app until this deploy succeeds."
