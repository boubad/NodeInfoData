// groupes.js
//
import {
  Groupe
}
from './data/domain/groupe';
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
export class Groupes extends PagedSigleNameViewModel {
  static inject() {
    return [DataService, UserInfo];
  }
  constructor(dataService, userInfo) {
      super(dataService, userInfo, new Groupe());
      this.title = 'Groupes';
    } // constructor
  get current() {
      return super.current;
    } //
  set current(v) {
    super.current = v;
    if ((this.userInfo !== undefined) && (this.UserInfo !== null)) {
      this.userInfo.groupe = v;
      this.userInfo.profaffectation = null;
      this.userInfo.groupeevent = null;
    }
  }
  get canAdd() {
    return (super.canAdd && this.userInfo.has_departement);
  }
  addNew() {
      super.addNew();
      this.current = new Groupe();
      this.current.departementid = this.userInfo.departementid;
    } // addNew
  activate() {
      this.item_model.departementid = this.userInfo.departementid;
      this.refresh();
    } // activate
} // class DepartementViewModel
