// affectationbase.ts
//
import { DescriptionItem } from './descriptionitem';
//
export class AffectationBaseItem extends DescriptionItem {
    //
    constructor(oMap) {
            super(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.departementid !== undefined) {
                    this.departementid = oMap.departementid;
                }
                if (oMap.anneeid !== undefined) {
                    this.anneeid = oMap.anneeid;
                }
                if (oMap.semestreid !== undefined) {
                    this.semestreid = oMap.semestreid;
                }
                if (oMap.groupeid !== undefined) {
                    this.groupeid = oMap.groupeid;
                }
                if (oMap.startDate !== undefined) {
                    this.startDate = oMap.startDate;
                }
                if (oMap.endDate !== undefined) {
                    this.endDate = oMap.endDate;
                }
            }
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
    get anneeid() {
        return (this._anneeid !== undefined) ? this._anneeid : null;
    }
    set anneeid(s) {
        this._anneeid = ((s !== undefined) && (s !== null) &&
        (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_anneeid() {
        return (this.anneeid !== null);
    }
    get semestreid() {
        return (this._semestreid !== undefined) ? this._semestreid : null;
    }
    set semestreid(s) {
        this._semestreid = ((s !== undefined) && (s !== null) &&
        (s.trim().length > 0)) ? s.trim() : null;
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
    get startDate() {
        return (this._start !== undefined) ? this._start : null;
    }
    set startDate(d) {
        this._start = (d !== undefined) ? d : null;
    }
    get has_startDate() {
        return (this.startDate !== null);
    }
    get endDate() {
        return (this._end !== undefined) ? this._end : null;
    }
    set endDate(d) {
        this._end = (d !== undefined) ? d : null;
    }
    get has_endDate() {
        return (this.endDate !== null);
    }
    get is_storeable() {
        if (this.has_startDate && this.has_endDate) {
            if (this.startDate.getDate() > this.endDate.getDate()) {
                return false;
            }
        }
        return (this.has_departementid &&
            this.has_semestreid && this.has_groupeid && this.has_anneeid);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_departementid) {
                    oMap.departementid = this.departementid;
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
                if (this.has_startDate) {
                    oMap.startDate = this.startDate;
                }
                if (this.has_endDate) {
                    oMap.endDate = this.endDate;
                }
            }
        } // to_insert_map
} // class AffectationBaseItem