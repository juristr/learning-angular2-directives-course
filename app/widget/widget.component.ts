import {Component} from 'angular2/core';

import { Sensor } from '../core/sensor';

@Component({
    selector: 'widget',
    templateUrl: './widget/widget.html',
    styles: [
        `
        .mdl-card {
            width: 380px;
        }
        
        h2.mdl-card__title-text {
            width: 100%;
            text-align:center;
        }
        
        h2.mdl-card__title-text > div {
            width: 100%;
        }
        
        .widget-body-container {
            padding: 0;
        }
        `
    ]
})

export class WidgetComponent {
    private sensor: Sensor;

    constructor() { 
        console.log('widget: constructor');
        
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
