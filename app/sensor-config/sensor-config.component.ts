import {Component, OnInit} from 'angular2/core';

interface Sensor {
    name: string,
    description: string
}

@Component({
    selector: 'configure',
    templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent {
    private sensors: Sensor[];

    constructor() {
        this.sensors = [
            {
                name: "S1-001XX",
                description: "Temperature and humidity sensor"
            },
            {
                name: "S1-002XX",
                description: "Temperature and humidity sensor"
            },
            {
                name: "S1-003XX",
                description: "Temperature and humidity sensor"
            }
        ]
    }

 }
