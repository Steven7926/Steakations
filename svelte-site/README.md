# Steakations — SvelteKit

A SvelteKit rebuild of the WordPress site. Same content, same URL shape, no
database, no PHP, no containers — just a static folder you can sync to S3.

## Running it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # writes ./build
npm run preview  # serves ./build
```

## How it is put together

- `src/lib/data/reviews.js` — one object per steakhouse: copy, photos, the order breakdown, and final thoughts.
- `src/lib/data/site.js` — nav, the two personal ranking orders, and the About page.

Rankings reference reviews by `slug`, so a new entry only has to be added to
`reviews.js` and slotted into each person's `order` array.

Routes:

| URL                 | Source                                 |
| ------------------- | -------------------------------------- |
| `/`                 | `src/routes/+page.svelte`              |
| `/rankings/`        | `src/routes/rankings/+page.svelte`     |
| `/about/`           | `src/routes/about/+page.svelte`        |
| `/reviews/<slug>/`  | `src/routes/reviews/[slug]/`           |
| `/404/`             | `src/routes/404/+page.svelte`          |

## Deploying

`npm run build` produces `svelte-site/build`, which is the same shape as the
old top-level `build/` directory. To ship it with the existing tooling, point
the sync at this directory:

```sh
cd svelte-site && npm run build
aws s3 sync ./build "s3://$BUCKET_NAME" --delete
```

The repo's `deploy.py` still syncs the top-level `build/` produced by
`build.sh` from the WordPress container. Nothing here changes that pipeline —
switching it over is a one-line path change when you're ready.
