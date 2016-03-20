import {Component, HostBinding} from 'angular2/core'
import {SideDrawerManager} from './services/drawer'

@Component({
    selector: 'side-drawer',
    templateUrl: './drawer.html',
    providers: [],
})
export class SideDrawer {
    config:any;
    _active:boolean = false;
    constructor(private drawer:SideDrawerManager){
        this.config = { appTitle: 'ng2-pokedex'}
    }
    toggleDrawer(){
      this.drawer.toggle();
    }
    showDrawer(){
      this.drawer.show();
    }
    @HostBinding('class.active')
    @HostBinding('class.mui--no-user-select')
    get isActive(){
      return this.drawer.active;
    }
}
