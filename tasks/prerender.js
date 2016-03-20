var gulp = require('gulp');
require('angular2-universal-preview/polyfills');
var universal = require('angular2-universal-preview');
var ngrx = require('@ngrx/store');
var ng2core = require('angular2/core');
var ng2router = require('angular2/router');
var ng2gulp = require('angular2-gulp-prerender');
var inline = require('gulp-inline')
var minifyCss = require('gulp-minify-css');

gulp.task('prerender', ['bundle:ui','bundle:worker'], function(){
  var app = require('../build/app-shell/app');
  var uiEvents = require('../build/app-shell/services/uiEvents');
  var reducers = require('../build/reducers/index');
  var pokeData = require('../build/data/pokemon');



  return gulp.src('./src/index.html')
    .pipe(ng2gulp.prerender({
      directives: [ app.App ],
      providers: [
        ng2core.provide(ng2router.APP_BASE_HREF, {useValue: '/'}),
        ng2core.provide(universal.REQUEST_URL, {useValue: '/'}),
        ng2router.ROUTER_PROVIDERS,
        universal.NODE_LOCATION_PROVIDERS,

        ngrx.provideStore(reducers, {pokemon: pokeData.data}),
        ng2core.provide(uiEvents.UIEvents, {useValue: {}}),
      ],
      preboot: false
    }))
    .pipe(inline({
        base: 'src/',
        css: minifyCss,
        disabledTypes: ['svg', 'img', 'js'], // Only inline css files
    }))
    .pipe(gulp.dest('dist'));
});
