import {bootstrap} from 'angular2/platform/browser';
import { HelloAngular2 } from './helloAngular2';

bootstrap(HelloAngular2, [])
    .catch(err => console.error(err));