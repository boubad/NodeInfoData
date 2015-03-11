// login.js
//
import {Router, Redirect} from 'aurelia-router';
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
  ViewModelBase
}
from './data/viewmodel/viewmodelbase';
import {
  UserInfo
}
from './userinfo';
//
export class Login extends ViewModelBase {
  static inject() {
    return [DataService, UserInfo];
  }
  constructor(dataService, userInfo) {
      super(dataService, userInfo, new Departement());
      this.title = 'Connexion';
      this.username = null;
      this.password = null;
    } // constructor
  get canLogin(){
    let bRet = false;
    if ((this.username !== undefined) && (this.password !== null) &&
    (this.username !== null) && (this.password !== null)){
      let suser = this.username.trim();
      let spass = this.password.trim();
      bRet = (suser.length > 0) && (spass.length > 0);
    }
    return bRet;
  }
  connect(){
    let suser = this.username.trim();
    let spass = this.password.trim();
    var self = this;
    this.dataService.find_person_by_username_password(suser, spass).then((p)=>{
      if ((p === undefined) && (p === null)){
        self.error = 'Erreur Authentification...';
      } else {
         this.userInfo.person = p;
         return new Redirect('welcome');
      }
    }).
    catch((err)=>{
      self._internal_set_error(err);
    });
  }// connect
  activate() {
      this.username = null;
      this.password = null;
      return true;
    } // activate
} // class DepartementViewModel
