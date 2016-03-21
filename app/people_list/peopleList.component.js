angular.module('peopleApp.peopleList')
    .component('ppPeopleList', {
        templateUrl: 'app/people_list/people-list.html',
        controller: PeopleListCtrl,
        controllerAs: 'vm'
    });

function PeopleListCtrl(people) {
    var vm = this;
    vm.people = [];

    activate();

    ////////////////////////

    function activate() {
        vm.people = people.query();
    }

}

PeopleListCtrl.$inject = ['people'];