import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

export interface Sensor {
    name: string,
    description: string,
    type: string
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
