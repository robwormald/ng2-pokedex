import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Rx'

const API_URL = 'http://pokeapi.co/api/v2';

@Injectable()
export class PokeAPI {
    constructor(private http:Http){}
    private fetchAll(url){
        return new Observable(observer => {
            let next;
            const fetch = (url) => {
                
                this.fetch(url).subscribe(response => {
                    next = response.next;
                    observer.next(response.results);
                    
                }, err => observer.error(err),
                () => {
                    if(next){
                        fetch(next);
                    }
                    else{
                        observer.complete();
                    }
                })
            }
            
            fetch(url);
            
          return () => {
              next = false;
          }
        });
    }
    private fetch(url){
        return this.http.get(url).map(res => res.json());
    }
    getAllPokemon(){
        return this.fetchAll(`${API_URL}/pokemon`).scan((all, pokemon) => {
            Array.prototype.push.apply(all, pokemon);
            return all;
        },[]);
    }
}

