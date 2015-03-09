// operator.js
import {DescriptionItem} from './descriptionitem';
//
export class Operator extends DescriptionItem {
    constructor(oMap){
        super(oMap);
        this.type = 'operator';
        if ((oMap !== undefined) && (oMap !== null)){
            if (oMap.departementid !== undefined){
                this.departementid = oMap.departementid;
            }
            if (oMap.personid !== undefined){
                this.personid = oMap.personid;
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
    get personid(){
        return (this._personid !== undefined) ? this._personid : null;
    }
    set personid(s){
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)){
            this._personid = s.trim();
        } else {
            this._personid = null;
        }
    }
    get has_personid(){
        return (this.personid !== null);
    }
    get is_storeable(){
        return (this.has_personid && this.has_departementid);
    }
    to_insert_map(oMap){
        super.to_insert_map(oMap);
        if ((oMap !== undefined) && (oMap !== null)){
            if (this.has_departementid){
                oMap.departementid = this.departementid;
            }
             if (this.has_personid){
                oMap.personid = this.personid;
            }
        }
    }// to_insert_map
    get collection_name(){
        return 'operators';
    }
}// class Operators
