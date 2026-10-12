#!/usr/bin/env bash
# Runs everything the README's "To Run Site Locally" steps do by hand:
# install WordPress core, restore the production content backup, fix
# permalinks, copy in the site images, and install the plugins the backup
# expects.
set -euo pipefail

WP=(wp --allow-root --path=/var/www/html)

# The mariadb client `wp db *` shells out to defaults to requiring TLS,
# which our local db service doesn't offer, so every `wp db` subcommand
# below gets --skip-ssl — without it they fail with "SSL is required, but
# the server does not support it". (`wp db` runs its client with
# --no-defaults, so a ~/.my.cnf override doesn't get picked up here.)

echo "Waiting for wp-config.php..."
until [ -f /var/www/html/wp-config.php ]; do sleep 2; done

echo "Waiting for database..."
until "${WP[@]}" db check --skip-ssl >/dev/null 2>&1; do sleep 2; done

if "${WP[@]}" core is-installed >/dev/null 2>&1; then
  echo "WordPress core already installed."
else
  echo "Installing WordPress core..."
  "${WP[@]}" core install \
    --url="$WP_HOME" \
    --title="Steakations" \
    --admin_user="$WP_ADMIN_USER" \
    --admin_password="$WP_ADMIN_PASSWORD" \
    --admin_email="$WP_ADMIN_EMAIL" \
    --skip-email
fi

BACKUP_TABLES="wp_options wp_postmeta wp_posts wp_terms wp_term_relationships wp_term_taxonomy wp_termmeta"

# Extracted every run (cheap) since the image-copying step below needs it
# for guid lookups even when the DB import itself is skipped as already done.
unzip -p /backup.zip "steakations (2).sql" > /tmp/backup.sql

if IMPORTED=$("${WP[@]}" option get steakations_backup_imported 2>/dev/null) && [ "$IMPORTED" = "1" ]; then
  echo "Production content backup already imported."
else
  echo "Importing production content backup..."
  "${WP[@]}" db query "DROP TABLE IF EXISTS $(echo "$BACKUP_TABLES" | tr ' ' ',');" --skip-ssl
  "${WP[@]}" db import /tmp/backup.sql --skip-ssl
  "${WP[@]}" option update steakations_backup_imported 1
fi

echo "Writing permalink rewrite rules..."
# `wp rewrite flush` can't reliably write .htaccess from a CLI context (it
# can't tell it's running under Apache), so write the standard WordPress
# block directly — this is what makes /about/, /rankings/, etc. resolve
# instead of 404ing.
cat > /var/www/html/.htaccess << 'EOF'
# BEGIN WordPress
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
# END WordPress
EOF

if [ -d /images ] && [ -n "$(ls -A /images 2>/dev/null)" ]; then
  echo "Copying site images into wp-content/uploads..."
  for f in /images/*; do
    fname=$(basename "$f")
    rel_dir=$(grep -m 1 -oE "wp-content/uploads/[0-9]+/[0-9]+/${fname//./\\.}" /tmp/backup.sql 2>/dev/null | sed 's#/[^/]*$##')
    if [ -z "$rel_dir" ]; then
      echo "  skipping $fname: no matching guid found in backup"
      continue
    fi
    dest="/var/www/html/$rel_dir"
    mkdir -p "$dest"
    cp "$f" "$dest/"
  done
  chown -R www-data:www-data /var/www/html/wp-content/uploads
fi

echo "Installing plugins the backup expects to be active..."
SLUGS=$("${WP[@]}" option get active_plugins --format=json | tr -d '[]"\\' | tr ',' '\n' | sed 's#/.*##')
for slug in $SLUGS; do
  if "${WP[@]}" plugin is-installed "$slug" 2>/dev/null; then
    echo "  $slug already installed"
  else
    echo "  installing $slug..."
    "${WP[@]}" plugin install "$slug" --activate
  fi
done

echo "Bootstrap complete."
