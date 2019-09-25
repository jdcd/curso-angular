import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private _heroes_service: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroes_service.getHeroes();
    console.info(this.heroes);
  }

  public verHeroe(idx: number){
    console.log(idx);
  }

}

