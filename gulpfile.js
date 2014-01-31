var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');

gulp.task('templates', function(){
  gulp.src(['js/templates/*.hbs'])
    .pipe(handlebars({
      outputType: 'browser'
     }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('scripts', function(){
  gulp.src(['js/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build/js/'));
});

gulp.task('default', function(){
  gulp.start('templates', 'scripts');
});

gulp.task('watch', function() {

  gulp.watch('js/**/*.js', ['scripts']);

  gulp.watch('js/templates/*.hbs', ['templates']);

});
