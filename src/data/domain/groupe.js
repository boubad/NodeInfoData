// groupe.js
import {DepartementChildItem} from './departementchild';
//
export class Groupe extends DepartementChildItem {
    constructor(oMap){
        super(oMap);
    }
    get type(){
      return 'groupe';
    }
    get collection_name(){
        return 'groupes';
    }
}// class Groupe
