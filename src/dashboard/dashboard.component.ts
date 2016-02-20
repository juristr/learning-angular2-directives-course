import {Component} from 'angular2/core';

import { WidgetComponent } from '../widget/widget.component';

import { HumiditySensorComponent } from '../sensors/humidity.component';
import { SensorService, Sensor } from '../core/sensor';

@Component({
    selector: 'dashboard',
    directives: [WidgetComponent, HumiditySensorComponent ],
    template: `
    <div class="mdl-grid">
        <widget>
            <div widget-title>Living Room</div>
            <div class="mdl-cell mdl-cell--12-col" widget-body>
                <humidity-sensor></humidity-sensor>
            </div>
        </widget>
    </div>
    `
})
export class DashboardCmp {
    dashboardSensors: Sensor[] = [];

    constructor(public sensorService: SensorService) {
        this.dashboardSensors = sensorService.getDashboardSensors();
    }

}