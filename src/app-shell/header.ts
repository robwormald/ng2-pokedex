import {Component} from 'angular2/core'
import {SideDrawerManager} from './services/drawer'

@Component({
    selector: '[app-header]',
    templateUrl: './header.html',
    providers: []
})
export class Header {
    config:any;
    constructor(private drawer:SideDrawerManager){
        this.config = { appTitle: 'ng2-pokedex'}
    }
    toggleDrawer(){
      this.drawer.toggle();
    }
    showDrawer(){
      this.drawer.show(true);
    }
}
