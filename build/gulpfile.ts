const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const { resolve } = require('path');

const paths = {
  html: resolve(__dirname, '../src/html'),
  images: resolve(__dirname, '../src/images'),
  scss: resolve(__dirname, '../src/scss'),
  public: resolve(__dirname, '../public'),
}

const buildImages = () => (
  gulp.src(`${paths.images}/**/*`)
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
    ]))
    .pipe(gulp.dest(`${paths.public}/images`))
)

const buildHtml = () => (
  gulp.src(`${paths.html}/**/*.html`)
    .pipe(gulp.dest(paths.public))
);

const buildScss = () => (
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
