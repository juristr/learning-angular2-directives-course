import { Pipe } from 'angular2/core';
import { Sensor } from '../core/sensors.service';

@Pipe({
    name: 'filterSensor'
})
export class FilterSensor {
    transform(value, [category]:string[]) {
        return value
                .filter((entry: Sensor) => {
                    if(category && category !== '') {
                        return entry.type === category
                    } else {
                        return true;
                    }
                });
    }
}