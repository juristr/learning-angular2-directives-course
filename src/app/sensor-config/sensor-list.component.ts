import {Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensor';
import { ConfigModalComponent  } from '../modal/modal.component';
import { OpenWithDirective } from '../modal/open-modal.directive';

@Component({
    selector: 'sensor-list',
    moduleId: module.id,
    templateUrl: 'sensor-list.html',
    directives: [ ConfigModalComponent, OpenWithDirective ]
})

export class SensorListComponent {
    @Input() sensors: Sensor[];
    @Output() addItem: EventEmitter<Sensor> = new EventEmitter<Sensor>();

    constructor() {

    }

    add(sensor: Sensor) {
        this.addItem.emit(sensor);
    }
}