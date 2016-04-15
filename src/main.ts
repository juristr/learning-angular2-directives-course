import {bootstrap } from 'angular2/platform/browser';
import { provide, enableProdMode } from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import * as materialLite from 'material-design-lite';

import {AppComponent} from './app.component';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch((err:any) => console.error(err));
