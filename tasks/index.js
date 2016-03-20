var gulp = require('gulp');
//require('./prerender');
require('./deps');
require('./serve');
require('./build');
require('./compile');
require('./bundle');
require('./sw');
require('./inline');
require('./clean');

gulp.task('make', ['build:ui','build:worker','deps:copy','inline:css']);

gulp.task('default',['generate-service-worker']);
