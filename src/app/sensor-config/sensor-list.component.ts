import {Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensor';

@Component({
    selector: 'sensor-list',
    moduleId: module.id,
    templateUrl: 'sensor-list.html'
})

export class SensorListComponent implements OnInit {
    @Input() sensors: Sensor[];
    @Output() addItem: EventEmitter<Sensor> = new EventEmitter<Sensor>();
    
    constructor() {
        
    }
    
    add(sensor: Sensor) {
        this.addItem.emit(sensor);    
    }
}