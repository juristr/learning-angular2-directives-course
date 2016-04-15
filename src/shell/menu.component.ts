import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'app-menu',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a class="mdl-navigation__link" href="" [routerLink]="['Dashboard']">
            <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
                home
            </i>
            Home
        </a>
        <a class="mdl-navigation__link" href="" [routerLink]="['Configure']">
            <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
                inbox
            </i>
            Configure
        </a>
        <div class="mdl-layout-spacer"></div>
        <a class="mdl-navigation__link" href="">
            <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
                help_outline
            </i>
            <span class="visuallyhidden">Help</span>
        </a>
    `
})
export class MenuComponent { }
