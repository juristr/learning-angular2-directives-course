import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import { DonutChartDirective } from './donut-chart.directive';

import * as moment from 'moment';

@Component({
    selector: 'temperature-history',
    directives: [DonutChartDirective],
    template: `
        <donut-chart [data]="graphData" class="donut-style">
        </donut-chart>
        
        <button (click)="addData()">Add dataset</button>
    `,
    styles: [
        `
        .donut-style {
            display: block;
            width: 200px;
            margin: 0 auto;
        }
        
        .axis path,
        .axis line {
            fill: none;
            stroke: #000;
            shape-rendering: crispEdges;
        }

        .area {
            fill: steelblue;
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
    ],
    encapsulation: ViewEncapsulation.None
})

export class TemperatureHistoryComponent implements OnInit {
    graphData: number;
    stringValue: string = 'Hi';

    constructor() {
        this.graphData = 20;
    }

    addData() {
        this.graphData = (Math.random() * 30) + 1;
    }

    ngOnInit() { }
}