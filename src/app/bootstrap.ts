import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

import { HelloAngular2 } from './helloAngular2';


@Component({
    selector: 'app',
    template: `
        <hello-angular who="Juri"></hello-angular>
    `,
    directives: [ HelloAngular2 ]
})
class AppCmp {}


bootstrap(AppCmp, [])
    .catch(err => console.error(err));