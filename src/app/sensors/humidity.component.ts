import {Component, OnInit, ViewEncapsulation} from 'angular2/core';

import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';

import { DonutChartDirective } from './donut-chart.directive';

@Component({
    selector: 'humidity-sensor',
    directives: [TabsComponent, TabComponent, DonutChartDirective ],
    encapsulation: ViewEncapsulation.None,
    template: `
    <tabs>
        <tab title="Temperature">
            <div class="sensor-display--text"> {{ temperature }}°C</div>
        </tab>
        <tab title="Humidity">
            <donut-chart [data]="humidityPercent" class="donut-style">
            </donut-chart>
        </tab>
    </tabs>
    `,
    styles: [
        `
        .donut-style {
            width: 200px;
            display: block;
            margin: 0 auto;
        }
        
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
        
        .progress-meter .background {
           fill: #ccc;
        }

        .progress-meter .foreground {
            fill: steelblue;
        }

        .progress-meter text {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 24px;
            font-weight: bold;
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