import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import { AreaChartDirective } from './area-chart.directive';

import * as moment from 'moment';

@Component({
    selector: 'temperature-history',
    directives: [AreaChartDirective],
    template: `
        <area-chart
            [data]="graphData" [simpleString]="stringValue"
        >
        </area-chart>
        <button (click)="addData()">Add dataset</button>
    `,
    styles: [
        `
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
            fill: #000;
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
        this.graphData = 10;
    }

    addData() {
        this.graphData = (Math.random() * 30) + 1;
        // var newArray = new Array(...this.graphData);
        // newArray.push({
        //    date: moment().format('HH:mm:ss'),
        //    close: (Math.random() * 30) +  1
        // });
        // this.graphData = newArray;
    }

    ngOnInit() { }
}