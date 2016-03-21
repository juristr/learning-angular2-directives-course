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
          controller: 'PeopleListCtrl',
          controllerAs: 'vm'
        }).
        when('/people/:personId', {
          templateUrl: 'app/people_detail/people-detail.html',
          controller: 'PeopleDetailCtrl',
          controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/people'
        });
    }]);