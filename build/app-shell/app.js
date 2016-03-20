"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var header_1 = require('./header');
var drawer_1 = require('./services/drawer');
var drawer_2 = require('./drawer');
var uiEvents_1 = require('./services/uiEvents');
var store_1 = require('@ngrx/store');
var Observable_1 = require('rxjs/Observable');
var common_1 = require('angular2/common');
require('rxjs/add/operator/do');
require('rxjs/add/operator/startWith');
require('rxjs/add/observable/combineLatest');
var App = (function () {
    function App(drawer, uiEvents, store) {
        this.drawer = drawer;
        this.searchInput = new common_1.Control();
        this.config = { appTitle: 'ng2-pokedex' };
        this.pokemon = Observable_1.Observable.combineLatest(store.select('pokemon'), this.searchInput.valueChanges.startWith(''), function (pokemon, searchText) {
            if (searchText.length === 0) {
                return pokemon;
            }
            return pokemon.filter(function (monster) { return monster.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1; });
        });
    }
    Object.defineProperty(App.prototype, "hideDrawer", {
        get: function () {
            return this.drawer.hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "showOverlay", {
        get: function () {
            return this.drawer.showOverlay;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.toggleDrawer = function () {
        if (!this.drawer.hidden) {
            this.drawer.toggle();
        }
    };
    App.prototype.closeDrawer = function () {
        this.drawer.close();
    };
    App.prototype.pokemonName = function (idx, pokemon) {
        return pokemon.name;
    };
    __decorate([
        core_1.HostBinding('class.hide-sidedrawer'), 
        __metadata('design:type', Object)
    ], App.prototype, "hideDrawer", null);
    __decorate([
        core_1.HostBinding('class.mui--overflow-hidden'), 
        __metadata('design:type', Object)
    ], App.prototype, "showOverlay", null);
    App = __decorate([
        core_1.Component({
            selector: 'body',
            template: "\n    <header app-header id=\"header\"></header>\n    <side-drawer id=\"sidedrawer\" class=\"mui--no-user-select\" *ngIf=\"!showOverlay\"></side-drawer>\n    <div id=\"content-wrapper\">\n      <div class=\"mui--appbar-height\"></div>\n      <div class=\"mui-container-fluid\">\n        <br>\n\n        <h1 id=\"main-title\">{{config.appTitle}}</h1>\n\n        <div class=\"mui-textfield\">\n          <input id=\"monsters-search-bar\" placeholder=\"Search for Pok\u00E9mon\" type=\"text\"\n                 spellcheck=\"false\" autocorrect=\"off\" autocomplete=\"off\" [ngFormControl]=\"searchInput\"/>\n        </div>\n\n        <div id=\"monsters-list-wrapper\">\n          <ul id=\"monsters-list\">\n            <li *ngFor=\"#monster of pokemon | async; trackBy:pokemonName\">{{monster.name}}</li>\n          </ul>\n          <div id=\"progress-mask\"></div>\n        </div>\n      </div>\n    </div>\n    <footer id=\"footer\">\n      <div class=\"mui-container-fluid\">\n        <br/>\n        An <a href=\"https://github.com/nolanlawson/pokedex.org\">open-source site</a>\n        by <a href=\"http://nolanlawson.com\">Nolan Lawson</a>,\n        with help from <a href=\"http://pokeapi.co/\">Pok\u00E9api</a>.\n        <br/>\n        All content is &copy; Nintendo, Game Freak, and The Pok\u00E9mon Company.\n      </div>\n    </footer>\n    <div id=\"detail-view-container\" class=\"hidden\" #detailview>\n      <div id=\"detail-view\">\n        hellooooo world\n      </div>\n    </div>\n    <div id=\"mui-overlay\" *ngIf=\"showOverlay\" (click)=\"closeDrawer()\">\n      <side-drawer id=\"sidedrawer\"></side-drawer>\n    </div>\n  ",
            providers: [drawer_1.SideDrawerManager],
            directives: [header_1.Header, drawer_2.SideDrawer]
        }), 
        __metadata('design:paramtypes', [drawer_1.SideDrawerManager, uiEvents_1.UIEvents, store_1.Store])
    ], App);
    return App;
}());
exports.App = App;
