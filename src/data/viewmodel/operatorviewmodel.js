//operatorviewmodel.js
//
import {
    Operator
}
from '../domain/operator';
import {
    Person
}
from './data/domain/person';
import {
    PersonViewModel
}
from './personviewmodel';

export class OperatorViewModel extends PersonViewModel {

    constructor(dataService) {
            super(dataService, new Operator(), new Person);
        } // constructor
} // class OperatorViewModel
