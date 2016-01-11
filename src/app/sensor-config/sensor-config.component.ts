import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';
import { SensorFilterComponent } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';
import { ConfigModalComponent } from './config-modal.component';

@Component({
    selector: 'configure',
    moduleId: module.id,
    directives: [ SensorFilterComponent, SensorListComponent, ConfigModalComponent ],
    pipes: [FilterSensor],
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private filter: string;
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel: Sensor;

    constructor(public sensorService: SensorService) {    
    }
    
    ngOnInit() {
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }
    
    refreshSensors(filterData?: any) {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = new FilterSensor().transform(data, [filterData]);
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
    
    cancelModal() {
        // reset the model
        this.sensorModel = null;
    }
    
    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

}