let mix = require('laravel-mix');

// const publicPath = 'public/js/components'

// const path = require('path');
// mix.webpackConfig({
//  module: {
//    rules: [
//       {
//         test: /\.less$/,
//         loader: "style-loader!css-loader!less-loader",
//         exclude: [
//             path.resolve(__dirname, "node-modules"),
//             path.resolve(__dirname, "resources/assets/less"),
//         ],
//       },
//   ]} 
// })

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');