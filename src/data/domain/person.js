// person.js
import { DescriptionItem } from './descriptionitem';
//
import { Crypto } from '../utils/crypto';
//
export class Person extends DescriptionItem {
    constructor(oMap) {
            super(oMap);
            this.type = 'person';
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.username !== undefined) {
                    this.username = oMap.username;
                }
                if (oMap.firstname !== undefined) {
                    this.firstname = oMap.firstname;
                }
                if (oMap.lastname !== undefined) {
                    this.lastname = oMap.lastname;
                }
                if (oMap.password !== undefined) {
                    this.password = oMap.password;
                }
                if (oMap.email !== undefined) {
                    this.email = oMap.email;
                }
                if (oMap.phone !== undefined) {
                    this.phone = oMap.phone;
                }
                if (oMap.departementids !== undefined) {
                    this.departementids = oMap.departementids;
                } //
                if (oMap.infoid !== undefined){
                    this.infoid = oMap.infoid;
                }
                if (oMap.roles !== undefined) {
                    this.roles = oMap.roles;
                } //
            } // oMap
        } // constructor
    reset_password() {
        if (this.has_username) {
            let cc = new Crypto();
            this.password = cc.md5(this.username);
        } else {
            this.password = null;
        }
    }
    change_password(ct) {
        if ((ct === undefined) || (ct === null)) {
            this.password = null;
        } else {
            let v = null;
            let x = ct.trim();
            if (x.length > 0) {
                let cc = new Crypto();
                v = cc.md5(this.username);
            }
            this.password = v;
        }
    }
    check_password(ct) {
            if ((ct === undefined) || (ct === null)) {
                if (this.has_password) {
                    return false;
                }
            }
            let x = ct.trim();
            if (x.length < 1) {
                if (this.has_password) {
                    return false;
                }
            }
            if (!this.has_password) {
                return false;
            }
            let cc = new Crypto();
            let v = cc.md5(x);
            return (this.password == v);
        } // check_password
    get departementids() {
            return ((this._deps !== undefined) && 
            (this._deps !== null)) ? this._deps : null;
        } // getDepartementids
    set departementids(s) {
        this._deps = null;
        if ((s !== undefined) && (s !== null) && (s.length > 0)) {
            this._deps = new Set();
            let n = s.length;
            for (let i = 0; i < n; ++i) {
                let x = s[i];
                if ((x !== null) && (x.trim().length > 0)) {
                    this._deps.add(x.trim());
                } // x
            } // i
        }
    }
    get has_departementids() {
        return (this.departementids !== null);
    }
    add_departementid(id) {
            if ((id !== undefined) && 
            (id !== null) && (id.trim().length > 0)) {
                if ((this._deps === undefined) || (this._deps === null)) {
                    this._deps = new Set();
                }
                this._deps.add(id.trim());
            }
        } // add_departementid
        //
    get roles() {
        return ((this._roles !== undefined) && 
        (this._roles !== null)) ? this._roles : null;
    }
    set roles(s) {
        this._roles = null;
        if ((s !== undefined) && (s !== null) && (s.length > 0)) {
            this._roles = new Set();
            let n = s.length;
            for (let i = 0; i < n; ++i) {
                let x = s[i];
                if ((x !== null) && (x.trim().length > 0)) {
                    this._roles.add(x.trim().toLowerCase());
                } // x
            } // i
        }
    }
    get has_roles() {
        return (this.roles !== null);
    }
    add_role(id) {
            if ((id !== undefined) && (id !== null) && 
            (id.trim().length > 0)) {
                if ((this._roles === undefined) || (this._roles === null)) {
                    this._roles = new Set();
                }
                this._roles.add(id.trim().toLowerCase());
            }
        } // add_departementid
        //
    get collection_name() {
        return "persons";
    }
    get infoid(){
        return (this._infoid !== undefined) ? this._infoid : null;
    }
    set infoid(s){
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)){
            this._infoid = s.trim();
        } else {
            this._infoid = null;
        }
    }
    get has_infoid(){
        return (this.infoid !== null);
    }
    get username() {
        return (this._user !== undefined) ? this._user : null;
    }
    set username(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._user = s.trim().toLowerCase();
        } else {
            this._user = null;
        }
    }
    get has_username() {
            return(this.username !== null);
        }
        //
    get lastname() {
        return (this._last !== undefined) ? this._last : null;
    }
    set lastname(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._last = s.trim().toUpperCase();
        } else {
            this._last = null;
        }
    }
    get has_lastname() {
            return(this.lastname !== null);
        }
        //
    get firstname() {
        return (this._first !== undefined) ? this._first : null;
    }
    set firstname(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            let ss = s.trim();
            let n = ss.length;
            if (n > 1) {
                this.first = 
                ss.substr(0, 1).toUpperCase() + ss.substr(1, n - 1).toLowerCase();
            } else {
                this._first = ss.toUpperCase();
            }
            this._last = s.trim().toUpperCase();
        } else {
            this._first = null;
        }
    }
    get has_firstname() {
            return(this.firstname !== null);
        }
        //
    get fullname() {
            let s = '';
            if (this.has_lastname) {
                s = this.lastname;
            }
            if (this.has_firstname) {
                s = s + ' ' + this.firstname;
            }
            s = s.trim();
            return (s.length > 0) ? s : null;
        } // fullname
    get has_fullname() {
            return (this.fullname !== null);
        }
        //
    get password() {
        return (this._pass !== undefined) ? this._pass : null;
    }
    set password(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._pass = s.trim();
        }else {
            this._pass = null;
        }
    }
    get has_password() {
            return(this.password !== null);
        }
        //  
    get email() {
        return (this._email !== undefined) ? this._email : null;
    }
    set email(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._email = s.trim();
        } else {
            this._email = null;
        }
    }
    get has_email() {
            return (this.email !== null);
        }
        //
        //  
    get phone() {
        return (this._phone !== undefined) ? this._phone : null;
    }
    set phone(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._phone = s.trim();
        } else {
            this._phone = null;
        }
    }
    get has_phone() {
            return (this.phone !== null);
        }
        //
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_username) {
                    oMap.username = this.username;
                }
                if (this.has_password) {
                    oMap.password = this.password;
                }
                if (this.has_firstname) {
                    oMap.firstname = this.firstname;
                }
                if (this.has_lastname) {
                    oMap.lastname = this.lastname;
                }
                if (this.has_email) {
                    oMap.email = this.email;
                }
                if (this.has_phone) {
                    oMap.phone = this.phone;
                }
                if (this.has_infoid){
                    oMap.infoid = this.infoid;
                }
                if (this.has_departementids) {
                    let r = [];
                    for (let id of this.departementids) {
                        r.push(id);
                    } // id
                    if (r.length > 0) {
                        oMap.departementids = r;
                    }
                } //
                if (this.has_roles) {
                    let r = [];
                    for (let id of this.roles) {
                        r.push(id);
                    } // id
                    if (r.length > 0) {
                        oMap.roles = r;
                    }
                } //
            } // oMap
        } // to_insert_map
    get is_storeable() {
        return (this.has_username && this.has_lastname && this.has_firstname);
    }
    hasrole(r) {
            if ((this._roles === undefined) || (this._roles === null) ||
                (r === undefined) || (r === null)) {
                return false;
            }
            let rr = r.trim().toLowerCase();
            if (rr.length < 1) {
                return false;
            }
            for (let x of this._roles) {
                if (x == rr) {
                    return true;
                }
            } // x
            return false;
        } // hasrole_
    get is_admin() {
        return (this.has_role('super') || this.hasrole('admin'));
    }
    get is_oper() {
        return this.hasrole('oper');
    }
    get is_prof() {
        return this.hasrole('prof');
    }
    get is_etud() {
        return this.hasrole('etud');
    }
    get is_reader() {
        return this.hasrole('reader');
    }
    get is_super() {
        return this.hasrole('super');
    }
    get has_departementid() {
        return false;
    }
} // class Person
