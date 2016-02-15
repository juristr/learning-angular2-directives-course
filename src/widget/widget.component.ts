import {Component} from 'angular2/core';

import { Sensor } from '../core/sensor';

@Component({
    selector: 'widget',
    template: `
<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">
            <ng-content select="[widget-title]"></ng-content>
        </h2>
    </div>
    <div class="mdl-card mdl-grid mdl-cell--12-col widget-body-container">
        <ng-content select="[widget-body]"></ng-content>
    </div>
</div>
    `,
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
