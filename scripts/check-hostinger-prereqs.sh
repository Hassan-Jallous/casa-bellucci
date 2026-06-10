#!/usr/bin/env bash
set -euo pipefail

REPO="${1:-Hassan-Jallous/casa-bellucci}"

failures=0

require_file() {
  local file="$1"
  if [[ -f "$file" ]]; then
    printf 'PASS file %-32s present\n' "$file"
  else
    printf 'FAIL file %-32s missing\n' "$file"
    failures=$((failures + 1))
  fi
}

require_secret() {
  local secret="$1"
  if gh secret list --repo "$REPO" | awk '{print $1}' | grep -qx "$secret"; then
    printf 'PASS secret %-30s present in %s\n' "$secret" "$REPO"
  else
    printf 'FAIL secret %-30s missing in %s\n' "$secret" "$REPO"
    failures=$((failures + 1))
  fi
}

require_remote_workflow() {
  local workflow="$1"
  if gh workflow view "$workflow" --repo "$REPO" >/dev/null 2>&1; then
    printf 'PASS workflow %-28s present in %s\n' "$workflow" "$REPO"
  else
    printf 'FAIL workflow %-28s missing on GitHub default branch for %s\n' "$workflow" "$REPO"
    failures=$((failures + 1))
  fi
}

if gh auth status >/dev/null 2>&1; then
  printf 'PASS gh auth                          authenticated\n'
else
  printf 'FAIL gh auth                          not authenticated\n'
  failures=$((failures + 1))
fi

require_file ".github/workflows/deploy-hostinger.yml"
require_file "scripts/live-smoke.sh"
require_file "php-backend/DEPLOY.md"
require_remote_workflow "deploy-hostinger.yml"

require_secret "FTP_SERVER"
require_secret "FTP_USERNAME"
require_secret "FTP_PASSWORD"
require_secret "FTP_SERVER_DIR"

if (( failures > 0 )); then
  printf '\n%d Hostinger deploy prerequisite(s) missing.\n' "$failures"
  exit 1
fi

cat <<'EOF'

Hostinger deploy prerequisites are present.
Next step:
  gh workflow run deploy-hostinger.yml --repo Hassan-Jallous/casa-bellucci
EOF
