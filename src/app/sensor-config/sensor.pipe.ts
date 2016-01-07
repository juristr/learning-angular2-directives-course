import { Pipe } from 'angular2/core';
import { Sensor } from '../core/sensor';

@Pipe({
    name: 'sensorFilter'
})
export class SensorPipe {
    transform(value, [filterValue]:string[]) {
        return value.filter((entry: Sensor) => {
            if(filterValue && filterValue.length > 0) {
                let filterVal = filterValue.toLowerCase();
                let entryName = entry.name.toLowerCase();
                let entryDesc = entry.description.toLowerCase();
                            
                
                if(entryName.includes(filterValue.toLowerCase()) || entryDesc.includes(filterValue.toLowerCase())) {
                    return value;
                } else {
                    return null;
                }
                
            } else {
                return entry;
            }
        }
    }
}