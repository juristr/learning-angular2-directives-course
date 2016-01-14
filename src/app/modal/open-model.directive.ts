import { Directive, Input, HostListener } from 'angular2/core';

import { ConfigModalComponent  } from './modal.component';

@Directive({
    selector: '[open-with]'
})
export class OpenWithDirective {
    @Input('open-with') modalInstance: ConfigModalComponent;
    
    @HostListener('click')
    clicked() {
        console.log('clicked on the element with modal', this.modalInstance);
    }
    
}