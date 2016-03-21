import coreModule from '../core/core.module';
import PeopleListCtrl from './peopleList.component';

export default angular
    .module('peopleApp.peopleList', [
        coreModule.name
    ])
    .component('ppPeopleList', {
        templateUrl: 'app/people_list/people-list.html',
        controller: PeopleListCtrl,
        controllerAs: 'vm'
    });