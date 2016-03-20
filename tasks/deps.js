var gulp = require('gulp');

gulp.task('deps:lib', ['deps:other', 'deps:data'], function(){
   return gulp.src([
       'node_modules/systemjs/dist/system.js',
       'node_modules/angular2/bundles/angular2-polyfills.min.js',
       'system.config.js',
       'src/worker-loader.js'
   ])
     .pipe(gulp.dest('dist/lib'))
});
gulp.task('deps:other', function(){
  return gulp.src(['src/favicon.ico','src/register-service-worker.js'])
    .pipe(gulp.dest('dist'));
});

gulp.task('deps:data', function(){
  return gulp.src(['src/data/**'])
    .pipe(gulp.dest('dist/data'));
});

