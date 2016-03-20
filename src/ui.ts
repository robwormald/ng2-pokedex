import {platform, Provider} from 'angular2/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/mergeMap'

import {
  WORKER_RENDER_APP,
  WORKER_RENDER_PLATFORM,
  WORKER_SCRIPT,
  MessageBus
} from 'angular2/platform/worker_render'

let appRef = platform([WORKER_RENDER_PLATFORM])
.application([WORKER_RENDER_APP, new Provider(WORKER_SCRIPT, {useValue: "lib/worker-loader.js"})]);

const messageBus:MessageBus = appRef.injector.get(MessageBus);

messageBus.initChannel('app-uiEvents');

const uiEvents = messageBus.to('app-uiEvents');

let {innerHeight, innerWidth} = window;

const resizeEvent = Observable.fromEvent(window, 'resize')
  .debounceTime(30)
  .map(({type, target}:Event) => ({type:'RESIZE', payload:{innerHeight: target['innerHeight'], innerWidth: target['innerWidth']}}))
  .startWith({type: 'RESIZE', payload: {innerHeight, innerWidth}})

const onlineStatusEvents = Observable.merge(
  Observable.fromEvent(window, 'online'),
  Observable.fromEvent(window, 'offline'))
  .map(() => navigator.onLine)
  .startWith(navigator.onLine)
  .map(payload => ({type: 'CONNECTION_STATUS', payload}));

messageBus.from('ng-Renderer')
  .take(1)
  .flatMap(() => Observable.merge(resizeEvent, onlineStatusEvents))
  .subscribe(uiEvents);






// (function() {
//   'use strict';

//   if ('serviceWorker' in navigator) {
//     navigator['serviceWorker'].register('/service-worker.js')
//     .then(function(registration) {
//       registration.onupdatefound = function() {
//         var installingWorker = registration.installing;
//         installingWorker.onstatechange = function() {
//           switch (installingWorker.state) {
//             case 'installed':
//               if (navigator['serviceWorker'].controller) {
//                 console.log('New or updated content is available.');
//               } else {
//                 console.log('Content is now available offline!');
//               }
//               break;

//             case 'redundant':
//               console.error('The installing service worker became redundant.');
//               break;
//           }
//         };
//       };
//     }).catch(function(error) {
//       console.error('Error during service worker registration:', error);
//     });
//   }
// })();
