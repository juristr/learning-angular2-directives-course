import { bootstrap } from '@angular/platform-browser-dynamic';
import * as materialLite from 'material-design-lite';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [])
    .then(() => {
        materialLite.componentHandler.upgradeAllRegistered();
    })
    .catch(err => console.error(err));