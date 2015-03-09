// groupe.js
import {DepartementChildItem} from './departementchild';
//
export class Groupe extends DepartementChildItem {
    constructor(oMap){
        super(oMap);
        this.type = 'groupe';
    }
    get collection_name(){
        return 'groupes';
    }
}// class Groupe
