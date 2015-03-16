// enseignant.js
import {DepartementPerson} from './departementperson';
//
export class Enseignant extends DepartementPerson {
    constructor(oMap){
        super(oMap);
    }// constructor
    get type(){
        return 'enseignant';
    }
    get collection_name(){
        return 'enseignants';
    }
}// class Enseignant
