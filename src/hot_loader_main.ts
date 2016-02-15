/// <reference path="../tools/typings/tsd/systemjs/systemjs.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import * as materialLite from 'material-design-lite/material';
import { provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {App} from './app.component';


System.import('//localhost:<%= HOT_LOADER_PORT %>/ng2-hot-loader')
  .then(loader => {
    loader.ng2HotLoaderBootstrap(App, [
        ...HTTP_PROVIDERS,
        ...ROUTER_PROVIDERS,
        provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .then(function(){
        materialLite.componentHandler.upgradeAllRegistered();        
    });
  });



// import {provide} from 'angular2/core';
// import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
// import { App } from './app.component';

// System.import('//localhost:<%= HOT_LOADER_PORT %>/ng2-hot-loader')
//   .then(loader => {
//     loader.ng2HotLoaderBootstrap(App, [
//       ROUTER_PROVIDERS,
//       provide(LocationStrategy, { useClass: HashLocationStrategy })
//     ]);
//   });
