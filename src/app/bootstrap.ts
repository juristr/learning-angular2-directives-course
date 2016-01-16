import {bootstrap} from 'angular2/platform/browser';
import * as materialLite from 'material';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {App} from './app.component';

bootstrap(App, [
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .then(function(){
        materialLite.componentHandler.upgradeAllRegistered();        
    })

