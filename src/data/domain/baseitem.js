// baseitem.js
//
export class BaseItem {
    constructor(oMap) {
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap._id !== undefined) {
                this.id = oMap._id;
            }
            if (oMap._rev !== undefined) {
                this.rev = oMap._rev;
            }
        } // oMap
    } // constructor
    //
    get id() {
        return (this._id !== undefined) ? this._id : null;
    } // id
    set id(s) {
        if ((s !== undefined) && (s !== null) &&
        (s.toString().trim().length > 0)) {
            this._id = s;
        } else {
            this._id = null;
        }
    } // id
    get has_id() {
        return (this.id !== null);
    }
    get rev() {
        return (this._rev !== undefined) ? this._rev : null;
    } // id
    set rev(s) {
        if ((s !== undefined) && (s !== null)
        && (s.toString().trim().length > 0)) {
            this._rev = s;
        } else {
            this._rev = null;
        }
    } // id
    get has_rev() {
        return (this.rev !== null);
    }
    //
    get is_storeable() {
        return this.has_type && this.has_collection_name;
    }
    get collection_name() {
        return null;
    }
    get has_collection_name() {
        return (this.collection_name !== null);
    }
    get type() {
        return null;
    }
    get has_type() {
        return (this.type !== null);
    }
    to_insert_map(oMap) {
        if (this.has_type) {
            oMap.type = this.type;
        }
    } // toInsertMap
    to_fetch_map(oMap) {
        this.to_insert_map(oMap);
        if (this.has_id) {
            oMap._id = this.id;
        }
        if (this.has_rev) {
            oMap._rev = this.rev;
        }
    } // to_fetch_map
    toString() {
        let oMap = {};
        this.to_fetch_map(oMap);
        return JSON.stringify(oMap);
    } // toString
} // class BaseItem