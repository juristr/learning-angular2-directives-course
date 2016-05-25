import { bootstrap } from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

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