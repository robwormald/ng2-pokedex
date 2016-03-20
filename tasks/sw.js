var gulp = require('gulp');
gulp.task('build:sw', ['prerender','deps:data','deps:other'], function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'dist';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,ico}'],
    stripPrefix: rootDir
  }, callback);
});
