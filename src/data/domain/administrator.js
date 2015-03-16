// administrator.js
import {DepartementPerson} from './departementperson';
//
export class Administrator extends DepartementPerson {
    constructor(oMap){
        super(oMap);
    }// constructor
    get type(){
        return 'administrator'
    }
    get collection_name(){
        return 'administrators';
    }
}// class Administrator
