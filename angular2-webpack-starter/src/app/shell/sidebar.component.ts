import { Component } from 'angular2/core';

import { MenuComponent } from './menu.component';
import { UserProfileComponent } from '../user-profile/profile.component';

@Component({
    selector: 'app-sidebar',
    directives: [MenuComponent, UserProfileComponent],
    template: `
        <user-profile class="demo-drawer-header">
        </user-profile>
        <app-menu class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        </app-menu>
    `
})
export class SidebarComponent {}