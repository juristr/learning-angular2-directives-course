import { Component } from 'angular2/core';

import { AppMenuCmp } from './menu';
import { UserProfileCmp } from './profile';

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