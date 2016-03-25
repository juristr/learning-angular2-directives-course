import {Component, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensors.service';

@Component({
    selector: 'config-modal',
    template: `
        <div class="md-dialog mdl-color--white mdl-shadow--2dp" [hidden]="!isOpen">
            <div class="md-dialog-content">
                <div class="typo-styles__demo mdl-typography--headline">
                    {{ sensorModel.name }}
                </div>
                <div class="md-dialog-content-body">
                    <div class="mdl-card__supporting-text">
                        <form action="#">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{ 'is-dirty': sensorModel.name}">
                                <input class="mdl-textfield__input" type="text" id="name" [(ngModel)]="sensorModel.name"  />
                                <label class="mdl-textfield__label" for="name">Name</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{ 'is-dirty': sensorModel.description}">
                                <textarea class="mdl-textfield__input" [(ngModel)]="sensorModel.description"></textarea>
                                <label class="mdl-textfield__label" for="userpass">Description</label>
                            </div>
                        </form>
                    </div>
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

export class ConfigModalComponent {
    private isOpen: boolean = false;
    private sensorModel: Sensor = { name: '', description: '', type: '' };
    @Output() confirm: EventEmitter<Sensor> = new EventEmitter();

    constructor() { }

    open(sensor: Sensor) {
        this.sensorModel = {
            name: sensor.name,
            description: sensor.description,
            type: sensor.type
        };
        this.isOpen = true;
    }

    ok() {
        this.isOpen = false;
        this.confirm.emit(this.sensorModel);
    }

    cancel() {
        this.isOpen = false;
    }

}