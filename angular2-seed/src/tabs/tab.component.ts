import {Component, Input} from 'angular2/core';

@Component({
    selector: 'tab',
    template: `
    <div class="tabs-panel" [hidden]="!isActive">
        <ng-content></ng-content>
    </div>
    `
})
export class TabComponent {
    @Input() title: string;
    isActive: boolean = false;

    constructor() { }
}