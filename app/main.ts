import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

import { HelloAngular2 } from './helloAngular2';

@Component({
    selector: 'app',
    directives: [HelloAngular2],
    template: '<hello-angular who="Juri" (onSayHello)="didGreet($event)"></hello-angular>'
})
class AppComponent{

    didGreet(value) {
        console.log(value);
    }

}

bootstrap(AppComponent, [])
    .catch(err => console.error(err));