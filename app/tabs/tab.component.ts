import {Component, Input} from 'angular2/core';

@Component({
    selector: 'tab',
    moduleId: module.id,
    template: `
    <div class="tabs-panel" [hidden]="!isActive">
        <ng-content></ng-content>
    </div>
    `,
    styles: [
        `
        .tabs-panel {
            padding: 10px;
        }
        `
    ]
})
export class TabComponent {
    @Input() title: string;
    isActive: boolean = false;

}
