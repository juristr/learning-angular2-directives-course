import {Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';

import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    template: `
        <div class="tabs-bar">
            <a href="javascript:;" class="tab" [class.is-active]="tab.isActive" *ngFor="#tab of tabs" (click)="selectTab(tab)">
                {{ tab.title }}
            </a>
        </div>

        <ng-content></ng-content>
    `,
    styles: [
        `
        .tabs-bar {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-align-content: space-between;
            -ms-flex-line-pack: justify;
            align-content: space-between;
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start;
            height: 48px;
            padding: 0;
            margin: 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .tab {
            margin: 0;
            border: none;
            padding: 0 24px;
            float: left;
            position: relative;
            display: block;
            color: red;
            text-decoration: none;
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            text-transform: uppercase;
            color: rgba(0,0,0,.54);
            overflow: hidden;
        }


        .tab.is-active:after {
            height: 2px;
            width: 100%;
            display: block;
            content: " ";
            bottom: 0;
            left: 0;
            position: absolute;
            background: #3f51b5;
            -webkit-animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;
            animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards;
            -webkit-transition: all 1s cubic-bezier(.4,0,1,1);
            transition: all 1s cubic-bezier(.4,0,1,1);
        }
        `
    ]
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

    constructor() { }

    ngAfterContentInit() {
        if (this.tabs.length > 0) {
            if (!_hasActiveTab(this.tabs)) {
                this.selectTab(this.tabs.first);
            }
        }

        function _hasActiveTab(tabs: QueryList<TabComponent>) {
            // check if some tab has set active via inputs
            let activeTabs = tabs.filter((tab) => tab.isActive);
            return Boolean(activeTabs.length);
        }
    }

    selectTab(tab: TabComponent) {

        _deactivateAllTabs(this.tabs.toArray());
        tab.isActive = true;

        function _deactivateAllTabs(tabs: TabComponent[]) {
            tabs.forEach((tab) => tab.isActive = false);
        }
    }

}