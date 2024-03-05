# Steakations
### This is a small wordpress blog site outlining steakhouse reviews by me and my Fiance. I made this website to learn Wordpress and small, cheap, website hosting
- The entire site is hosted on an private S3 bucket and served through a Cloudfront distrubution as a static website, making the cost pennies a month.
- The static files are generated through the Simply Static Wordpress plugin

## I have plans to do the following in the future:
  - Dockerize the site, I'm attempting to that currently which encomposes the docker compose
      - Currently the dockerization works but simply static fails to generate the files when containerized
  - Build a python script that generates the static files using Simply Static and puts them in a ./build folder
  - Implement a python script that uses AWS keys to connect to the S3 bucket and deploy the static files from the /build folder to the bucket
  - Create a python script that both generates the static files AND deploys them to the S3 bucket
  - Create an automated system for uploading db changes (right now I manually put the wordpress db in through phpmyadmin for the site)

## Blocker: Simply Static does not seem to like being containerized.
  - Some research suggests that I need to convince it to use the IP address of the docker container
  - I tried implementing the following and it still didn't generate the files:
    1. https://simplystatic.com/docs/simply-static-does-not-start/#How-to-fix-2
    2. https://stackoverflow.com/questions/68419875/static-site-generation-checking-if-wordpress-can-make-requests-to-itself-from-1
  - I can even get it to successfully make requests to itself as outlined in 1 above, but it still won't generate the files
   

## To Run Site Locally:
  1. Git Clone Repo
  2. docker-compose up -d from root directory
  3. Access http://localhost:8085/
  4. Follow wordpress installation
  5. Access phpmyadmin at http://localhost:8081/
  6. Sign in with root user
  7. Drop all steakations database tables except for:
     - wp_commentmeta
     - wp-comments
     - wp-links
     - wp_usermeta
     - wp_users  
  8. Import to the steakations backup using the .zip in the root directory.
  9. Ensure the wp-content folder has the images necessary for the site.
