//baseevent.js

import {
    DepartementItem
}
from './departementitem';
//
export class BaseEvent extends DepartementItem {
    //
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.uniteid !== undefined) {
                this.uniteid = oMap.uniteid;
            }
            if (oMap.date !== undefined) {
                this.date = oMap.date;
            }
            if (oMap.genre !== undefined) {
                this.genre = oMap.genre;
            }
            if (oMap.attributes !== undefined) {
                this.attributes = oMap.attributes;
            }
            if (oMap.anneeid !== undefined) {
                this.anneeid = oMap.anneeid;
            }
            if (oMap.semestreid !== undefined) {
                this.semestreid = oMap.semestreid;
            }
            if (oMap.matiereid !== undefined) {
                this.matiereid = oMap.matiereid;
            }
            if (oMap.groupeid !== undefined) {
                this.groupeid = oMap.groupeid;
            }
        }
    }
    get attributes() {
        return (this._att !== undefined) ? this._att : null;
    }
    set attributes(s) {
        this._att = (s !== undefined) ? s : null;
    }
    get has_attributes() {
        return (this.attributes !== null);
    }
    //
    get genre() {
        return (this._genre !== undefined) ? this._genre : null;
    }
    set genre(s) {
        this._genre = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_genre() {
        return (this.genre !== null);
    }
    get uniteid() {
        return (this._uniteid !== undefined) ? this._uniteid : null;
    }
    set uniteid(s) {
        this._uniteid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_uniteid() {
        return (this.uniteid !== null);
    }
    //
    get matiereid() {
        return (this._matiereid !== undefined) ? this._matiereid : null;
    }
    set matiereid(s) {
        this._matiereid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_matiereid() {
        return (this.matiereid !== null);
    }
    get anneeid() {
        return (this._anneeid !== undefined) ? this._anneeid : null;
    }
    set anneeid(s) {
        this._anneeid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_anneeid() {
        return (this.anneeid !== null);
    }
    get semestreid() {
        return (this._semestreid !== undefined) ? this._semestreid : null;
    }
    set semestreid(s) {
        this._semestreid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_semestreid() {
        return (this.semestreid !== null);
    }
    get groupeid() {
        return (this._groupeid !== undefined) ? this._groupeid : null;
    }
    set groupeid(s) {
        this._groupeid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_groupeid() {
        return (this.groupeid !== null);
    }
    get date() {
        return (this._date !== undefined) ? this._date : null;
    }
    set date(d) {
        this._date = (d !== undefined) ? d : null;
    }
    get has_date() {
        return (this.date !== null);
    }
    get is_storeable() {
        return (
        this.has_genre && this.has_groupeid && this.has_semestreid && this.has_anneeid && this.has_departementid && this.has_matiereid && this.has_date);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_uniteid) {
            oMap.uniteid = this.uniteid;
        }
        if (this.has_date) {
            oMap.date = this.date;
        }
        if (this.has_genre) {
            oMap.genre = this.genre;
        }
        if (this.has_attributes) {
            oMap.attributes = this.attributes;
        }
        if (this.has_anneeid) {
            oMap.anneeid = this.anneeid;
        }
        if (this.has_semestreid) {
            oMap.semestreid = this.semestreid;
        }
        if (this.has_groupeid) {
            oMap.groupeid = this.groupeid;
        }
        if (this.has_matiereid) {
            oMap.matiereid = this.matiereid;
        }
    } // to_insert_map
} // class EtudEvent