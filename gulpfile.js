var gulp = require('gulp');

var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");

var uglify = require('gulp-uglify');

/*************
tomado de http://callmenick.com/post/an-introduction-to-gulp

*****************/
// scripts task
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/js/'));
});

// styles


gulp.task('styles', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/sass/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watch']);