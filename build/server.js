"use strict";
var http = require('http');
var https = require('https');
var fs = require('fs');
require('reflect-metadata');
var path = require('path');
var express = require('express');
var angular2_universal_preview_1 = require('angular2-universal-preview');
var core_1 = require('angular2/core');
core_1.enableProdMode();
var app = express();
var root = path.join(path.resolve(__dirname, '../dist'));
// Express View
app.engine('.html', angular2_universal_preview_1.expressEngine);
app.set('views', root);
app.set('view engine', 'html');
// Serve static files
//app.use(express.static(publicDir));
// Routes
app.use(express.static(root));
// app.use('/', (req, res) => {
//   res.render('index', { directives: [App], providers: [
//     ROUTER_PROVIDERS,
//     NODE_LOCATION_PROVIDERS,
//     provide(REQUEST_URL, {useValue: req.originalUrl}),
//     provide(APP_BASE_HREF, {useValue: `http://localhost:3000${req.baseUrl}`}),
//     provide(REQUEST_URL, {useValue: 'http://localhost:3000'}),
//     provideStore(reducers, {pokemon: pokemonData}),
//     provide(UIEvents, {useValue: {}}),
//     //provide(PLATFORM_PIPES, {useValue: [ServerAsyncPipe], multi: true})
//   ] , preboot: false});
// });
if (process.env.PROD) {
    var ssl = {
        key: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/fullchain.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/chain.pem')
    };
    https.createServer(ssl, app).listen(process.env.PORT || 8443);
}
http.createServer(app).listen(process.env.PORT || 3000);
