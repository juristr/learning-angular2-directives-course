
import coreModule from '../core/core.module';
import PeopleDetailCtrl from './peopleDetail.component';

export default angular
    .module('peopleApp.peopleDetail', [
        coreModule.name
    ])
    .component('ppPeopleDetail', {
        templateUrl: 'app/people_detail/people-detail.html',
        controller: PeopleDetailCtrl,
        controllerAs: 'vm'
    });