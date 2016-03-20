var gulp = require('gulp');
var rollup = require('gulp-rollup');
var path = require('path');

var ngRollup = {
  resolveId(id, from) {
    if (id.startsWith('angular2/')) {
      return `${path.resolve(__dirname, '..')}/node_modules/angular2/es6/prod/${id.split('angular2/').pop()}.js`;
    }
    if (id.startsWith('rxjs/')) {
      return `${path.resolve(__dirname, '..')}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
    }
  }
}



gulp.task('bundle:ui', function() {
  gulp.src('build/ui.js', { read: false })
    .pipe(rollup({
      // any option supported by Rollup can be set here, including sourceMap
      plugins: [ngRollup]
    }))
    // .pipe(sourcemaps.write(".")) // this only works if the sourceMap option is true
    .pipe(gulp.dest('tmp'));
});

gulp.task('bundle:worker', function() {
  gulp.src('build/worker-app.js', { read: false })
    .pipe(rollup({
      // any option supported by Rollup can be set here, including sourceMap
      plugins: [ngRollup]
    }))
    // .pipe(sourcemaps.write(".")) // this only works if the sourceMap option is true
    .pipe(gulp.dest('tmp'));
});
