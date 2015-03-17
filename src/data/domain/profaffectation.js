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
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.enseignantid !== undefined) {
                this.enseignantid = oMap.enseignantid;
            }
            if (oMap.matiereid !== undefined) {
                this.matiereid = oMap.matiereid;
            }
        }
    }
    get type() {
        return 'profaffectation';
    }
    //
    get enseignantid() {
        return (this._profid !== undefined) ? this._profid : null;
    }
    set enseignantid(s) {
        this._profid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_enseignantid() {
        return (this.enseignantid !== null);
    }
    get matiereid() {
        return (this._matiereid !== undefined) ? this._matiereid : null;
    }
    set matiereid(s) {
        this._matiereid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_matiereid() {
        return (this.matiereid !== null);
    }

    get is_storeable() {
        return (super.is_storeable && this.has_enseignantid && this.has_matiereid);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_enseignantid) {
            oMap.enseignantid = this.enseignantid;
        }
        if (this.has_matiereid) {
            oMap.matiereid = this.matiereid;
        }
    } // to_insert_map
    get collection_name() {
        return 'profaffectations';
    }
} // class ProfAffectation