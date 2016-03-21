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

export default PeopleListCtrl;