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

@Pipe({
  name: 'async',
  pure: true
})
class ServerAsyncPipe {
  constructor(){
    console.log('init')
  }
  transform(observable){
    let result;
    observable.take(1).subscribe(value => result = value);
    console.log('pipe value', result);
    return result;
  }
}

// import {SHARED_PROVIDERS} from './shared-providers';

// Angular 2
import {App} from './app-shell/app';
import {UIEvents} from './app-shell/services/uiEvents'


let app = express();
let root = path.join(path.resolve(__dirname, '../dist'));
// Express View
app.engine('.ng2.html', expressEngine);
app.set('views', root);
app.set('view engine', 'ng2.html');

// Serve static files
app.use(express.static(root));
//app.use(express.static(publicDir));

// Routes
app.use('/', (req, res) => {
  res.render('index', { directives: [App], providers: [
    ROUTER_PROVIDERS,
    NODE_LOCATION_PROVIDERS,
    provide(REQUEST_URL, {useValue: req.originalUrl}),
    provide(APP_BASE_HREF, {useValue: `http://localhost:3000${req.baseUrl}`}),
    provide(REQUEST_URL, {useValue: 'http://localhost:3000'}),
    provideStore(reducers, {pokemon: [{name: 'bulbasaur'},{name: 'thing'}]}),
    provide(UIEvents, {useValue: {}}),
    //provide(PLATFORM_PIPES, {useValue: [ServerAsyncPipe], multi: true})
  ] , preboot: false});
});

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
