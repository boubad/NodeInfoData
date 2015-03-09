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
import {
    DataService
}
from './data/services/dataservice';
//
export class UserInfo {
    //
    static inject() {
            return [DataService];
        }
        //
    constructor(dataService) {
            this.dataService = dataService;
            this._deps = [];
            this._annees = [];
            this._semestres = [];
            this._dep = null;
            this._annee = null;
            this._semestre = null;
            this._person = null;
        } // constructor

    disconnect() {
            this._deps = [];
            this._annees = [];
            this._semestres = [];
            this._dep = null;
            this._annee = null;
            this._semestre = null;
            this._person = null;
        } // disconnect
        //
    connect(username, password) {
            this.disconnect();
            let self = this;
            this.dataService.find_person_by_username_password(username, password).then((p) => {
                self.person = p;
            });
        } // connect
        //
    get departements() {
        return ((this._deps != undefined) && (this._deps != null)) ? this._deps : [];
    }
    set departements(dd) {
        this._deps = dd;
        this.departement = null;
    }
    get annees() {
        return ((this._annees != undefined) && (this._annees != null)) ? this._annees : [];
    }
    set annees(dd) {
        this._annees = dd;
        this.annee = null;
    }
    get semestres() {
        return ((this._semestres != undefined) && (this._semestres != null)) ? this._semestres : [];
    }
    set semestres(dd) {
        this._semestres = dd;
        this.semestre = null;
    }
    get person() {
        return this._person;
    }
    set person(p) {
        this._person = p;
        let self = this;
        this.dataService.get_person_departements(self.person).then((dd) => {
            self.departements = dd;
        });
    }
    get has_person() {
            return ((this.person != null) && this.personid.has_id);
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
        let self = this;
        this.dataService.get_annee_semestres(self.annee).then((ss) => {
            self.semestres = ss;
        });
    }
    get has_annee() {
        return ((this.annee != null) && this.annee.has_id);
    }
    get anneeid() {
            return (this.has_annee) ? this.annee.id : null;
        }
        //
    get departement() {
        return (this._dep != undefined) ? this._dep : null;
    }
    set departement(s) {
        this._dep = (s != undefined) ? s : null;
        let self = this;
        this.dataService.get_departement_annees(self.departement).then((aa) => {
            self.annees = aa;
        });
    }
    get has_departement() {
        return ((this.departement != null) && this.departement.has_id);
    }
    get departementid() {
        return (this.has_departement) ? this.departement.id : null;
    }
} // class UserInfo
