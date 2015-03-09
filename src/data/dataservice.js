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
from './domain/departement';
import {
    Person
}
from './domain/person';
import {
    Administrator
}
from './domain/administrator';
import {
    Operator
}
from './domain/operator';
import {
    Enseignant
}
from './domain/enseignant';
import {
    Etudiant
}
from './domain/etudiant';
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
            if ((suser == undefined) || (suser == null)) {
                return new Promise((resolve, reject) {
                    reject(new Error('Invalide username'));
                });
            }
            let ruser = suser.trim().toLowerCase();
            if (ruser.length < 1) {
                return new Promise((resolve, reject) {
                    reject(new Error('Invalide username'));
                });
            }
            let model = {
                username: ruser
            };
            var url = this.form_url('persons', null, model);
            return this.client.get(url).then((rsp) => {
                if ((!rsp.isSuccess) || (rsp.content == undefined) || (rsp.content == null)) {
                    return {
                        role: null,
                        data: null
                    };
                }
                let dd = rsp.content;
                if (dd.length < 1) {
                    return {
                        role: null,
                        data: null
                    };
                }
                let oMap = dd[0];
                let res = new Person(oMap);
                let xrole = null;
                if (oMap['roles'] != undefined) {
                    let xx = oMap['roles'];
                    for (let i = 0; i < xx.length; ++i) {
                        let xr = xx[i];
                        if (xr == 'super') {
                            xrole = xr;
                            break;
                        } else if (xr == 'admin') {
                            xrole = xr;
                            break;
                        } else if (xr == 'oper') {
                            xrole = xr;
                            break;
                        } else if (xr == 'prof') {
                            xrole = xr;
                            break;
                        } else if (xr == 'etud') {
                            xrole = xr;
                            break;
                        }
                    } // i
                } // roles
                return {
                    role: xrole,
                    data: res
                };
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
    get_departements_count(dep) {
            let model = ((dep != undefined) && (dep != null)) ? dep : new Departement();
            return this.get_items_count(model);
        } // get_departements_count
    maintains_departement(dep) {
            if (dep.has_id) {
                return this.update_item(dep);
            } else {
                return this.insert_item(dep);
            }
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
    find_departement_by_sigle(sigle) {
            if ((sigle == undefined) || (sigle == null)) {
                return new Promise((resolve, reject) => {
                    resolve(null);
                });
            }
            let model = new Departement();
            model.sigle = sigle;
            return this.get_items(model).then((r) => {
                let xr = null;
                if ((r != undefined) && (r != null) && (r.length > 0)) {
                    xr = new Departement(r[0]);
                }
                return xr;
            });
        } // find_departement_by_sigle
    remove_departement(dep) {
            return this.remove_item(dep);
        } // maindains_departements
} // class DataService