import { Directive, Input, Output, HostListener, EventEmitter } from 'angular2/core';

import { ModalComponent  } from './modal.component';

@Directive({
    selector: '[open-with]'
})
export class OpenWithDirective {
    /* tslint:disable */
    @Input('open-with') modalInstance: ModalComponent;
    /* tslint:enable */
    @Output() confirm: EventEmitter<any> = new EventEmitter();

    @HostListener('click')
    clicked() {
        this.modalInstance.open(this.emitConfirm.bind(this));
    }

    emitConfirm() {
        this.confirm.emit(null);
    }

}
