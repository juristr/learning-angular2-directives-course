import {Component} from 'angular2/core';

import { Sensor } from '../core/sensors.service';

@Component({
    selector: 'widget',
    templateUrl: './widget/widget.html'
})
export class WidgetComponent {
    private sensor: Sensor;

    constructor() {
        this.sensor = {
            name: 'S1-00211',
            description: 'Humidity sensor',
            type: 'humidity',
            data: {
                current: 70,
                min: 50,
                max: 72,
                avg: 60
            }
        };
    }
}
