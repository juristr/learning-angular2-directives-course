angular.module('peopleApp.peopleDetail')
    .directive('ppPeopleDetail', peopleDetailComponent);

function peopleDetailComponent() {
    return {
        restrict: 'E',
        templateUrl: 'app/people_detail/people-detail.html',
        controller: PeopleDetailCtrl,
        controllerAs: 'vm'
    }
}


function PeopleDetailCtrl($routeParams, people) {
    var vm = this;

    activate();

    ////////////////////////


    function activate() {
        vm.person = people.byId($routeParams.personId);
    }

};

PeopleDetailCtrl.$inject = ['$routeParams', 'people'];