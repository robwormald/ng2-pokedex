import {Component, HostBinding} from 'angular2/core'
import {Header} from './header'
import {SideDrawerManager} from './services/drawer'
import {SideDrawer} from './drawer'
import {UIEvents} from './services/uiEvents'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs/Observable'
import {Control} from 'angular2/common'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/observable/combineLatest'

@Component({
  selector: 'body',
  templateUrl: './app.html',
  providers: [SideDrawerManager],
  directives: [Header, SideDrawer]
})
export class App {
  config: any;
  pokemon:Observable<any[]>;
  searchInput:Control = new Control();
  constructor(private drawer:SideDrawerManager, uiEvents:UIEvents, store:Store<any>) {
    this.config = { appTitle: 'ng2-pokedex' }
    this.pokemon = Observable.combineLatest(
      store.select('pokemon'),
      this.searchInput.valueChanges.startWith(''),
      (pokemon:any[], searchText) => {
        if(searchText.length === 0){
          return pokemon;
        }
        return pokemon.filter(monster => monster.name.toLowerCase().indexOf(searchText.toLowerCase()) > - 1);
      });
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
  pokemonName(idx,pokemon){
    return pokemon.name;
  }
}
