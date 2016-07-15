'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean_css = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

var paths = {
  bower_bootstrap: './bower_components/bootstrap-sass/assets/stylesheets',
};

gulp.task('sass', function () {
  return gulp.src('./stylesheets/**/*.scss')
    .pipe(sass({
      includePaths: [paths.bower_bootstrap]
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
      }
    ))
    .pipe(clean_css({compatibility: 'ie8'}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./stylesheets/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
