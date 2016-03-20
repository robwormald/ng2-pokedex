var gulp = require('gulp');
require('angular2-universal-preview/polyfills');
var universal = require('angular2-universal-preview');

gulp.task('prerender', function(){
    var AppShellModule = require('../dist/src/app-shell/app-shell');
    return universal.renderToString(AppShellModule.AppShell, []).then(function(appShell){
        console.log(appShell)
    });
})