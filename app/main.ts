import { bootstrap } from '@angular/platform-browser-dynamic';
import { HelloAngular2 } from './helloAngular2';

bootstrap(HelloAngular2, [])
    .catch(err => console.error(err));