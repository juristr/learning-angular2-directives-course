angular.module('peopleApp.peopleDetail')
    .controller('PeopleDetailCtrl', PeopleDetailCtrl);


function PeopleDetailCtrl($routeParams, people) {
    var vm = this;

    activate();

    ////////////////////////


    function activate() {
        vm.person = people.byId($routeParams.personId);
    }

};

PeopleDetailCtrl.$inject = ['$routeParams', 'people'];