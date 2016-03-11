import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'hello-angular',
  template: `
    <p>Hello, {{ who }}</p>
    <button (click)="sayHello()">Say Hello</button>
  `
})
export class HelloAngular2 {
    @Input() who: string;
    @Output() onSayHello: EventEmitter<string> = new EventEmitter();
    
    
    sayHello() {
        this.onSayHello.emit(`Hello, ${this.who}`);
    }
    
}