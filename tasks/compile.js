var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var tsProjectServer = ts.createProject('tsconfig-server.json');
var inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('compile', ['compile:server'],function() {
	var tsResult =
    gulp.src(['typings/browser.d.ts','src/**/*.ts','!src/server.ts'])
        .pipe(inlineNg2Template({
            useRelativePaths: true
        }))
		.pipe(ts(tsProject));

	return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('compile:server', function() {
	var tsResult =
    gulp.src(['typings/main.d.ts','src/server.ts'])
        .pipe(inlineNg2Template({
            useRelativePaths: true
        }))
		.pipe(ts(tsProjectServer));

	return tsResult.js.pipe(gulp.dest('build'));
});
