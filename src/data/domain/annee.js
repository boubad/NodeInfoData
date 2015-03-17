// annee.js
import {
    IntervalItem
}
from './intervalitem';
//
export class Annee extends IntervalItem {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'annee';
    }
    get collection_name() {
        return 'annees';
    }
} // class Annee