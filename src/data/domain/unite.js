// unite.js
import {
    DepartementChildItem
}
from './departementchild';
//
export class Unite extends DepartementChildItem {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'unite';
    }
    get collection_name() {
        return 'unites';
    }
} // class DepartementChildItem