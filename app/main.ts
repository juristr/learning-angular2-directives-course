import {bootstrap} from 'angular2/platform/browser';
import * as materialLite from 'material-design-lite';

import {App} from './app';

bootstrap(App, [])
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));