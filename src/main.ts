// import {bootstrap} from 'angular2/platform/browser';
import {bootstrap} from 'angular2-universal-preview';
// import * as materialLite from 'material-design-lite/material';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';


// For Batarangle Integration
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

import {App} from './app.component';

bootstrap(App, [
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        ...ELEMENT_PROBE_PROVIDERS
    ])
    .then(function(){
        // materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));

