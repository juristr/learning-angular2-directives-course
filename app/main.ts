import {bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import * as materialLite from 'material-design-lite';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));