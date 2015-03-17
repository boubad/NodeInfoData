// descriptionitem.js
//
import {
    BaseItem
}
from './baseitem';
//
export class DescriptionItem extends BaseItem {
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.remarks !== undefined) {
                this.remarks = oMap.remarks;
            }
            if (oMap.avatarid !== undefined) {
                this.avatarid = oMap.avatarid;
            }
        } // oMap
    } // constructor
    get avatarid() {
        return (this._avatarid !== undefined) ? this._avatarid : null;
    } // id
    set avatarid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._avatarid = s;
        } else {
            this._avatarid = null;
        }
    } // id
    get has_avatarid() {
        return (this.avatarid !== null);
    }
    get remarks() {
        return (this._desc !== undefined) ? this._desc : null;
    } // description
    set remarks(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._desc = s.trim();
        } else {
            this._desc = null;
        }
    } // description
    get has_remarks() {
        return (this.remarks !== null);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_remarks) {
            oMap.remarks = this.remarks;
        }
        if (this.has_avatarid) {
            oMap.avatarid = this.avatarid;
        }
    } // toInsertMap
} // class DescriptionItem