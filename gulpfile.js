const { src, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const babel = require("gulp-babel");

function css() {
  return src('src/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(babel())
    .pipe(dest('build/js', { sourcemaps: true }))
}

function watchAll() {
  return watch('src/**', parallel(css, js));
}

exports.js = js;
exports.css = css;
exports.watch = watchAll;
exports.default = parallel(css, js);