angular.module('peopleApp.peopleList')
    .controller('PeopleListCtrl', PeopleListCtrl);


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