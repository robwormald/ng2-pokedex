var gulp = require('gulp');

gulp.task('deps:other', function(){
  return gulp.src(['src/favicon.ico','src/register-service-worker.js'])
    .pipe(gulp.dest('dist'));
});

gulp.task('deps:data', function(){
  return gulp.src(['src/data/**'])
    .pipe(gulp.dest('dist/data'));
});

