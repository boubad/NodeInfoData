//departementchild.js
//
import {SigleNameItem} from './siglenameitem';
//
export class DepartementChildItem extends SigleNameItem {
    constructor(oMap){
        super(oMap);
        if ((oMap !== undefined) && (oMap !== null)){
            if (oMap.departementid !== undefined){
                this.departementid = oMap.departementid;
            }
        }// oMap
    }// constructor
    get departementid(){
        return (this._departementid !== undefined) ? this._departementid : null;
    }
    set departementid(s){
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)){
            this._departementid = s.trim();
        } else {
            this._departementid = null;
        }
    }
    get has_departementid(){
        return (this.departementid !== null);
    }
    get is_storeable(){
        return (super.is_storeable && this.has_departementid);
    }
    to_insert_map(oMap){
        super.to_insert_map(oMap);
        if ((oMap !== undefined) && (oMap !== null)){
            if (this.has_departementid){
                oMap.departementid = this.departementid;
            }
        }
    }// to_insert_map
}// class DepartementChildItem