var gulp = require('gulp');
gulp.task('generate-service-worker',['make'], function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'dist';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [
      rootDir + './index.html',
      rootDir + '/**/*.{html,css,png,jpg,gif,ico}',
      rootDir + './register-service-worker.js' ,
      rootDir + '/bundle/*.js', rootDir + '/lib/*.js'],
    stripPrefix: rootDir
  }, callback);
});
