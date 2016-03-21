import { Component, Inject } from 'angular2/core';

import upgradeAdapter from '../core/upgradeAdapter';

upgradeAdapter.upgradeNg1Provider('$routeParams');
upgradeAdapter.upgradeNg1Provider('people');

@Component({
    selector: 'pp-people-detail',
    templateUrl: 'app/people_detail/people-detail.html'
})
export class PeopleDetailComponent {
    person;

    constructor(@Inject('$routeParams') $routeParams, @Inject('people') people) {
        this.person = people.byId($routeParams.personId);
    }
}