import {Injectable} from 'angular2/core';
// import { Http } from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

export interface Sensor {
    name: string,
    description: string,
    type: string,
    data: any
}

@Injectable()
export class SensorService {
    private dashboardSensors: Sensor[] = [];

    constructor() {

    }

    discoverSensors() {
	     return Observable.fromArray([
             [
    {
        "name": "S1-00134",
        "description": "Temperature sensor",
        "type": "temperature",
        "data": {
            "current": 21,
            "min": 17,
            "max": 23,
            "avg": 20
        }
    },
    {
        "name": "S1-00211",
        "description": "Humidity sensor",
        "type": "humidity",
        "data": {
            "current": 70,
            "min": 50,
            "max": 72,
            "avg": 60
        }
    },
    {
        "name": "S1-00345",
        "description": "Light switch",
        "type": "switch",
        "data": {
            "value": "off"
        }
    }
]
         ]);
        // return this.http
        //     .get('assets/data/newsensors.json')
        //     .map(res => res.json());
    }

    addToDashboard(sensor: Sensor) {
        this.dashboardSensors.push(sensor);
    }

    getDashboardSensors(): Sensor[] {
        return this.dashboardSensors;
    }

}
