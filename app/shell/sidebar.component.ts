import { Component } from 'angular2/core';

import { AppMenuCmp } from './menu.component';
import { UserProfileCmp } from '../user-profile/user-profile.component';

@Component({
    selector: 'app-sidebar',
    directives: [ AppMenuCmp, UserProfileCmp ],
    template: `
        <user-profile class="demo-drawer-header">
        </user-profile>
        <app-menu class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        </app-menu>
    `
})
export class SidebarCmp {}
