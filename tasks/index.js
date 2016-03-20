var gulp = require('gulp');
//require('./prerender');
require('./deps');
require('./serve');
require('./build');
require('./compile');
require('./sw');
require('./clean');
require('./prerender');


gulp.task('default',['build:sw']);
