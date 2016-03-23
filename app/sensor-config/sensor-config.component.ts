import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';

@Component({
    selector: 'configure',
    templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent {
    private sensors: Sensor[];

    constructor(private sensorService: SensorService ) {

    }

    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

 }
