import * as http from 'http'
import * as https from 'https'
import * as fs from 'fs'

import 'reflect-metadata'
import * as path from 'path';
import * as express from 'express';
import {Observable} from 'rxjs/Rx';
import {
  NODE_LOCATION_PROVIDERS,
  expressEngine,
  REQUEST_URL
} from 'angular2-universal-preview';
import {provideStore} from '@ngrx/store'


import {provide, enableProdMode, Pipe} from 'angular2/core';
import {PLATFORM_PIPES} from 'angular2/core'
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
enableProdMode()

import * as reducers from './reducers/index'
var pokemonData = require('./data/pokemon.json')

// import {SHARED_PROVIDERS} from './shared-providers';

// Angular 2
import {App} from './app-shell/app';
import {UIEvents} from './app-shell/services/uiEvents'


let app = express();
let root = path.join(path.resolve(__dirname, '../dist'));
// Express View
app.engine('.html', expressEngine);
app.set('views', root);
app.set('view engine', 'html');

// Serve static files

//app.use(express.static(publicDir));

// Routes
app.use(express.static(root));

if(process.env.PROD){
  var ssl = {
    key: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/pokedex.innit.io/chain.pem')
  }
  https.createServer(ssl, app).listen(process.env.PORT || 8443);
}

http.createServer(app).listen(process.env.PORT || 3000);
