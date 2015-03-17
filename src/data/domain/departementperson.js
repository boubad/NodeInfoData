//departementperson.js

import {
    DepartementItem
}
from './departementitem';
//
export class DepartementPerson extends DepartementItem {
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.personid !== undefined) {
                this.personid = oMap.personid;
            }
            if (oMap.fullname !== undefined){
              this.fullname = oMap.fullname;
            }
        } // oMap
    } // constructor
    get fullname(){
      return (this._fullname !== undefined) ? this._fullname : null;
    }
    set fullname(s){
      this._fullname = s;
    }
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
        return (super.is_storeable && this.has_personid && this.has_departementid);
    }
    //
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_personid) {
            oMap.personid = this.personid;
        }
        oMap.fullname = this.fullname;
    } // to_insert_map
    to_fetch_map(oMap){
      super.to_fetch_map(oMap);
      oMap.fullname = null;
    }
} // class Etudiant
