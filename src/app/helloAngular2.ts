import { Component, Input } from 'angular2/core';

@Component({
  selector: 'hello-angular',
  template: '<p>Hello, {{ who }}</p>'
})
export class HelloAngular2 {
    @Input() who: string;
}