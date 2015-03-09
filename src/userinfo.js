// userinfo.js
//
import {
    Departement
}
from './data/domain/departement';
import {
    Annee
}
from './data/domain/annee';
import {
    Semestre
}
from './data/domain/semestre';
import {
    Person
}
from './data/domain/person';
import {
    Administrator
}
from './data/domain/administrator';
import {
    Operator
}
from './data/domain/operator';
import {
    Enseignant
}
from './data/domain/enseignant';
import {
    Etudiant
}
from './data/domain/etudiant';
//
export class UserInfo {
   
    constructor() {
            this._dep = null;
            this._annee = null;
            this._semestre = null;
            this._admin = null;
            this._oper = null;
            this._prof = null;
            this._etud = null;
            this._person = null;
        } // constructor
    
    disconnect() {
            this._dep = null;
            this._annee = null;
            this._semestre = null;
            this._admin = null;
            this._oper = null;
            this._prof = null;
            this._etud = null;
            this._person = null;
        } // disconnect
        //
    get person() {
            return this._person;
    }
    get has_person() {
            return (this.person != null);
        }
        //
    get etud() {
        return this._etud;
    }
    set etud(s) {
        this._etud = (s != undefined) ? s : null;
    }
    get is_etud() {
        return ((this.etud != null) && this.etud.has_id);
    }
    get prof() {
        return this._prof;
    }
    set prof(s) {
        this._prof = (s != undefined) ? s : null;
    }
    get is_prof() {
            return ((this.prof != null) && this.prof.has_id);
        }
        //
    get admin() {
        return this._admin;
    }
    set admin(s) {
        this._admin = (s != undefined) ? s : null;
    }
    get is_admin() {
        return ((this.admin != null) && this.admin.has_id);
    }
    get oper() {
        return this._oper;
    }
    set oper(s) {
        this._oper = (s != undefined) ? s : null;
    }
    get is_oper() {
            return ((this.oper != null) && this.oper.has_id);
        }
        //
    get semestre() {
        return this._semestre;
    }
    set semestre(s) {
        this._semestre = (s != undefined) ? s : null;
    }
    get has_semestre() {
        return ((this.semestre != null) && this.semestre.has_id);
    }
    get semestreid() {
            return (this.has_semestre) ? this.semestre.id : null;
        }
        //
    get annee() {
        return this._annee;
    }
    set annee(s) {
        this._annee = (s != undefined) ? s : null;
        this.semestre = null;
    }
    get has_annee() {
        return ((this.annee != null) && this.annee.has_id);
    }
    get anneeid() {
            return (this.has_annee) ? this.annee.id : null;
        }
        //
    get departement() {
        return this._dep;
    }
    set departement(s) {
        this._dep = (s != undefined) ? s : null;
        this.annee = null;
    }
    get has_departement() {
        return ((this.departement != null) && this.departement.has_id);
    }
    get departementid() {
        return (this.has_departement) ? this.departement.id : null;
    }
} // class UserInfo