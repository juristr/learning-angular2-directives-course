import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import * as materialLite from 'material-design-lite';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));