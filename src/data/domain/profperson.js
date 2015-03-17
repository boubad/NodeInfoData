// profperson.js
import {
    Person
}
from './person';
//
export class ProfPerson extends Person {
    constructor(oMap) {
        super(oMap);
    } // constructor
    get type() {
        return 'profperson';
    }
} // class ProfPerson
