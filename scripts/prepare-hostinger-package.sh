#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STAMP="$(date +%Y%m%d-%H%M%S)"
DEPLOY_ROOT="${ROOT}/_deploy"
PACKAGE_DIR="${DEPLOY_ROOT}/hostinger-${STAMP}"

cd "$ROOT"

npm run build

mkdir -p "$PACKAGE_DIR/static-public_html"
mkdir -p "$PACKAGE_DIR/backend-manual/public_html"

rsync -a --delete out/ "$PACKAGE_DIR/static-public_html/"

rsync -a php-backend/api/ "$PACKAGE_DIR/backend-manual/public_html/api/"
cp php-backend/.htaccess "$PACKAGE_DIR/backend-manual/public_html/.htaccess"
cp php-backend/config.example.php "$PACKAGE_DIR/backend-manual/public_html/config.example.php"

if [[ -d php-backend/pdf ]]; then
  rsync -a php-backend/pdf/ "$PACKAGE_DIR/backend-manual/public_html/pdf/"
fi

cat > "$PACKAGE_DIR/README.txt" <<EOF
Casa Bellucci Hostinger package ${STAMP}

1. Upload everything inside static-public_html/ to Hostinger public_html/.
   This contains the current static Next.js export, including robots.txt.

2. For the one-time backend install, copy backend-manual/public_html/api/
   to public_html/api/ and backend-manual/public_html/.htaccess to
   public_html/.htaccess.

3. Copy backend-manual/public_html/config.example.php to public_html/config.php
   only if config.php does not already exist on the server. Then replace
   admin_password_hash with a real password hash as documented in
   php-backend/DEPLOY.md.

4. Copy backend-manual/public_html/pdf/ to public_html/pdf/ only for first
   install or when intentionally replacing the start PDFs.

5. After upload, run:
   ./scripts/live-smoke.sh https://casabellucci.de

Do not upload this README.txt into public_html.
EOF

(
  cd "$PACKAGE_DIR"
  zip -qr "../hostinger-${STAMP}.zip" .
)

printf 'Prepared Hostinger package:\n%s\n%s\n' "$PACKAGE_DIR" "${DEPLOY_ROOT}/hostinger-${STAMP}.zip"
