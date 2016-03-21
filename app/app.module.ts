import upgradeAdapter from './core/upgradeAdapter';

import coreModule from './core/core.module';
import peopleDetailModule from './people_detail/peopleDetail.module';
import peopleListModule from './people_list/peopleList.module';

angular.module('peopleApp', [
    'ngRoute',
    coreModule.name,
    peopleDetailModule.name,
    peopleListModule.name
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

upgradeAdapter.bootstrap(document.documentElement, ['peopleApp']);