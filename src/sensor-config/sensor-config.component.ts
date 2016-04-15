import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';

import { FilterSensor } from './filter-sensor.pipe';

@Component({
    selector: 'configure',
    directives: [ SensorListComponent, SensorFilterComponent ],
    pipes: [ FilterSensor ],
    templateUrl: './sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];

    constructor(private sensorService: SensorService ) {
    }

    ngOnInit() {
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }

    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

 }
