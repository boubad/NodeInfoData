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
import {
  Annee
}
from '../domain/annee';
import {
  Semestre
}
from '../domain/semestre';
import {
  Unite
}
from '../domain/unite';
//
export class DataService extends DataManagerBase {
  static inject() {
    return [HttpClient];
  }
  constructor(http) {
      super(http, 'http://localhost:52999/api');
    } // constructor
    //
  get_person_departements(p) {
      if ((p === undefined) || (p === null)) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      if (!p.has_id) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      if (p.is_admin) {
        return this.get_all_departements();
      }
      //
      return new Promise((resolve, reject) => {
        resolve([]);
      });
    } // get_person_departements
    //
  get_departement_annees(dep) {
      if ((dep === undefined) || (dep === null)) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      if (!dep.has_id) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      let model = new Annee({
        departementid: dep.id
      });
      return this.get_items(model);
    } // get_departement_annees
    //
  get_annee_semestres(p) {
      if ((p === undefined) || (p === null)) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      if (!p.has_id) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      let model = new Semestre({
        anneeid: p.id
      });
      return this.get_items(model);
    } // get_annee_semestres
    //
    find_person_by_username(suser) {
        let model = new Person({
          username: suser
        });
        return this.get_one_item(model);
      } // find_person_by_username
      //
    //
  find_person_by_username_password(suser, spass) {
     return this.find_person_by_username(suser).then((p) =>{
       if ((p != undefined) && (p !== null)){
           if (p.check_password(spass)){
             return p;
           } else {
             return null;
           }
       } else {
         return null;
       }
     });
    } // find_person_by_username
    maintains_person(p){
      let self = this;
      let model = new Person(p);
      let suser = model.username;
      return this.maintains_item(model).then((x)=>{
        return self.find_person_by_username(suser);
      });
    }// maintains_person
    //
  get_departements_count(dep) {
      let model = new Departement(dep);
      return this.get_items_count(model);
    } // get_departements_count
  get_departements(dep, offset, limit) {
      let model = new Departement(dep);
      return this.get_items(model, offset, limit);
    } // get_departements
  get_all_departements() {
      return this.get_departements();
    } // get_all_departements
  maintains_departement(dep) {
      let model = new Departement(dep);
      return this.maintains_item(model);
    } // maindains_departement
  find_departement_by_id(id) {
      let model = new Departement();
      model.id = id;
      return this.find_item_by_id(model).then((r) => {
        let xr = null;
        if ((r !== undefined) && (r !== null)) {
          xr = new Departement(r);
        }
        return xr;
      });
    } // find_departement_by_id
  remove_departement(dep) {
      let model = new Departement(dep);
      return this.remove_item(model);
    } // maindains_departements
    //
  find_annee_by_id(id) {
      let model = new Annee();
      model.id = id;
      return this.find_item_by_id(model).then((r) => {
        let xr = null;
        if ((r !== undefined) && (r !== null)) {
          xr = new Annee(r);
        }
        return xr;
      });
    } // find_annee_by_id
    find_unite_by_id(id) {
        let model = new Unite();
        model.id = id;
        return this.find_item_by_id(model).then((r) => {
          let xr = null;
          if ((r !== undefined) && (r !== null)) {
            xr = new Unite(r);
          }
          return xr;
        });
      } // find_unite_by_id
} // class DataService
