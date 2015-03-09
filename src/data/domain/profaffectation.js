//profaffectation.js
//
import {
    AffectationBaseItem
}
from './affectationbase';
//
class ProfAffectation extends AffectationBaseItem {
    //
    constructor(oMap) {
            super(oMap);
        this.type = 'profaffectation';
            if ((oMap != undefined) && (oMap != null)) {
                if (oMap['enseignantid'] != undefined) {
                    this.enseignantid = oMap['enseignantid'];
                }
                if (oMap['matiereid'] != undefined) {
                    this.matiereid = oMap['matiereid'];
                }
            }
        }
        //
    get enseignantid() {
        return (this._profid != undefined) ? this._profid : null;
    }
    set enseignantid(s) {
        this._profid = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_enseignantid() {
        return (this.enseignantid != null);
    }
    get matiereid() {
        return (this._matiereid != undefined) ? this._matiereid : null;
    }
    set matiereid(s) {
        this._matiereid = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_matiereid() {
        return (this.matiereid != null);
    }

    get is_storeable() {
        return (super.is_storeable && this.has_enseignantid && this.has_matiereid);
    }
    to_insert_map(oMap: any): void {
            super.to_insert_map(oMap);
            if ((oMap != undefined) && (oMap != null)) {
                if (this.has_enseignantid) {
                    oMap['enseignantid'] = this.enseignantid;
                }
                if (this.has_matiereid) {
                    oMap['matiereid'] = this.matiereid;
                }
            }
        } // to_insert_map
    get collection_name() {
        return 'profaffectations';
    }
} // class ProfAffectation