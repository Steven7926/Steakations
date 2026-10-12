"""Sync a built static site to the S3 bucket behind the CloudFront distribution.
    python3 deploy.py svelte
    python3 deploy.py wordpress
    python3 deploy.py svelte --dry-run
"""

import argparse
import os
import subprocess
import sys

from dotenv import load_dotenv

load_dotenv()

ROOT = os.path.dirname(os.path.abspath(__file__))

SITES = {
    "svelte": {
        "build_dir": os.path.join(ROOT, "svelte-site", "build"),
        "build_cmd": "cd svelte-site && npm run build",
    },
    "wordpress": {
        "build_dir": os.path.join(ROOT, "wordpress-site", "build"),
        "build_cmd": "./wordpress-site/build.sh (with the containers running)",
    },
}

parser = argparse.ArgumentParser(
    description=__doc__,
    formatter_class=argparse.RawDescriptionHelpFormatter,
)
parser.add_argument("site", choices=sorted(SITES), help="which built site to upload")
parser.add_argument(
    "--dry-run",
    action="store_true",
    help="list what would be uploaded and deleted, without touching the bucket",
)
args = parser.parse_args()

site = SITES[args.site]
build_dir = site["build_dir"]

bucket = os.getenv("BUCKET_NAME")
if not bucket:
    sys.exit("BUCKET_NAME is not set in .env")

if not os.path.isdir(build_dir):
    sys.exit(f"{build_dir} does not exist — run `{site['build_cmd']}` first")

# --delete makes the bucket match this directory exactly, so an empty or
# half-written build would take the live site down with it. The site is served
# from index.html at the root, so its absence means the build did not finish.
if not os.path.isfile(os.path.join(build_dir, "index.html")):
    sys.exit(f"{build_dir} has no index.html — run `{site['build_cmd']}` first")

cmd = ["aws", "s3", "sync", build_dir, f"s3://{bucket}", "--delete"]
if args.dry_run:
    cmd.append("--dryrun")

verb = "Previewing" if args.dry_run else "Deploying"
print(f"{verb} {args.site} site: {build_dir} -> s3://{bucket}", flush=True)

subprocess.run(cmd, check=True)
