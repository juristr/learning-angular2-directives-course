import {Component, OnInit} from 'angular2/core';

import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';
import { TemperatureHistoryComponent } from './temperature-history.component';

@Component({
    selector: 'humidity-sensor',
    directives: [TabsComponent, TabComponent, TemperatureHistoryComponent ],
    template: `
    <tabs>
        <tab title="Temperature">
            <div class="sensor-display--text">39°C</div>
        </tab>
        <tab title="Humidity">
            <temperature-history></temperature-history>
        </tab>
    </tabs>
    `,
    styles: [
        `
        .sensor-display--text {
            font-size: 90px;
            margin: 40px auto;
            width: 200px;
            text-align: center;
            vertical-align: middle;
            height: 110px;
            overflow: hidden;
            line-height: 1;
        }
        `   
    ]
})

export class HumiditySensorComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}