import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';
import { SensorFilterComponent, SensorFilter } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';

@Component({
    selector: 'configure',
    moduleId: module.id,
    directives: [ SensorFilterComponent, SensorListComponent ],
    pipes: [FilterSensor],
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private filter: string;
    private sensors: Sensor[] = [];

    constructor(public sensorService: SensorService) {    
    }
    
    refreshSensors(filterData: SensorFilter) {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = new FilterSensor().transform(data, [filterData]);
            });
    }

    ngOnInit() { 
        
    }
}