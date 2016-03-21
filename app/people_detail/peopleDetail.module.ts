
import coreModule from '../core/core.module';
// import PeopleDetailCtrl from './peopleDetail.component';
import { PeopleDetailComponent } from './peopleDetail.component';

import upgradeAdapter from '../core/upgradeAdapter';

export default angular
    .module('peopleApp.peopleDetail', [
        coreModule.name
    ])
    .directive('ppPeopleDetail', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(PeopleDetailComponent));