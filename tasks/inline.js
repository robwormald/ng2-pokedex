var gulp = require('gulp');
var inline = require('gulp-inline')
var minifyCss = require('gulp-minify-css');


gulp.task('inline:css', function(){
   return gulp.src('src/index.html')
    .pipe(inline({
        base: 'src/',
        css: minifyCss,
        disabledTypes: ['svg', 'img', 'js'], // Only inline css files
    }))
    .pipe(gulp.dest('dist/'));
});

