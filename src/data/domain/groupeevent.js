// groupeevent.js
import {
    BaseEvent
}
from './baseevent';
//
export class GroupeEvent extends BaseEvent{
    //
    constructor(oMap) {
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.profaffectationid !== undefined) {
                this.profaffectationid = oMap.profaffectationid;
            }
            if (oMap.name !== undefined) {
                this.name = oMap.name;
            }
            if (oMap.startTime !== undefined) {
                this.startTime = oMap.startTime;
            }
            if (oMap.endTime !== undefined) {
                this.endTime = oMap.endTime;
            }
            if (oMap.location !== undefined) {
                this.location = oMap.location;
            }
            if (oMap.status !== undefined) {
                this.status = oMap.status;
            }
            if (oMap.coefficient !== undefined) {
                this.coefficient = oMap.coefficient;
            }
            if (oMap.enseignantid !== undefined) {
                this.enseignantid = oMap.enseignantid;
            }
        }
    }
    get type() {
        return 'groupeevent';
    }
    //
    get collection_name() {
        return 'groupeevents';
    }
    //
    get startTime() {
        return (this._starttime !== undefined) ? this._starttime : null;
    }
    set startTime(d) {
        this._starttime = (d !== undefined) ? d : null;
    }
    get has_startTime() {
        return (this.startTime !== null);
    }
    get endTime() {
        return (this._endtime !== undefined) ? this._endtime : null;
    }
    set endTime(d) {
        this._endtime = (d !== undefined) ? d : null;
    }
    get has_endTime() {
        return (this.endTime !== null);
    }
    get status() {
        return (this._status !== undefined) ? this._status : null;
    }
    set status(s) {
        this._status = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_status() {
        return (this.status !== null);
    }
    get location() {
        return (this._location !== undefined) ? this._location : null;
    }
    set location(s) {
        this._location = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_location() {
        return (this.location !== null);
    }
    get coefficient() {
        return (this._coef !== undefined) ? this._coef : null;
    }
    set coefficient(s) {
        this._coef = ((s !== undefined) && (s !== null) && (s > 0)) ? s : null;
    }
    get has_coefficient() {
        return (this.coefficient !== null) && (this.coefficient > 0);
    }
    get name() {
        return (this._name !== undefined) ? this._name : null;
    }
    set name(s) {
        this._name = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_name() {
        return (this.name !== null);
    }
    get profaffectationid() {
        return (this._profaffectationid !== undefined) ? this._profaffectationid : null;
    }
    set profaffectationid(s) {
        this._profaffectationid = ((s !== undefined) 
        && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_profaffectationid() {
        return (this.profaffectationid !== null);
    }
    //
    get enseignantid() {
        return (this._profid !== undefined) ? this._profid : null;
    }
    set enseignantid(s) {
        this._profid = ((s !== undefined) && (s !== null) &&
        (s.toString().trim().length > 0)) ? s : null;
    }
    get has_enseignantid() {
        return (this.enseignantid !== null);
    }
    get is_storeable() {
        if (this.has_startTime && this.has_endTime) {
            if (this.startTime.getDate() > this.endTime.getDate()) {
                return false;
            }
        }
        return (super.is_storeable && 
        this.has_profaffectationid 
        && this.has_name 
        && this.has_enseignantid);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_profaffectationid) {
            oMap.profaffectationid = this.profaffectationid;
        }
        if (this.has_name) {
            oMap.name = this.name;
        }
        if (this.has_coefficient) {
            oMap.coefficient = this.coefficient;
        }
        if (this.has_location) {
            oMap.location = this.location;
        }
        if (this.has_status) {
            oMap.status = this.status;
        }
        if (this.has_startTime) {
            oMap.startTime = this.startTime;
        }
        if (this.has_endTime) {
            oMap.endTime = this.endTime;
        }
        if (this.has_enseignantid) {
            oMap.enseignantid = this.enseignantid;
        }
    } // to_insert_map
} // class GroupeEvent