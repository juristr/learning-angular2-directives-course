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
          templateUrl: 'app/people_list/people-list.html',
          controller: 'PeopleListCtrl'
        }).
        when('/people/:personId', {
          templateUrl: 'app/people_detail/people-detail.html',
          controller: 'PeopleDetailCtrl'
        }).
        otherwise({
          redirectTo: '/people'
        });
    }]);
