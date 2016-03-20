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
var http_1 = require('angular2/http');
var Rx_1 = require('rxjs/Rx');
var API_URL = 'http://pokeapi.co/api/v2';
var PokeAPI = (function () {
    function PokeAPI(http) {
        this.http = http;
    }
    PokeAPI.prototype.fetchAll = function (url) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var next;
            var fetch = function (url) {
                _this.fetch(url).subscribe(function (response) {
                    next = response.next;
                    observer.next(response.results);
                }, function (err) { return observer.error(err); }, function () {
                    if (next) {
                        fetch(next);
                    }
                    else {
                        observer.complete();
                    }
                });
            };
            fetch(url);
            return function () {
                next = false;
            };
        });
    };
    PokeAPI.prototype.fetch = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PokeAPI.prototype.getAllPokemon = function () {
        return this.fetchAll(API_URL + "/pokemon").scan(function (all, pokemon) {
            Array.prototype.push.apply(all, pokemon);
            return all;
        }, []);
    };
    PokeAPI = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PokeAPI);
    return PokeAPI;
}());
exports.PokeAPI = PokeAPI;
