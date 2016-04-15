import {
    describe,
    expect,
    it,
    injectAsync,
    TestComponentBuilder,
    inject,
    fakeAsync,
    ComponentFixture,
    tick
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import { ModalComponent } from './modal.component';

export function main() {

    describe('Modal component', () => {


        it('should project title and content area', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TestComponent).then((fixture) => {
                let element = fixture.debugElement.children[0].nativeElement;

                expect(DOM.querySelectorAll(element, 'h1')[0].textContent).toEqual('Modal title');
                expect(DOM.querySelectorAll(element, 'div.body')[0].textContent).toEqual('Body content');
            });
        }));

        it('should set the isOpen flag when calling .open()', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TestComponent).then((fixture) => {
                let instance = fixture.debugElement.children[0].componentInstance;

                instance.open();

                expect(instance.isOpen).toBeTruthy();
            });
        }));

        it('should close when clicking the ok button', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(TestComponent).then((fixture) => {
                let instance = fixture.debugElement.children[0].componentInstance;
                let el = fixture.debugElement.children[0].nativeElement;

                var cb = function(){};

                // open the dialog
                instance.open(cb);
                expect(instance.isOpen).toBeTruthy();

                fixture.detectChanges();
                expect(DOM.querySelectorAll(el, '.md-backdrop')[0].hidden).toBeFalsy();

                // close it again by clicking the button
                DOM.querySelectorAll(el, 'button')[0].click();
                fixture.detectChanges();
                expect(instance.isOpen).toBeFalsy();
                expect(DOM.querySelectorAll(el, '.md-backdrop')[0].hidden).toBeTruthy();
            });
        }));


        // using the fakeAsync API
        // it('should close when clicking the ok button', inject([TestComponentBuilder], fakeAsync((tcb: TestComponentBuilder) => {
        //     var fixture: ComponentFixture;

        //     tcb.createAsync(TestComponent).then((rootTC) => {
        //             fixture = rootTC;
        //         });

        //     tick();

        //     let instance = fixture.debugElement.children[0].componentInstance;
        //     let el = fixture.debugElement.nativeElement;

        //     var cb = function(){};

        //     // open the dialog
        //     instance.open(cb);
        //     expect(instance.isOpen).toBeTruthy();

        //     // close it again by clicking the button
        //     DOM.querySelectorAll(el, 'button')[0].click();
        //     tick();

        //     fixture.detectChanges();

        //     expect(instance.isOpen).toBeFalsy();
        // })));

    });
}

@Component({
    selector: 'test-cmp',
    directives: [ModalComponent],
    template: `
        <modal>
            <h1 title>Modal title</h1>
            <div class="body" content>Body content</div>
        </modal>
    `
})
class TestComponent { }
