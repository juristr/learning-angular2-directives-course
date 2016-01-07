import {Component, Input, OnInit} from 'angular2/core';

import { Sensor } from '../core/sensor';

@Component({
    selector: 'sensor-list',
    moduleId: module.id,
    templateUrl: 'sensor-list.html'
})

export class SensorListComponent implements OnInit {
    @Input() sensors: Sensor[];
    
    constructor() { }

    ngOnInit() { }
}