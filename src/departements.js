// departements.js
//
import {
  Departement
}
from './data/domain/departement';
import {
  DataService
}
from './data/services/dataservice';
import {
  PagedSigleNameViewModel
}
from './data/viewmodel/pagedsiglenameviewmodel';
import {
  UserInfo
}
from './userinfo';
//
export class Departements extends PagedSigleNameViewModel {
  static inject() {
    return [DataService, UserInfo];
  }
  constructor(dataService, userInfo) {
      super(dataService, userInfo, new Departement());
      this.title = 'Départements';
      this.menu = [];
    } // constructor
  get current() {
      return super.current;
    } //
  set current(v) {
    super.current = v;
    let mm = [];
    mm.push({
      title: 'Etudiants',
      refer: '#etuds'
    });
    mm.push({
      title: 'Années',
      refer: '#annees'
    });
    mm.push({
      title: 'Enseignants',
      refer: '#profs'
    });
    mm.push({
      title: 'Groupes',
      refer: '#groupes'
    });
    mm.push({
      title: 'Unités',
      refer: '#unites'
    });
    this.menu = mm;
    if ((this.userInfo !== undefined) && (this.UserInfo !== null)) {
      this.userInfo.departement = v;
      this.userInfo.annee = null;
      this.userInfo.semestre = null;
      this.userInfo.unite = null;
      this.userInfo.matiere = null;
      this.userInfo.groupe = null;
      this.userInfo.enseignant = null;
      this.userInfo.profaffectation = null;
      this.groupeevent = null;
    }
  }
  addNew() {
      super.addNew();
      this.current = new Departement();
    } // addNew
  activate() {
      let self = this;
      if (this.items.length < 1) {
        return this.refreshAll();
      } else {
        return true;
      }
    } // activate
} // class DepartementViewModel
