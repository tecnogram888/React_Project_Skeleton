Design doc

======

Set up Dev Environment
1. nvm to use node 10
2. npm install
3. run "npm run watch" to start a compiler and then run "npm run start" to run a dev server that listens to the compiler and auto refreshes the bundle.js as it's compiled. Hot Module Reloading of the page is enabled so your dev changes should auto-refresh the browser's display as well. 

webpack is a module bundler. See webpack.config.js for configuration. 
See "entry" for the file the code centers around
See "module" and "rules" for the file processing we do
For CSS
    import the css file in the jsx file you need to use it, and then set the classname of the html rendered elements equal to the classnames in the css file
    Style Loader inserts the css into the page so it's active https://stackoverflow.com/a/34237524
    CSS Loader resolves css imports and requires https://github.com/webpack-contrib/css-loader and https://webpack.js.org/loaders/css-loader/
    postcss does autoprefixing for cross-browser css https://github.com/postcss/autoprefixer 
    add css on the fly to js like magic https://github.com/4Catalyzer/astroturf

Commands are in package.json 
Configuration is in webpack.config.js
Entry Point is src/index.js
Top Level Routing happens in components/router.js

===  

Product Description

User Goal

User Concerns/Complications

Features List

API

Actions list

Datastructures?

UX

