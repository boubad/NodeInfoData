// descriptionitem.js
import { BaseItem } from './baseitem';
//
export class DescriptionItem extends BaseItem {
    constructor(oMap) {
            super(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.description !== undefined) {
                    this.description = oMap.description;
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
            if ((s !== undefined) && (s !== null) && (s.trim().length > 0)){
                this._avatarid = s.trim();
            } else {
                this._avatarid = null;
            }
        } // id
    get has_avatarid() {
        return (this.avatarid !== null);
    }
    get description() {
            return (this._desc !== undefined) ? this._desc : null;
        } // description
    set description(s) {
            if ((s !== undefined) && (s !== null) && (s.trim().length > 0)){
                this._desc = s.trim();
            } else {
                this._desc = null;
            }
        } // description
    get has_description() {
        return (this.description !== null);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_description) {
                    oMap.description = this.description;
                }
                if (this.has_avatarid) {
                    oMap.avatarid = this.avatarid;
                }
            }
        } // toInsertMap
} // class DescriptionItem