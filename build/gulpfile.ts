const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const { resolve } = require('path');

const { TaskFunction, TaskFunctionCallback } = require('gulp');

const paths = {
  html: resolve(__dirname, '../src/html'),
  images: resolve(__dirname, '../src/images'),
  scss: resolve(__dirname, '../src/scss'),
  public: resolve(__dirname, '../public'),
}

const buildImages: typeof TaskFunction = () => (
  gulp.src(`${paths.images}/**/*`)
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng(),
    ], { silent: true }))
    .pipe(gulp.dest(`${paths.public}/images`))
);

const buildHtml: typeof TaskFunction = () => (
  gulp.src(`${paths.html}/**/*.html`)
    .pipe(gulp.dest(paths.public))
);

const buildScss: typeof TaskFunction = () => (
  gulp.src(`${paths.scss}/**/*.scss`)
    .pipe(sass())
    .pipe(gulp.dest(`${paths.public}/css`))
);

exports.build = gulp.series(buildHtml, buildScss, buildImages);

exports.watch = () => {
  gulp.watch(paths.images, buildImages);
  gulp.watch(paths.html, buildHtml);
  gulp.watch(paths.scss, buildScss);
};
