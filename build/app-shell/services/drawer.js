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
var store_1 = require('@ngrx/store');
var SideDrawerManager = (function () {
    function SideDrawerManager(store) {
        this.hidden = true;
        this.showOverlay = false;
        this.active = false;
        store.subscribe();
    }
    SideDrawerManager.prototype.toggle = function () {
        if (!this.hidden) {
            this.showOverlay = false;
        }
        this.hidden = !this.hidden;
    };
    SideDrawerManager.prototype.show = function (showOverlay) {
        var _this = this;
        if (showOverlay === void 0) { showOverlay = false; }
        this.showOverlay = showOverlay;
        this.hidden = false;
        if (this.showOverlay) {
            setTimeout(function () { return _this.active = true; }, 20);
        }
        else {
            this.active = true;
        }
    };
    SideDrawerManager.prototype.close = function () {
        var _this = this;
        this.active = false;
        setTimeout(function () {
            _this.showOverlay = false;
        }, 30);
    };
    SideDrawerManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_1.Store])
    ], SideDrawerManager);
    return SideDrawerManager;
}());
exports.SideDrawerManager = SideDrawerManager;
