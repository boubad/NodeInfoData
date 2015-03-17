// personinfo.js
import { BaseItem } from './baseitem';
//
export class PersonInfo extends BaseItem {
    constructor(oMap) {
            super(oMap);
        this.type = 'personinfo';
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.personid !== undefined) {
                    this.personid = oMap.personid;
                }
            } // oMap
        } // constructor
    get personid() {
        return (this._personid !== undefined) ? this._personid : null;
    }
    set personid(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._personid = s.trim();
        } else {
            this._personid = null;
        }
    }
    get has_personid() {
        return (this.personid !== null);
    }
    get is_storeable() {
            return true;
        }
        //
    get collection_name() {
        return 'personinfos';
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_personid) {
                    oMap.personid = this.personid;
                }
            } // oMap
        } // to_insert_map
} // class Personinfo
