import peopleService from './people.service';

export default angular
    .module('peopleApp.core',[])
    .factory('people', peopleService);