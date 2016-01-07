import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';

@Component({
    selector: 'configure',
    moduleId: module.id,
    templateUrl: 'sensor-config.html'
})

export class SensorConfigureComponent implements OnInit {
    private sensors: Sensor[]; 

    constructor(public sensorService: SensorService) {    
    }
    
    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }

    ngOnInit() { 
        
    }
}