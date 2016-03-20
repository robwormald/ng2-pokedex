var gulp = require('gulp');
var serve = require('gulp-serve');
 
gulp.task('serve', serve('public'));
gulp.task('serve:build', serve(['public', 'dist']));
gulp.task('serve:prod', serve({
  root: ['public', 'dist'],
  port: 8080,
  https: true
}));