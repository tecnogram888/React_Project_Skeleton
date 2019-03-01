Design doc

======

Set up Dev Environment
1. nvm to use node 10
2. run "npm run watch" to start a compiler and then run "npm run start" to run a dev server that listens to the compiler and auto refreshes the bundle.js as it's compiled. However, there is no hot module reloading: you have to manually refresh the browser to get the new brundle.js downloaded.  

webpack is a module bundler. See webpack.config.js for configuration. 
See "entry" for the file the code centers around
See "module" and "rules" for the file processing we do
For CSS
    Style Loader inserts the css into the page so it's active https://stackoverflow.com/a/34237524
    CSS Loader resolves css imports and requires https://github.com/webpack-contrib/css-loader and https://webpack.js.org/loaders/css-loader/
    postcss does autoprefixing for cross-browser css https://github.com/postcss/autoprefixer 
    add css on the fly to js like magic https://github.com/4Catalyzer/astroturf

===  

Product Description

User Goal

User Concerns/Complications

Features List

API

Actions list

Datastructures?

UX

