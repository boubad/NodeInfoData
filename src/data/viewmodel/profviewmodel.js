//profviewmodel.js
//
import {
    Enseignant
}
from '../domain/enseignant';
import {
    ProfPerson
}
from './data/domain/profperson';
import {
    PersonViewModel
}
from './personviewmodel';

export class ProfViewModel extends PersonViewModel {

    constructor(dataService) {
            super(dataService, new Enseignant(), new ProfPerson);
        } // constructor
} // class Enseignants
