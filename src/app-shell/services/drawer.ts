import {Injectable} from 'angular2/core'
import {Store} from '@ngrx/store'

@Injectable()
export class SideDrawerManager {
  hidden: boolean = true;
  showOverlay: boolean = false;
  active: boolean = false;
  constructor(store:Store<any>){
    store.subscribe()
  }
  toggle(){
    if(!this.hidden){
      this.showOverlay = false;
    }
    this.hidden = !this.hidden;

  }
  show(showOverlay:boolean = false){
    this.showOverlay = showOverlay;
    this.hidden = false;
    if(this.showOverlay){
      setTimeout(() => this.active = true, 20);
    }
    else {
      this.active = true;
    }
  }
  close(){
    this.active = false;
    setTimeout(() => {
      this.showOverlay = false;
    }, 30);
  }
}
