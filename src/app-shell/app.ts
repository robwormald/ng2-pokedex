import {Component, HostBinding} from 'angular2/core'
import {Header} from './header'
import {SideDrawerManager} from './services/drawer'
import {SideDrawer} from './drawer'
import {UIEvents} from './services/uiEvents'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Component({
  selector: 'body',
  templateUrl: './app.html',
  providers: [SideDrawerManager],
  directives: [Header, SideDrawer]
})
export class App {
  config: any;
  pokemon:Observable<any[]>;
  constructor(private drawer:SideDrawerManager, uiEvents:UIEvents, store:Store<any>) {
    this.config = { appTitle: 'ng2-pokedex' }
    this.pokemon = store.select('pokemon');
  }

  @HostBinding('class.hide-sidedrawer')
  get hideDrawer(){
    return this.drawer.hidden;
  }
  @HostBinding('class.mui--overflow-hidden')
  get showOverlay(){
    return this.drawer.showOverlay;
  }
  toggleDrawer(){
    if(!this.drawer.hidden){
      this.drawer.toggle()
    }
  }
  closeDrawer(){
    this.drawer.close();
  }
}
