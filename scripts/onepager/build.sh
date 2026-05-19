#!/usr/bin/env bash
# Regenerates the /picking one-pager PDF (public/teambear-picking-onepager.pdf).
# Renders the branded HTML template with headless Chrome.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$DIR/../.." && pwd)"
OUT="$ROOT/public/teambear-picking-onepager.pdf"
TMP_HTML="$DIR/.onepager.build.html"

LOGO_B64="$(cat "$DIR/logo.b64")"
python3 - "$DIR/onepager.template.html" "$TMP_HTML" "$LOGO_B64" <<'PY'
import sys
src, dst, logo = sys.argv[1], sys.argv[2], sys.argv[3]
html = open(src, encoding='utf-8').read().replace('__LOGO__', logo)
open(dst, 'w', encoding='utf-8').write(html)
PY

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --no-pdf-header-footer \
  --virtual-time-budget=4000 \
  --print-to-pdf="$OUT" \
  "file://$TMP_HTML" 2>/dev/null

rm -f "$TMP_HTML"
echo "Wrote $OUT"
