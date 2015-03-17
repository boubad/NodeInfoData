// etudiant.js

import {
    DepartementPerson
}
from './departementperson';
//
export class Etudiant extends DepartementPerson {
    constructor(oMap) {
        super(oMap);
    } // constructor
    get collection_name() {
        return 'etudiants';
    }
    get type() {
        return 'etudiant'
    }
} // class Etudiant