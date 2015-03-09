// siglenameitem.js
import {
    DescriptionItem
}
from './descriptionitem';
//
export class SigleNameItem extends DescriptionItem {
    constructor(oMap) {
            super(oMap);
            if ((oMap != undefined) && (oMap != null)) {
                if (oMap['sigle'] != undefined) {
                    this.sigle = oMap['sigle'];
                }
                if (oMap['name'] != undefined) {
                    this.name = oMap['name'];
                }
            } // oMap
        } // constructor
    get sigle() {
        return (this._sigle != undefined) ? this._sigle : null;
    }
    set sigle(s) {
        if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
            this._sigle = s.trim().toLowerCase();
        } else {
            this._sigle = null;
        }
    }
    get has_sigle() {
        return (this.sigle != null);
    }
    get name() {
        return (this._name != undefined) ? this._name : null;
    }
    set name(s) {
        if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
            this._name = s.trim();
        } else {
            this._name = null;
        }
    }
    get has_name() {
        return (this.name != null);
    }
    get is_storeable() {
        return this.has_sigle;
    }
    to_insert_map(oMap: any): void {
            super.to_insert_map(oMap);
            if ((oMap != undefined) && (oMap != null)) {
                if (this.has_sigle) {
                    oMap['sigle'] = this.sigle;
                }
                if (this.has_name) {
                    oMap['name'] = this.name;
                }
            }
        } // toInsertMap
} // class DescriptionItem