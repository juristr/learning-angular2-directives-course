import {Component, } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import * as materialLite from 'material-design-lite';

import { HeaderComponent } from './shell/header.component';
import { SidebarComponent } from './shell/sidebar.component';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { SensorConfigureComponent } from './sensor-config/sensor-config.component';

import { SensorService } from './core/sensors.service';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES, HeaderComponent, SidebarComponent, DashboardComponent ],
  providers: [ SensorService ],
  template: `
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        </app-header>
        <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        </app-sidebar>
        <main class="mdl-layout__content mdl-color--grey-100">
            <router-outlet></router-outlet>
        </main>
    </div>
  `
})
@RouteConfig([
  { path: '/', component: DashboardComponent, as: 'Dashboard' },
  { path: '/configure', component: SensorConfigureComponent, as: 'Configure' },
  { path: '/**', redirectTo: ['Dashboard'] }
])
export class AppComponent {

    constructor(private router: Router) {
        // register to route changes
        router.subscribe(() => {
            // ..and run the MDL script to augment all new controls Angular has
            // rendered
            materialLite.componentHandler.upgradeAllRegistered();
        });
    }

}
