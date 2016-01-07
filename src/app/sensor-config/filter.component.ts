import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'filter',
    moduleId: module.id,
    templateUrl: 'filter.html'
})

export class FilterComponent {
    public filterValue: string;
    
    // change event
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }
    
    onFilter(value) {
        this.filterValue = value;
        this.change.emit(value);
    }
}