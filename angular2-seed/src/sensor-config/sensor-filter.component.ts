import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'sensor-filter',
    templateUrl: './sensor-config/sensor-filter.html'
})
export class SensorFilterComponent {
    public selectedCategory: string;
    private categories: string[];

    // change event
    @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        // fill with some static predefined categories
        this.categories = [
            'temperature',
            'humidity',
            'switch'
        ];
    }

    categoryChanged(value) {
        this.selectedCategory = value;
        this.filterChange.emit(this.selectedCategory);
    }

}