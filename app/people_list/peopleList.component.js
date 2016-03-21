angular.module('peopleApp.peopleList')
    .directive('ppPeopleList', peopleListComponent);

function peopleListComponent() {
    return {
        restrict: 'E',
        templateUrl: 'app/people_list/people-list.html',
        controller: PeopleListCtrl,
        controllerAs: 'vm'
    }
}

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