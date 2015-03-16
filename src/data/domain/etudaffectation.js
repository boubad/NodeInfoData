// etudaffectation.js
//
import {
    AffectationBaseItem
}
from './affectationbase';
//
class EtudAffectation extends AffectationBaseItem {
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.etudiantid !== undefined) {
                this.etudiantid = oMap.etudiantid;
            }
        }
    }
    get type() {
        return 'etudaffectation';
    }
    //
    get etudiantid() {
        return (this._etudid !== undefined) ? this._etudid : null;
    }
    set etudiantid(s) {
        this._etudid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_etudiantid() {
        return (this.etudiantid !== null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_etudiantid);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_etudiantid) {
            oMap.etudiantid = this.etudiantid;
        }
    } // to_insert_map
    get collection_name() {
        return 'etudaffectations';
    }
} // class EtudAffectation