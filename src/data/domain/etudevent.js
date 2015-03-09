// etudevent.js
import { DescriptionItem } from './descriptionitem';
//
export class EtudEvent extends DescriptionItem {
    //
    constructor(oMap) {
            super(oMap);
        this.type = 'etudevent';
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.departementid !== undefined) {
                    this.departementid = oMap.departementid;
                }
                if (oMap.uniteid !== undefined) {
                    this.uniteid = oMap.uniteid;
                }
                if (oMap.groupeeventid !== undefined) {
                    this.groupeeventid = oMap.groupeeventid;
                }
                if (oMap.etudaffectationid !== undefined) {
                    this.etudaffectationid = oMap.etudaffectationid;
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
                if (oMap.note !== undefined) {
                    this.note = oMap.note;
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
                if (oMap.enseignantid !== undefined) {
                    this.enseignantid = oMap.enseignantid;
                }
                if (oMap.etudiantid !== undefined) {
                    this.etudiantid = oMap.etudiantid;
                }
            }
        }
        //
    collection_name() {
            return 'etudevents';
        }
        //
    get attributes() {
        return (this._att !== undefined) ? this._att : null;
    }
    set attributes(s) {
        this._att = (s !== undefined)  ? s : null;
    }
    get has_attributes() {
        return (this.attributes !== null);
    }
    get note() {
        return (this._note !== undefined) ? this._note : null;
    }
    set note(s) {
        this._note = ((s !== undefined) && (s !== null)) ? s : null;
    }
    get has_note() {
            return (this.note !== null);
        }
        //
    get genre() {
        return (this._genre !== undefined) ? this._genre : null;
    }
    set genre(s) {
        this._genre = ((s !== undefined) && (s !== null) 
        && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_genre() {
        return (this.genre !== null);
    }
    get etudaffectationid() {
        return (this._etudaffectationid !== undefined) ? 
        this._etudaffectationid : null;
    }
    set etudaffectationid(s) {
        this._etudaffectationid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_etudaffectationid() {
            return (this.etudaffectationid !== null);
        }
        //
    get groupeeventid() {
        return (this._groupeeventid !== undefined) ? this._groupeeventid : null;
    }
    set groupeeventid(s) {
        this._groupeeventid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_groupeeventid() {
            return (this.groupeeventid !== null);
        }
        //
    get departementid() {
        return (this._departementid !== undefined) ? this._departementid : null;
    }
    set departementid(s) {
        this._departementid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_departementid() {
            return (this.departementid !== null);
        }
        //
    get uniteid() {
        return (this._uniteid !== undefined) ? this._uniteid : null;
    }
    set uniteid(s) {
        this._uniteid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_uniteid() {
            return (this.uniteid !== null);
        }
        //
    get enseignantid() {
        return (this._profid !== undefined) ? this._profid : null;
    }
    set enseignantid(s) {
        this._profid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_enseignantid() {
        return (this.enseignantid !== null);
    }
    get etudiantid() {
        return (this._etudid !== undefined) ? this._etudid : null;
    }
    set etudiantid(s) {
        this._etudid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_etudiantid() {
        return (this.etudiantid !== null);
    }
    get matiereid() {
        return (this._matiereid !== undefined) ? this._matiereid : null;
    }
    set matiereid(s) {
        this._matiereid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_matiereid() {
        return (this.matiereid !== null);
    }
    get anneeid() {
        return (this._anneeid !== undefined) ? this._anneeid : null;
    }
    set anneeid(s) {
        this._anneeid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_anneeid() {
        return (this.anneeid !== null);
    }
    get semestreid() {
        return (this._semestreid !== undefined) ? this._semestreid : null;
    }
    set semestreid(s) {
        this._semestreid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_semestreid() {
        return (this.semestreid !== null);
    }
    get groupeid() {
        return (this._groupeid !== undefined) ? this._groupeid : null;
    }
    set groupeid(s) {
        this._groupeid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
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
        return (this.has_etudaffectationid && this.has_groupeeventid &&
            this.has_genre && this.has_etudiantid && this.has_groupeid &&
            this.has_semestreid && this.has_anneeid && this.has_departementid &&
            this.has_matiereid);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_departementid) {
                    oMap.departementid = this.departementid;
                }
                if (this.has_uniteid) {
                    oMap.uniteid = this.uniteid;
                }
                if (this.has_groupeeventid) {
                    oMap.groupeeventid = this.groupeeventid;
                }
                if (this.has_etudaffectationid) {
                    oMap.etudaffectationid = this.etudaffectationid;
                }
                if (this.has_date) {
                    oMap.date = this.date;
                }
                if (this.has_genre) {
                    oMap.genre = this.genre;
                }
                if (this.has_note) {
                    oMap.note = this.note;
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
                if (this.has_enseignantid) {
                    oMap.enseignantid = this.enseignantid;
                }
                if (this.has_etudiantid) {
                    oMap.etudiantid = this.etudiantid;
                }
            }
        } // to_insert_map
} // class EtudEvent