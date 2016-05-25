import {Component, Input, OnInit} from '@angular/core';

import { Sensor } from '../core/sensors.service';

@Component({
    selector: 'sensor-list',
    templateUrl: 'app/sensor-config/sensor-list.html'
})
export class SensorListComponent implements OnInit {
    @Input() sensors: Sensor[];

    constructor() { }

    ngOnInit() { }
}