import {Directive, Component, ElementRef, Renderer} from 'angular2/core';
// import {RouteConfig, Router} from 'angular2/router';
// import {Http, Headers} from 'angular2/http';

// import {ROUTER_DIRECTIVES} from 'angular2/router';

/*
  App directives
*/
import { HeaderCmp } from './header';
import { NavCmp } from './sidebar';
import { MainCmp } from './main';


@Component({
  selector: 'app',
  directives: [ /*ROUTER_DIRECTIVES,*/ HeaderCmp, NavCmp, MainCmp],
  template: `
  <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
    </app-header>
    <app-nav class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
    </app-nav>
    <app-main class="mdl-layout__content mdl-color--grey-100">
    </app-main>
  </div>
  `
})
export class App {
  title: string;

  constructor() {
    this.title = 'Angular 2';
  }

  ngOnInit() {

  }

}