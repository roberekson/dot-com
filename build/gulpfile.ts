const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const { resolve } = require('path');

const paths = {
  html: resolve(__dirname, '../src/html'),
  scss: resolve(__dirname, '../src/scss'),
  public: resolve(__dirname, '../public'),
}

const buildHtml = () => (
  gulp.src(`${paths.html}/**/*.html`)
    .pipe(gulp.dest(paths.public))
);

const buildScss = () => (
  gulp.src(`${paths.scss}/**/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`${paths.public}/css`))
);

exports.build = gulp.series(buildHtml, buildScss);

exports.watch = () => {
  gulp.watch(paths.html, buildHtml);
  gulp.watch(paths.scss, buildScss);
};
