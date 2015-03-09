// departement.js
import { SigleNameItem } from './siglenameitem';
//
export class Departement extends SigleNameItem {
    constructor(oMap) {
            super(oMap);
        this.type = 'departement';
        } // constructor
    get collection_name() {
        return 'departements';
    }
} // class Departement