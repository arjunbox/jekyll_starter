# Description
This is a mock starter project for a fake jekyll website that demonstrates some common site features and how you can accomplish them with Jekyll a static site generator.


## Getting started
This site uses a live reload Gulp.js task that makes editing locally fast and compiles and builds produciton ready CSS and JS.

**Requirements** You are expected to have Jekyll installed along with Node.js and npm.

- run `bundle install` to install gem dependencies
- run `npm install` to install npm dependencies

## Gulp Tasks
To start local development run `gulp` and the default task will run a browser sync, sass and javascript bundle and watch your .html files for changes and trigger automatic rebuilds.

### Additional Tasks
Run `gulp images` to process original images and optimize them for the web. This will take original images stored at `/assets/_src_img/` and process them to `/img` so they are compressed for the web.

## Netlify CMS
The Netlify CMS will edit the files in the _data folder which the site then build its informaiton from, leaving the developer to use what ever markup they want on the frontend.

