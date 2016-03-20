"use strict";
var core_1 = require("angular2/core");
var worker_app_1 = require("angular2/platform/worker_app");
var pokemon_1 = require('./data/pokemon');
var app_1 = require("./app-shell/app");
var store_1 = require('@ngrx/store');
var reducers = require('./reducers/index');
var uiEvents_1 = require('./app-shell/services/uiEvents');
core_1.enableProdMode();
core_1.platform([worker_app_1.WORKER_APP_PLATFORM])
    .application([worker_app_1.WORKER_APP_APPLICATION, [store_1.provideStore(reducers, { pokemon: pokemon_1.data }), uiEvents_1.UIEvents]])
    .bootstrap(app_1.App);
