
angular.module('peopleApp.peopleDetail')
    .controller('PeopleDetailCtrl', PeopleDetailCtrl);

function PeopleDetailCtrl($scope, $routeParams, people) {
    $scope.person = people.byId($routeParams.personId);
};

PeopleDetailCtrl.$inject = ['$scope', '$routeParams', 'people'];