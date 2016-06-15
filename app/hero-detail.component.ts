import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams ) {
  }

  ngOninit() {
    let id = +this.routeParams.get('id');
    this.hero = this.heroService.getHero(id);
  console.log(hero);
  }

  goBack() {
    window.history.back();
  }



}
