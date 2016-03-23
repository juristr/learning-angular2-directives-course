import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

export interface Sensor {
    name: string,
    description: string
}

@Injectable()
export class SensorService {

    constructor(private http: Http) {
    }

    discoverSensors() {
        return this.http
            .get('/assets/data/newsensors.json')
            .map(res => res.json());
    }

}
