angular.module('peopleApp.core')
    .factory('people', peopleService);

var people = [
       {
            id: 1,
            name: 'Juri',
            age: 30,
            gender: 'male'
       },
       {
            id: 2,
            name: 'Thomas',
            age: 26,
            gender: 'male'
       },
       {
            id: 3,
            name: 'Stefanie',
            age: 30,
            gender: 'female'
       },
       {
            id: 4,
            name: 'Jack',
            age: 41,
            gender: 'male'
       },
   ];

function peopleService() {
   var service = {
       query: query,
       byId: byId
   }
   return service;


   //////////////////////////////

   function query() {
        return people;
   }

   function byId(personId) {

        for(var i=0; i<people.length; i++) {
            if(people[i].id == personId) {
                return people[i]
            }
        }

        return null;
    }
};