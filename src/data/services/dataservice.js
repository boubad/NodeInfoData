//dataservice.js
//
import {
    HttpClient
}
from 'aurelia-http-client';
import {
    DataManagerBase
}
from './datamanagerbase';
import {
    Departement
}
from '../domain/departement';
import {
    Person
}
from '../domain/person';
import {
    Administrator
}
from '../domain/administrator';
import {
    Operator
}
from '../domain/operator';
import {
    Enseignant
}
from '../domain/enseignant';
import {
    Etudiant
}
from '../domain/etudiant';
//
export class DataService extends DataManagerBase {
    static inject() {
        return [HttpClient];
    }
    constructor(http) {
            super(http, 'http://localhost:52999/api');
        } // constructor
        //
    find_person_by_username(suser) {
            let model = new Person({
                username: ruser
            });
            return this.get_one_item(model).then((r) => {
                return new Person(r);
            });
        } // find_person_by_username
        //
    get_departements_count(dep) {
            let model = ((dep != undefined) && (dep != null)) ? dep : new Departement();
            return this.get_items_count(model);
        } // get_departements_count
    get_departements(dep, offset, limit) {
            let model = ((dep != undefined) && (dep != null)) ? dep : new Departement();
            return this.get_items(model, offset, limit).then((dd) => {
                let res = [];
                for (let i = 0; i < dd.length; ++i) {
                    let xx = new Departement(dd[i]);
                    res.push(xx);
                } // i
                return res;
            });
        } // get_departements
    get_all_departements(){
        return this.get_departements();
    }// get_all_departements
    maintains_departement(dep) {
            return this.maintains_item(dep);
        } // maindains_departement
    find_departement_by_id(id) {
            if ((id == undefined) || (id == null)) {
                return new Promise((resolve, reject) => {
                    resolve(null);
                });
            }
            let model = new Departement();
            model.id = id;
            return this.find_item_by_id(model).then((r) => {
                let xr = null;
                if ((r != undefined) && (r != null)) {
                    xr = new Departement(r);
                }
                return xr;
            });
        } // find_departement_by_id
    remove_departement(dep) {
            return this.remove_item(dep);
        } // maindains_departements
} // class DataService