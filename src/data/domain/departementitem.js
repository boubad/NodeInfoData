//departementitem.js
//
import {
    DescriptionItem
}
from './descriptionitem';
//
export class DepartementItem extends DescriptionItem {
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.departementid !== undefined) {
                this.departementid = oMap.departementid;
            }
        } // oMap
    } // constructor
    get departementid() {
        return (this._departementid !== undefined) ? this._departementid : null;
    }
    set departementid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._departementid = s;
        } else {
            this._departementid = null;
        }
    }
    get has_departementid() {
        return (this.departementid !== null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_departementid);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_departementid) {
            oMap.departementid = this.departementid;
        }
    } // to_insert_map
} // class DepartementChildItem