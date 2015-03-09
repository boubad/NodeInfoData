// groupeevent.js
import {DescriptionItem} from './descriptionitem';
//
export class GroupeEvent extends DescriptionItem {
    //
    constructor(oMap){
        super(oMap);
        this.type = 'groupeevent';
        if ((oMap !== undefined) && (oMap !== null)){
            if (oMap.profaffectationid !== undefined){
                this.profaffectationid = oMap.profaffectationid;
            }
            if (oMap.date !== undefined){
                this.date = oMap.date;
            }
            if (oMap.name !== undefined){
                this.name = oMap.name;
            }
            if (oMap.genre !== undefined){
                this.genre = oMap.genre;
            }
            if (oMap.startTime !== undefined){
                this.startTime = oMap.startTime;
            }
            if (oMap.endTime !== undefined){
                this.endTime = oMap.endTime;
            }
            if (oMap.location !== undefined){
                this.location = oMap.location;
            }
            if (oMap.status !== undefined){
                this.status = oMap.status;
            }
            if (oMap.coefficient !== undefined){
                this.coefficient = oMap.coefficient;
            }
            if (oMap.departementid !== undefined){
                this.departementid = oMap.departementid;
            }
            if (oMap.anneeid !== undefined){
                this.anneeid = oMap.anneeid;
            }
             if (oMap.semestreid !== undefined){
                this.semestreid = oMap.semestreid;
            }
            if (oMap.matiereid !== undefined){
                this.matiereid = oMap.matiereid;
            }
             if (oMap.groupeid !== undefined){
                this.groupeid = oMap.groupeid;
            }
            if (oMap.enseignantid !== undefined){
                this.enseignantid = oMap.enseignantid;
            }
            if (oMap.uniteid !== undefined){
                this.uniteid = oMap.uniteid;
            }
        }
    }
    //
    get  collection_name() {
        return 'groupeevents';
    }
    //
    get startTime() {
        return (this._starttime !== undefined) ? this._starttime: null;
    }
    set startTime(d){
        this._starttime = (d !== undefined) ? d : null;
    }
    get has_startTime() {
        return (this.startTime !== null);
    }
    get endTime() {
        return (this._endtime !== undefined) ? this._endtime: null;
    }
    set endTime(d){
        this._endtime = (d !== undefined) ? d : null;
    }
    get has_endTime() {
        return (this.endTime !== null);
    }
    get status() {
        return (this._status !== undefined) ? this._status : null;
    }
    set status(s){
        this._status = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase(): null;
    }
    get has_status() {
        return (this.status !== null);
    }
    get location() {
        return (this._location !== undefined) ? this._location : null;
    }
    set location(s){
        this._location = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase(): null;
    }
    get has_location() {
        return (this.location !== null);
    }
    get coefficient() {
        return (this._coef !== undefined) ? this._coef : null;
    }
    set coefficient(s){
        this._coef = ((s !== undefined) && 
        (s !== null) && (s > 0)) ? s: null;
    }
    get has_coefficient() {
        return (this.coefficient !== null)&& (this.coefficient > 0);
    }
    //
     get genre() {
        return (this._genre !== undefined) ? this._genre : null;
    }
    set genre(s){
        this._genre = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase(): null;
    }
    get has_genre() {
        return (this.genre !== null);
    }
     get name() {
        return (this._name !== undefined) ? this._name : null;
    }
    set name(s){
        this._name = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase(): null;
    }
    get has_name() {
        return (this.name !== null);
    }
     get profaffectationid() {
        return (this._profaffectationid !== undefined) ? this._profaffectationid : null;
    }
    set profaffectationid(s){
        this._profaffectationid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_profaffectationid() {
        return (this.profaffectationid !== null);
    }
     //
    get enseignantid() {
        return (this._profid !== undefined) ? this._profid : null;
    }
    set enseignantid(s){
        this._profid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_enseignantid() {
        return (this.enseignantid !== null);
    }
     get matiereid() {
        return (this._matiereid !== undefined) ? this._matiereid : null;
    }
    set matiereid(s){
        this._matiereid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_matiereid() {
        return (this.matiereid !== null);
    }
     get anneeid() {
        return (this._anneeid !== undefined) ? this._anneeid : null;
    }
    set anneeid(s){
        this._anneeid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_anneeid() {
        return (this.anneeid !== null);
    }
     get semestreid() {
        return (this._semestreid !== undefined) ? this._semestreid : null;
    }
    set semestreid(s){
        this._semestreid = ((s !== undefined) && 
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_semestreid() {
        return (this.semestreid !== null);
    }
     get groupeid() {
        return (this._groupeid !== undefined) ? this._groupeid : null;
    }
    set groupeid(s){
        this._groupeid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_groupeid() {
        return (this.groupeid !== null);
    }
//
get departementid() {
        return (this._departementid !== undefined) ? this._departementid : null;
    }
    set departementid(s){
        this._departementid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_departementid() {
        return (this.departementid !== null);
    }
//
get uniteid() {
        return (this._uniteid !== undefined) ? this._uniteid : null;
    }
    set uniteid(s){
        this._uniteid = ((s !== undefined) &&
        (s !== null) && (s.trim().length > 0)) ? s.trim(): null;
    }
    get has_uniteid() {
        return (this.uniteid !== null);
    }
    get date() {
        return (this._date !== undefined) ? this._date: null;
    }
    set date(d){
        this._date = (d !== undefined) ? d : null;
    }
    get has_date() {
        return (this.date !== null);
    }

    get is_storeable() {
        if (this.has_startTime && this.has_endTime){
            if (this.startTime.getDate() > this.endTime.getDate()){
                return false;
            }
        }
        return (this.has_profaffectationid && this.has_date && this.has_name &&
            this.has_genre && this.has_departementid && this.has_anneeid && this.has_semestreid && this.has_groupeid && this.has_matiere_id && this.has_uniteid &&
               this.has_enseignantid);
    }
     to_insert_map(oMap) {
        super.to_insert_map(oMap);
		if ((oMap !== undefined) && (oMap !== null)){
            if (this.has_profaffectationid){
				oMap.profaffectationid = this.profaffectationid;
			}
            if (this.has_date){
				oMap.date = this.date;
			}
            if (this.has_name){
				oMap.name = this.name;
			}
            if (this.has_genre){
				oMap.genre = this.genre;
			}
            if (this.has_coefficient){
				oMap.coefficient = this.coefficient;
			}
            if (this.has_location){
				oMap.location = this.location;
			}
            if (this.has_status){
				oMap.status = this.status;
			}
			if (this.has_startTime){
				oMap.startTime = this.startTime;
			}
			if (this.has_endTime){
				oMap.endTime = this.endTime;
			}
            if (this.has_anneeid){
				oMap.anneeid = this.anneeid;
			}
            if (this.has_semestreid){
				oMap.semestreid = this.semestreid;
			}
            if (this.has_groupeid){
				oMap.groupeid = this.groupeid;
			}
            if (this.has_matiereid){
				oMap['matiereid'] = this.matiereid;
			}
            if (this.has_enseignantid){
				oMap.enseignantid = this.enseignantid;
			}
             if (this.has_departementid){
				oMap.departementid = this.departementid;
			}
             if (this.has_uniteid){
				oMap.uniteid = this.uniteid;
			}
		}
	}// to_insert_map
}// class GroupeEvent
