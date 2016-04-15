import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

export interface Sensor {
    name: string;
    description: string;
    type: string;
    data: any;
}

@Injectable()
export class SensorService {
    private dashboardSensors: Sensor[] = [];

    constructor(private http: Http) {
    }

    discoverSensors() {
        return this.http
            .get('/assets/data/newsensors.json')
            .map(res => res.json());
    }

    addToDashboard(sensor: Sensor) {
        this.dashboardSensors.push(sensor);
    }

    getDashboardSensors(): Sensor[] {
        return this.dashboardSensors;
    }

}
