import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import * as materialLite from 'material';

// services
import { SensorService } from './core/sensor';

// components
import { HeaderCmp } from './shell/header.component';
import { SidebarCmp } from './shell/sidebar.component';
import { DashboardCmp  } from './dashboard/dashboard.component';
import { SensorConfigureComponent } from './sensor-config/sensor-config.component';


@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES, HeaderCmp, SidebarCmp, DashboardCmp, SensorConfigureComponent ],
  providers: [ SensorService ],
  template: `
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        </app-header>
        <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        </app-sidebar>
        <main class="mdl-layout__content mdl-color--grey-100">
            <div class="demo-content">
                <router-outlet></router-outlet>
            </div>
        </main>
    </div>
  `
})
@RouteConfig([
  { path: '/', component: DashboardCmp, as: 'Dashboard' },
  { path: '/configure', component: SensorConfigureComponent, as: 'Configure' },
  { path: '/**', redirectTo: ['Dashboard'] }
])
export class App {
  title: string;

  constructor(router: Router) {
    this.title = 'Angular 2';
    
    // register to route changes
    router.subscribe(() => {
       // ..and run the MDL script to augment all new controls Angular has
       // rendered
       materialLite.componentHandler.upgradeAllRegistered(); 
    });
  }

  ngOnInit() {

  }

}