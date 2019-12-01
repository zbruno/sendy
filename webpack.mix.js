const mix = require('laravel-mix');
require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

const webpackConfig = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: ['babel-loader'],
    }],
  },
};

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

mix.react('src/index.js', 'public/main.js')
  .extract(['react', 'react-dom'])
  .postCss('src/index.css', 'public/main.css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nesting'),
  ])
  .tailwind('./tailwind.config.js')
  .webpackConfig(webpackConfig)
  .browserSync('expenses.test');

if (mix.inProduction()) {
  mix.purgeCss({
    enabled: true,
    globs: [
      path.join(__dirname, 'public/**/*.js'),
    ],
    extractors: [
      {
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:/]+/g);
          }
        },
        extensions: ['js'],
      },
    ],
  });
}
