import {Injectable} from 'angular2/core'
import {MessageBus} from "angular2/platform/worker_app";
import {Store} from '@ngrx/store'

@Injectable()
export class UIEvents {
  constructor(messageBus:MessageBus, store:Store<any>){
    messageBus.initChannel('app-uiEvents');
    messageBus.from('app-uiEvents')
     .subscribe(store);
  }
}
