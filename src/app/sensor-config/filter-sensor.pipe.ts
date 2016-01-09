import { Pipe } from 'angular2/core';
import { Sensor } from '../core/sensor';
import { SensorFilter } from './filter.component';

@Pipe({
    name: 'filterSensor'
})
export class FilterSensor {
    transform(value, [filterValue]:SensorFilter[]) {
        let result = value
                .filter((entry: Sensor) => {
                    // console.log(filterValue.category || 'no category');
                    if(filterValue && filterValue.category) {
                        return entry.type === filterValue.category;
                    } else {
                        return true;
                    }
                })
                .filter((entry: Sensor) => {
                    if(filterValue && filterValue.fullText && filterValue.fullText !== '') {
                        let filterVal = filterValue.fullText.toLowerCase();
                        let entryName = entry.name.toLowerCase();
                        let entryDesc = entry.description.toLowerCase();
                        
                        return (entryName.includes(filterVal) || entryDesc.includes(filterVal))
                    } else {
                        // don't filter
                        return true;
                    }
                });
        console.log(result);
        return result;
    }
}