'use strict';

angular.module('peopleApp', [
    'ngRoute',
    'peopleApp.core',
    'peopleApp.peopleList',
    'peopleApp.peopleDetail'
  ]).config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/people', {
          template: '<pp-people-list></pp-people-list>'
        }).
        when('/people/:personId', {
          template: '<pp-people-detail></pp-people-detail>'
        }).
        otherwise({
          redirectTo: '/people'
        });
    }]);