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
            <div style="font-size:30px;text-align:center;width:100%;height:100%">39</div>
        </tab>
        <tab title="Humidity">
            <div style="font-size:30px;text-align:center;width:100%;height:100%">30%</div>
        </tab>
        <tab title="Targaryens">
            <temperature-history></temperature-history>
        </tab>
    </tabs>
    `
})

export class HumiditySensorComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}