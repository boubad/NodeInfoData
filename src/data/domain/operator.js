// operator.js
import {
    DepartementPerson
}
from './departementperson';
//
export class Operator extends DepartementPerson {
    constructor(oMap) {
        super(oMap);
    } // constructor
    get type() {
        return 'operator';
    }
    get collection_name() {
        return 'operators';
    }
} // class Operators