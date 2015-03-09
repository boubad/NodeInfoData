//semestre.js
import {
    IntervalItem
}
from './intervalitem';
//
export class Semestre extends IntervalItem {
    constructor(oMap) {
        super(oMap);
        this.type = 'semestre';
        if ((oMap != undefined) && (oMap != null)){
            if (oMap['anneeid'] != undefined){
                this.anneeid = oMap['anneeid'];
            }
        }// oMap
    }// constructor
    get collection_name() {
        return 'semestres';
    }
    get anneeid(){
        return (this._anneeid != undefined) ? this._anneeid : null;
    }
    set anneeid(s){
        if ((s != undefined) && (s != null) && (s.trim().length > 0)){
            this._anneeid = s.trim();
        } else {
            this._anneeid = null;
        }
    }
    get has_anneeid(){
        return (this.anneeid != null);
    }
    get is_storeable(){
        return (super.is_storeable && this.has_anneeid);
    }
    to_insert_map(oMap){
        super.to_insert_map(oMap);
        if ((oMap != undefined) && (oMap != null)){
            if (this.has_anneeid){
                oMap['anneeid'] = this.anneeid;
            }
        }
    }// to_insert_map
} // class Annee