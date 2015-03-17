// departement.js
import {
    SigleNameItem
}
from './siglenameitem';
//
export class Departement extends SigleNameItem {
    constructor(oMap) {
        super(oMap);
    } // constructor
    get collection_name() {
        return 'departements';
    }
    get type() {
        return 'departement';
    }
    get is_storeable() {
        return this.has_sigle;
    }
} // class Departement