
var services = angular.module('peopleApp.services', []);

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

services.factory('people', function() {
   return {
       query: function() {
           return people;
       },
       byId: function(personId) {
           
           for(var i=0; i<people.length; i++) {
               if(people[i].id == personId) {
                   return people[i]
               }
           }
           
           return null;
       }
   }
});