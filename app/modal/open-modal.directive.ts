import { Directive, Input, Output, HostListener, EventEmitter } from 'angular2/core';

import { ConfigModalComponent  } from './modal.component';

@Directive({
    selector: '[open-with]'
})
export class OpenWithDirective {
    @Input('open-with') modalInstance: ConfigModalComponent;
    @Output() confirm: EventEmitter<any> = new EventEmitter();

    @HostListener('click')
    clicked() {
        this.modalInstance.open(this.emitConfirm.bind(this));
    }

    emitConfirm() {
        this.confirm.emit(null);
    }

}