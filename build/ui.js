"use strict";
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/observable/merge');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/startWith');
require('rxjs/add/operator/take');
require('rxjs/add/operator/mergeMap');
var worker_render_1 = require('angular2/platform/worker_render');
var appRef = core_1.platform([worker_render_1.WORKER_RENDER_PLATFORM])
    .application([worker_render_1.WORKER_RENDER_APP, new core_1.Provider(worker_render_1.WORKER_SCRIPT, { useValue: "worker-app.js" })]);
var messageBus = appRef.injector.get(worker_render_1.MessageBus);
messageBus.initChannel('app-uiEvents');
var uiEvents = messageBus.to('app-uiEvents');
var innerHeight = window.innerHeight, innerWidth = window.innerWidth;
var resizeEvent = Observable_1.Observable.fromEvent(window, 'resize')
    .debounceTime(30)
    .map(function (_a) {
    var type = _a.type, target = _a.target;
    return ({ type: 'RESIZE', payload: { innerHeight: target['innerHeight'], innerWidth: target['innerWidth'] } });
})
    .startWith({ type: 'RESIZE', payload: { innerHeight: innerHeight, innerWidth: innerWidth } });
var onlineStatusEvents = Observable_1.Observable.merge(Observable_1.Observable.fromEvent(window, 'online'), Observable_1.Observable.fromEvent(window, 'offline'))
    .map(function () { return navigator.onLine; })
    .startWith(navigator.onLine)
    .map(function (payload) { return ({ type: 'CONNECTION_STATUS', payload: payload }); });
messageBus.from('ng-Renderer')
    .take(1)
    .flatMap(function () { return Observable_1.Observable.merge(resizeEvent, onlineStatusEvents); })
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
