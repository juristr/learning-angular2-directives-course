import {bootstrap} from 'angular2/platform/browser';
import * as materialLite from 'material';

import {App} from './app';

bootstrap(App, [])
    .then(function(){
        materialLite.componentHandler.upgradeAllRegistered();        
    })

