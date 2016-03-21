

var peopleControllers = angular.module('peopleApp.controllers', [
    'peopleApp.services'
]);

peopleControllers.controller('PeopleListCtrl', ['$scope', 'people', function($scope, people) {
    $scope.people = people.query();
}]);

peopleControllers.controller('PeopleDetailCtrl', ['$scope', '$routeParams', 'people', function($scope, $routeParams, people){
    $scope.person = people.byId($routeParams.personId);
}]);