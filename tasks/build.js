var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task('build:ui', ['compile'], function() {
  var builder = new Builder();
  return builder.loadConfig('./system.config.js')
    .then(function() {
      return builder.buildStatic('app/ui', 'dist/bundle/ui.js', {minify: true, mangle: false, rollup: true})
    })
});
gulp.task('build:worker', ['compile'], function() {
  var builder = new Builder();
  return builder.loadConfig('./system.config.js')
    .then(function() {
      return builder.buildStatic('app/worker-app', 'dist/bundle/worker-app.js', {minify: true, mangle: false, rollup: true})
    })
});

gulp.task('build', function() {
  var builder = new Builder();
  return builder.loadConfig('./system.config.js')
    .then(function() {
      return Promise.all([builder.trace('app/ui'), builder.trace('app/worker-app')])
    })
    .then(function(trees) {
      var commonTree = builder.intersectTrees(trees[0], trees[1]);
      return Promise.all([
        builder.bundle(commonTree, 'dist/common.js', { minify: true, mangle: false }),
        builder.bundle(builder.subtractTrees(trees[0], commonTree), 'dist/ui-app.js', { minify: true, mangle: false }),
        builder.bundle(builder.subtractTrees(trees[1], commonTree), 'dist/worker-app.js', { minify: true, mangle: false })
      ]);
    })
});
