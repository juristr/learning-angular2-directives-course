import {Component, OnInit} from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { ModalComponent } from '../modal/modal.component';

import { FilterSensor } from './filter-sensor.pipe';

@Component({
    selector: 'configure',
    directives: [ SensorListComponent, SensorFilterComponent, ModalComponent ],
    pipes: [ FilterSensor ],
    templateUrl: 'app/sensor-config/sensor-config.html'
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
        console.log('adding sensor', sensor);
        this.sensorService.addToDashboard(sensor);
    }

 }
