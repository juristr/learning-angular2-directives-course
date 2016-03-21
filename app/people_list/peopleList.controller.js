
angular.module('peopleApp.peopleList')
    .controller('PeopleListCtrl', PeopleListCtrl);


function PeopleListCtrl($scope, people) {
    $scope.people = people.query();
}

PeopleListCtrl.$inject = ['$scope', 'people'];