// annees.js
//
import moment from 'moment';
import {
  Annee
}
from './data/domain/annee';
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
export class Annees extends PagedSigleNameViewModel {
  static inject() {
    return [DataService, UserInfo];
  }
  constructor(dataService, userInfo) {
      super(dataService, userInfo, new Annee());
      this.format = 'YYYY-MM-DD';
      this.title = 'Années';
      let d = moment().format(this.format);
      this.startDate = d;
      this.endDate = d;
      this.menu = [];
    } // constructor

  get current() {
      return super.current;
    } //
  set current(v) {
    let f = this.format;
    let d = moment().format(f);
    super.current = v;
    let mm = [];
    if ((v !== undefined) && (v !== null) && v.has_id) {
      let id = v.id;
      mm.push({
        title: 'Semestres',
        refer: '#semestres/' + id
      });
    }
    this.menu = mm;
    if (this.current !== null) {
      if (this.current.startDate !== null) {
        this.startDate = moment(this.current.startDate).format(f);
      } else {
        this.startDate = d;
      }
      if (this.current.endDate !== null) {
        this.endDate = moment(this.current.endDate).format(f);
      } else {
        this.endDate = d;
      }
    } else {
      this.startDate = d;
      this.endDate = d;
    }
    if ((this.userInfo !== undefined) && (this.UserInfo !== null)) {
      this.userInfo.annee = v;
      this.userInfo.semestre = null;
      this.userInfo.profaffectation = null;
      this.userInfo.groupeevent = null;
    }
  }
  get canAdd() {
    return (super.canAdd && (this.departementid != null));
  }
  get canSave() {
    if ((this.sigle === undefined) || (this.sigle === null) ||
      (this.departementid == null)) {
      return false;
    }
    let f = this.format;
    let bRet = false;
    if ((this.startDate !== undefined) && (this.startDate !== null) &&
      (this.endDate !== undefined) && (this.endDate !== null)) {
      let d1 = null;
      let d2 = null;
      try {
        d1 = moment(this.startDate, f);
        d2 = moment(this.endDate, f);
      } catch (e) {

      }
      if ((d1 !== null) && (d2 !== null)) {
        bRet = true;
      }
    }
    return bRet;
  }
  save() {
      if ((this.sigle === undefined) || (this.sigle === null) ||
        (this.departementid == null)) {
        return;
      }
      let format = this.format;
      let bRet = false;
      if ((this.startDate !== undefined) && (this.startDate !== null) &&
        (this.endDate !== undefined) && (this.endDate !== null)) {
        let d1 = null;
        let d2 = null;
        try {
          d1 = moment(this.startDate, format);
          d2 = moment(this.endDate, format);
        } catch (e) {

        }
        if ((d1 !== null) && (d2 !== null)) {
          this.current.startDate = d1;
          this.current.endDate = d2;
          super.save();
        }
      }
    } // save
  addNew() {
      super.addNew();
      this.current = new Annee({
        departementid: this.departementid
      });
    } // addNew
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Annee({
        departementid: id
      });
      this.departement = new Departement({
        _id: id
      });
      //this.refreshAll();
      //return true;
      var self = this;
      return this.dataService.find_departement_by_id(id).then((d) => {
        if ((d !== undefined) && (d !== null)) {
          self.departemnt = d;
          if (d != null) {
            self.title = 'Années ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Annees
