#!/usr/bin/env bash
# Crawls the locally-running WordPress site with wget and writes a static
# mirror to ./build, rewriting the local dev URL to the production domain.
#
# Simply Static was tried first but can't be made to work containerized
# (see README) — it runs its own crawler *inside* the wordpress container,
# where WP_HOME/WP_SITEURL (localhost:8085) isn't reachable since the
# container itself only listens on port 80. wget runs from the host, where
# localhost:8085 is reachable, so it sidesteps the problem entirely.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"
set -a
source .env
set +a

LOCAL_URL="${WP_HOME:-http://localhost:8085}"
PROD_URL="${PROD_URL:?Set PROD_URL in .env, e.g. https://stevenlaurensteakations.com}"

rm -rf build
mkdir -p build
cd build

wget \
  --mirror \
  --page-requisites \
  --convert-links \
  --adjust-extension \
  --no-parent \
  --no-host-directories \
  -e robots=off \
  --reject-regex '.*(wp-admin|wp-login|wp-json|xmlrpc\.php|/feed/|\?replytocom).*' \
  "$LOCAL_URL/" \
  || true   # wget exits non-zero if any single fetched URL 404s; the mirror is still usable

cd ..

# WordPress only renders its 404 template on demand for a URL that matches
# nothing, and wget's crawler never intentionally requests a broken link —
# so fetch one explicitly. The live site already serves this as a real
# /404/ page (folder + index.html, like every other page), so match that
# convention rather than a bare 404.html at the root.
mkdir -p build/404
curl -s "$LOCAL_URL/this-page-does-not-exist-$RANDOM/" -o build/404/index.html

# Rewrite any leftover absolute references to the local dev URL (wget's
# --convert-links only rewrites URLs it actually crawled through).
# LC_ALL=C avoids "illegal byte sequence" errors when sed hits binary
# assets (images, fonts) that aren't valid UTF-8 — they never contain the
# URL anyway, so byte-for-byte matching is safe and skips them cleanly.
find build -type f -exec env LC_ALL=C sed -i '' "s|$LOCAL_URL|$PROD_URL|g" {} +

echo "Static site written to ./build"
