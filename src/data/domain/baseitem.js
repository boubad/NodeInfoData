// baseitem.js
//
export class BaseItem {
    constructor(oMap) {
            if ((oMap != undefined) && (oMap != null)) {
                if (oMap['_id'] != undefined) {
                    this.id = oMap['_id'];
                }
                if (oMap['_rev'] != undefined) {
                    this.rev = oMap['_rev'];
                }
                if (oMap['type'] != undefined){
                    this.type = oMap['type'];
                }
            } // oMap
        } // constructor
        //
    get id() {
            return (this._id != undefined) ? this._id : null;
        } // id
    set id(s) {
            if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
                this._id = s.trim();
            } else {
                this._id = null;
            }
        } // id
    get has_id() {
        return (this.id != null);
    }
    get rev() {
            return (this._rev != undefined) ? this._rev : null;
        } // id
    set rev(s) {
            if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
                this._rev = s.trim();
            } else {
                this._rev = null;
            }
        } // id
    get has_rev() {
            return (this.rev != null);
        }
        //
    get is_storeable() {
        return false;
    }
    get collection_name() {
        return null;
    }
    get type(){
        return (this._type != undefined) ? this._type : null;
    }
    set type(s){
        this._type = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_type(){
        return (this.type != null);
    }
    to_insert_map(oMap) {
        if ((oMap != null) && (oMap != null)){
            if (this.has_type){
                oMap['type'] = this.type;
            }
        }
    } // toInsertMap
    to_fetch_map(oMap: any): void {
            if ((oMap != undefined) && (oMap != null)) {
                this.to_insert_map(oMap);
                if (this.has_id) {
                    oMap['_id'] = this.id;
                }
                if (this.has_rev) {
                    oMap['_rev'] = this.rev;
                }
            }
        } // to_fetch_map
    toString() {
            let oMap = {};
            this.to_fetch_map(oMap);
            return JSON.stringify(oMap);
        } // toString
} // class BaseItem