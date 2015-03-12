// intervalitem.js
import { DepartementChildItem } from './departementchild';
//
export class IntervalItem extends DepartementChildItem {
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.startDate !== undefined) {
                this.startDate = oMap.startDate;
            }
            if (oMap.endDate !== undefined) {
                this.endDate = oMap.endDate;
            }
        }
    }
    get startDate() {
        return (this._start !== undefined) ? this._start : null;
    }
    set startDate(d) {
        this._start = (d !== undefined) ? d : null;
    }
    get has_startDate() {
        return (this.startDate !== null);
    }
    get endDate() {
        return (this._end !== undefined) ? this._end : null;
    }
    set endDate(d) {
        this._end = (d !== undefined) ? d : null;
    }
    get has_endDate() {
        return (this.endDate !== null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_startDate && this.has_endDate);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_startDate) {
                    oMap.startDate = this.startDate;
                }
                if (this.has_endDate) {
                    oMap.endDate = this.endDate;
                }
            }
        } // to_insert_map
} // class IntervalItem
