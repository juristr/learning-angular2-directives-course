import {Component, Output, EventEmitter} from 'angular2/core';

export interface SensorFilter {
    fullText: string,
    category: string
}

@Component({
    selector: 'sensor-filter',
    moduleId: module.id,
    templateUrl: 'sensor-filter.html'
})
export class SensorFilterComponent {
    public filter: SensorFilter = { fullText: null, category: null };
    private categories: string[];
    
    // change event
    @Output() filterChange: EventEmitter<SensorFilter> = new EventEmitter<SensorFilter>();

    constructor() {
        // fill with some static predefined categories
        this.categories = [
            'temperature',
            'humidity',
            'switch'
        ];       
    }
    
    categoryChanged(value) {
        this.filter.category = value;
        this.filterChange.emit(this.filter);
    }
    
    fulltextFilterChanged(value) {
        this.filter.fullText = value;
        this.filterChange.emit(this.filter);
    }
}