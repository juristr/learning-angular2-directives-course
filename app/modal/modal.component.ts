import {Component, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensors.service';

@Component({
    selector: 'modal',
    template: `
        <div class="md-dialog mdl-color--white mdl-shadow--2dp" [hidden]="!isOpen">
            <div class="md-dialog-content">
                <div class="typo-styles__demo mdl-typography--headline">
                    <ng-content select="[title]"></ng-content>
                </div>
                <div class="md-dialog-content-body">
                    <ng-content select="[content]"></ng-content>
                </div>
            </div>
            <div class="md-dialog-actions">
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="ok()">
                    Ok
                </button>
                <button class="mdl-button mdl-js-button mdl-js-ripple-effect" (click)="cancel()">
                    Cancel
                </button>
            </div>
        </div>
        <div class="md-backdrop" [hidden]="!isOpen"></div>
    `,
    styles: [
        `
        .md-dialog {
            position: fixed;
            top: 150px;
            margin: 0 auto;
            z-index: 51;
        }

        .md-dialog-content {
            min-width: 450px;
            min-height: 100px;
            padding: 24px;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }

        .md-dialog-content > mdl-typography--headline {
            font-weight: 600;
        }

        .md-dialog-content-body {
            padding: 15px 0 5px 0;
        }


        .md-dialog-actions {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-order: 2;
            -ms-flex-order: 2;
            order: 2;
            box-sizing: border-box;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            margin-bottom: 0;
            padding-right: 8px;
            padding-left: 16px;
            min-height: 52px;
            overflow: hidden;
        }

        .md-backdrop {
            background-color: rgba(33,33,33,1.0);
            opacity: .48;
            transition: opacity 450ms;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
        }
        `
    ]
})

export class ModalComponent {
    private isOpen: boolean = false;
    @Output() confirm: EventEmitter<any> = new EventEmitter();

    constructor() { }

    open(sensor: Sensor) {
        this.isOpen = true;
    }

    ok() {
        this.isOpen = false;
        this.confirm.emit();
    }

    cancel() {
        this.isOpen = false;
    }

}