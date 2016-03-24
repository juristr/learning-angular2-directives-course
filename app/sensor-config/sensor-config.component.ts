import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';

@Component({
    selector: 'configure',
    directives: [ SensorListComponent ],
    pipes: [ FilterSensor ],
    templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent {
    private sensors: Sensor[] = [];

    constructor(private sensorService: SensorService ) {
    }

    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

 }
