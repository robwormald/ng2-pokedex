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
require('./prerender');

gulp.task('make', ['build:ui','build:worker','deps:lib','prerender']);

gulp.task('default',['generate-service-worker']);
