/**
 * Created by squad on 12/08/16.
 */

var gulp = require('gulp')
var concatCss = require('gulp-concat-css')
var concat = require('gulp-concat')
var minify = require('gulp-minify')

gulp.task('default', function () {
  //MIX CSS
  gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/vue-msgbox/lib/vue-msgbox.css',
    'node_modules/keen-ui/dist/min/keen-ui.min.css',
    'assets/css/bootstrap-navbar.min.css',
    'assets/fonts/material-icons.css'
  ])
    .pipe(concatCss('build.css'))
    .pipe(gulp.dest('dist'));

  //MIX JS
  gulp.src([
    'node_modules/jspdf/dist/jspdf.min.js',
    'node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.src.js'
  ])
    .pipe(concat('libs.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist'))

  //COPY FONTS
  gulp.src([
    'node_modules/bootstrap/fonts/*',
    'assets/fonts/*'
  ])
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('fonts'))
})