import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';
import { FilterComponent } from './filter.component';
import { SensorListComponent } from './sensor-list.component';
import { SensorPipe } from './sensor.pipe';

@Component({
    selector: 'configure',
    moduleId: module.id,
    directives: [FilterComponent, SensorListComponent],
    pipes: [SensorPipe],
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[] = []; 

    constructor(public sensorService: SensorService) {    
    }
    
    refreshSensors(filterData) {
        console.log('Got refresh with filter', filterData);
        
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

    ngOnInit() { 
        
    }
}