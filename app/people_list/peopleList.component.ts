class PeopleListCtrl {
    people = [];

    ////////////////////////

    constructor(people) {
        this.people = people.query();
    }

}

PeopleListCtrl.$inject = ['people'];

export default PeopleListCtrl;