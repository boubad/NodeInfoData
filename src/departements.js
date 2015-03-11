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
    } // constructor
  get current() {
      return super.current;
    } //
  set current(v) {
    super.current = v;
    if ((this.userInfo !== undefined) && (this.UserInfo !== null)) {
      this.userInfo.departement = v;
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
