import {platform, provide, enableProdMode} from "angular2/core";
import {
  WORKER_APP_PLATFORM,
  WORKER_APP_APPLICATION,
  MessageBus
} from "angular2/platform/worker_app";

import {App} from "./app-shell/app";
import {provideStore} from '@ngrx/store'
import * as reducers from './reducers/index'
import {UIEvents} from './app-shell/services/uiEvents'

enableProdMode()

platform([WORKER_APP_PLATFORM])
.application([WORKER_APP_APPLICATION, [provideStore(reducers), UIEvents]])
.bootstrap(App);
