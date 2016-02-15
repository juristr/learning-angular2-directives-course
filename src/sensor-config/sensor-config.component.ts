import {Component, OnInit} from 'angular2/core';

import { SensorService, Sensor } from '../core/sensor';
import { SensorFilterComponent } from './sensor-filter.component';
import { SensorListComponent } from './sensor-list.component';
import { FilterSensor } from './filter-sensor.pipe';
import { ConfigModalComponent } from '../modal/modal.component';
import { OpenWithDirective } from '../modal/open-modal.directive';

@Component({
    selector: 'configure',
    directives: [ SensorFilterComponent, SensorListComponent, ConfigModalComponent, OpenWithDirective ],
    pipes: [FilterSensor],
    template: `
<div class="app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">

    <h1 class="mdl-typography--display-2">
        List of sensors
    </h1>
    <p class="mdl-typography--title">
        Scan for the list of available sensors in your environment and configure them for your dashboard.
    </p>

    <div class="mdl-cell--12-col">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" (click)="refreshSensors()">
            Scan for sensors
        </button>
    </div>

    <div *ngIf="sensors && sensors.length > 0">
        <hr />

        <sensor-filter (filterChange)="refreshSensors($event)" #filterCmp></sensor-filter>

        <hr />

        <sensor-list [sensors]="sensors | filterSensor: filterCmp.selectedCategory" (addItem)="addToDashboard($event)">
        </sensor-list>
    </div>
</div>

<div class="app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">

    <h1 class="mdl-typography--display-2">
        Configured sensors
    </h1>

     <div *ngIf="configuredSensors && configuredSensors.length > 0">
        <sensor-list [sensors]="configuredSensors"></sensor-list>
    </div>
    <div *ngIf="!configuredSensors || configuredSensors.length === 0">
        <p><i>No sensors configured yet</i></p>
    </div>
</div>

    `
})
export class SensorConfigureComponent implements OnInit {
    private filter: string;
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel = {};

    constructor(public sensorService: SensorService) {
    }

    ngOnInit() {
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }

    refreshSensors(filterData?: any) {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = new FilterSensor().transform(data, [filterData]);
            });
    }

    selectSensor(sensor:Sensor, modal) {
        // // assign a copy of the sensor
        // this.sensorModel = {
        //     name: sensor.name,
        //     description: sensor.description,
        //     type: sensor.type
        // };
        // modal.open();
    }

    cancelModal() {
        // reset the model
        this.sensorModel = null;
    }

    addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

}