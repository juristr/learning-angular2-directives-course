import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';

import { FilterSensor } from './filter-sensor.pipe';

@Component({
    selector: 'configure',
    directives: [ SensorListComponent, SensorFilterComponent ],
    pipes: [ FilterSensor ],
    templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel: Sensor;

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

    selectSensor(sensor:Sensor, modal) {
        // assign a copy of the sensor
        this.sensorModel = {
            name: sensor.name,
            description: sensor.description,
            type: sensor.type
        };
        modal.open();
    }

    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

 }
