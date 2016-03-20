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
var drawer_1 = require('./services/drawer');
var Header = (function () {
    function Header(drawer) {
        this.drawer = drawer;
        this.config = { appTitle: 'ng2-pokedex' };
    }
    Header.prototype.toggleDrawer = function () {
        this.drawer.toggle();
    };
    Header.prototype.showDrawer = function () {
        this.drawer.show(true);
    };
    Header = __decorate([
        core_1.Component({
            selector: '[app-header]',
            template: "\n      <div class=\"mui-appbar mui--appbar-line-height\">\n          <div class=\"mui-container-fluid\">\n            <a class=\"sidedrawer-toggle mui--visible-xs-inline-block js-show-sidedrawer hover-shadow\" (click)=\"showDrawer()\">\n              <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 23\" width=\"17\" height=\"23\"><style>.st0{fill:#fff;}</style><path class=\"st0\" d=\"M0 10.5h17v2H0zM0 5h17v2H0zM0 16h17v2H0z\"/></svg>\n            </a>\n            <a class=\"sidedrawer-toggle mui--hidden-xs js-hide-sidedrawer hover-shadow\" (click)=\"toggleDrawer()\">\n              <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 17 23\" width=\"17\" height=\"23\"><style>.st0{fill:#fff;}</style><path class=\"st0\" d=\"M0 10.5h17v2H0zM0 5h17v2H0zM0 16h17v2H0z\"/></svg>\n            </a>\n            <span class=\"mui--text-title mui--visible-xs-inline-block title\">{{config.appTitle}}</span>\n          </div>\n      </div>\n    ",
            providers: []
        }), 
        __metadata('design:paramtypes', [drawer_1.SideDrawerManager])
    ], Header);
    return Header;
}());
exports.Header = Header;
