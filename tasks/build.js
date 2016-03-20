var gulp = require('gulp');
var concat = require('gulp-concat');
var Builder = require('systemjs-builder');

gulp.task('build:ui', ['compile'], function() {
  var builder = new Builder();
  return builder.loadConfig('./system.config.js')
    .then(function() {
      return builder.buildStatic('app/ui', 'build/bundles/ui.js', {minify: true, mangle: false, rollup: true})
    })
});
gulp.task('build:worker', ['compile'], function() {
  var builder = new Builder();
  return builder.loadConfig('./system.config.js')
    .then(function() {
      return builder.buildStatic('app/worker-app', 'build/bundles/worker-app.js', {minify: true, mangle: false, rollup: true})
    })
});

gulp.task('bundle:ui', ['build:ui'], function(){
  return gulp.src([
    'node_modules/angular2/bundles/angular2-polyfills.min.js',
    'build/bundles/ui.js',
    'src/register-service-worker.js'])
    .pipe(concat('ui-app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle:worker', ['build:worker'], function(){
  return gulp.src([
    'node_modules/angular2/bundles/angular2-polyfills.min.js',
    'build/bundles/worker-app.js'])
    .pipe(concat('worker-app.js'))
    .pipe(gulp.dest('dist'));
});

// gulp.task('build', function() {
//   var builder = new Builder();
//   return builder.loadConfig('./system.config.js')
//     .then(function() {
//       return Promise.all([builder.trace('app/ui'), builder.trace('app/worker-app')])
//     })
//     .then(function(trees) {
//       var commonTree = builder.intersectTrees(trees[0], trees[1]);
//       return Promise.all([
//         builder.bundle(commonTree, 'dist/common.js', { minify: true, mangle: false }),
//         builder.bundle(builder.subtractTrees(trees[0], commonTree), 'dist/ui-app.js', { minify: true, mangle: false }),
//         builder.bundle(builder.subtractTrees(trees[1], commonTree), 'dist/worker-app.js', { minify: true, mangle: false })
//       ]);
//     })
// });
