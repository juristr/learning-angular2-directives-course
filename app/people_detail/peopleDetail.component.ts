class PeopleDetailCtrl {
    person;

    constructor($routeParams, people) {
        this.person = people.byId($routeParams.personId);
    }

};

PeopleDetailCtrl.$inject = ['$routeParams', 'people'];

export default PeopleDetailCtrl;