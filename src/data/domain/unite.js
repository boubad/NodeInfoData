// unite.js
import {DepartementChildItem} from './departementchild';
//
export class Unite extends DepartementChildItem {
    constructor(oMap){
        super(oMap);
        this.type = 'unite';
    }
    get collection_name(){
        return 'unites';
    }
    get type(){
        return 'unite';
    }
}// class DepartementChildItem