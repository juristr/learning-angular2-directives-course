import {Component, OnInit, ViewEncapsulation} from 'angular2/core';

import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';

@Component({
    selector: 'humidity-sensor',
    directives: [TabsComponent, TabComponent ],
    encapsulation: ViewEncapsulation.None,
    template: `
    <tabs>
        <tab title="Temperature">
            <div class="sensor-display--text"> {{ temperature }}°C</div>
        </tab>
        <tab title="Humidity">

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
    temperature: number = 21;
    humidityPercent: number = 34;

    constructor() { }

    ngOnInit() { }
}