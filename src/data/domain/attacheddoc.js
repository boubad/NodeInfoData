//attacheddoc.tjs
//
import {DescriptionItem} from './descriptionitem';
//
export class AttachedDoc extends DescriptionItem {
	constructor(oMap){
        super(oMap);
		if ((oMap != undefined) && (oMap != null)){
			if ((oMap['mimetype']!= undefined) && (oMap['mimetype'] != null)){
				this.mimetype = oMap['mimetype'];
			}
            if ((oMap['genre']!= undefined) && (oMap['genre'] != null)){
				this.genre = oMap['genre'];
			}
			if ((oMap['name']!= undefined) && (oMap['name'] != null)){
				this.name = oMap['name'];
			}
            if ((oMap['data']!= undefined) && (oMap['data'] != null)){
				this.data = oMap['data'];
			}
		}// oMap
	}// constructor
    get collection_name(){
        return 'attacheddocs';
    }
    //
     get mimetype(){
        return (this._mime != undefined) ? this._mime : null;
    }// 
    set mimetype(s){
        this._mime = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }// 
	get has_mimetype() {
		return (this.mimetype != null);
	}
    //
     get genre() {
        return (this._genre != undefined) ? this._genre : null;
    }// 
    set genre(s){
        this._genre = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }// 
	get has_genre() {
		return (this.genre != null);
	}
	get name() {
        return (this._name != undefined) ? this._name : null;
    }// name
    set name(s){
        this._name = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }// name
	get has_name() {
		return (this.name != null);
	}
     get data() {
        return (this._data != undefined) ? this._data : null;
    }// 
    set data(s){
        this._data = ((s != undefined) && (s != null)) ? s : null;
    }// 
	get has_data() {
		return (this.data != null);
	}
	get is_storeable()  {
		return this.has_data && this.has_genre && this.has_mimetype && this.has_name;
	}
	to_insert_map(oMap ) {
        super.to_insert_map(oMap);
		if ((oMap != undefined) && (oMap != null)){
			if (this.has_mimetype){
				oMap['mimetype'] = this.mimetype;
			}
            if (this.has_genre){
				oMap['genre'] = this.genre;
			}
			if (this.has_name){
				oMap['name'] = this.name;
			}
            if (this.has_data){
				oMap['data'] = this.data;
			}
		}
	}// to_insert_map
}// class AttachedDoc
