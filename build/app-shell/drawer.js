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
var SideDrawer = (function () {
    function SideDrawer(drawer) {
        this.drawer = drawer;
        this._active = false;
        this.config = { appTitle: 'ng2-pokedex' };
    }
    SideDrawer.prototype.toggleDrawer = function () {
        this.drawer.toggle();
    };
    SideDrawer.prototype.showDrawer = function () {
        this.drawer.show();
    };
    Object.defineProperty(SideDrawer.prototype, "isActive", {
        get: function () {
            return this.drawer.active;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.active'),
        core_1.HostBinding('class.mui--no-user-select'), 
        __metadata('design:type', Object)
    ], SideDrawer.prototype, "isActive", null);
    SideDrawer = __decorate([
        core_1.Component({
            selector: 'side-drawer',
            template: "\n      <div id=\"sidedrawer-brand\" class=\"mui--appbar-line-height mui--text-title\">\n        Pokedex.org\n      </div>\n      <div class=\"mui-divider\"></div>\n      <ul>\n        <li>\n          <a href=\"#\" id=\"pokemon-link\">\n            <strong>Pok&eacute;mon</strong>\n          </a>\n        </li>\n        <li>\n          <a href=\"https://github.com/nolanlawson/pokedex.org#readme\" target=\"_blank\">\n            <strong>About</strong>\n          </a>\n        </li>\n      </ul>\n    ",
            providers: [],
        }), 
        __metadata('design:paramtypes', [drawer_1.SideDrawerManager])
    ], SideDrawer);
    return SideDrawer;
}());
exports.SideDrawer = SideDrawer;
