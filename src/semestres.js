// semestres.js
//
import moment from 'moment';
import {
  Semestre
}
from './data/domain/semestre';
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

//
export class Semestres extends PagedSigleNameViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Semestre());
      this.format = 'YYYY-MM-DD';
      this.title = 'Semestres';
      let d = moment().format(this.format);
      this.startDate = d;
      this.endDate = d;
      this.departement = new Departement();
      this.annee = new Annee();
      this.menu =[];
    } // constructor
  get anneeid() {
    return ((this.annee !== undefined) && (this.annee !== null)) ?
      this.annee.id : null;
  }
  set anneeid(d) {
    if ((this.annee !== undefined) && (this.annee !== null)) {
      this.annee.id = d;
    }
  }
  get current() {
      return super.current;
    } //
  set current(v) {
    let f = this.format;
    let d = moment().format(f);
    super.current = v;
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
  }
  get canAdd() {
    return (super.canAdd && (this.departementid != null) &&
      (this.anneeid !== null));
  }
  get canSave() {
    if ((this.sigle === undefined) || (this.sigle === null) ||
      (this.departementid == null) || (this.anneeid == null)) {
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
          this.current.anneeid = this.anneeid;
          this.current.departementid = this.departementid;
          super.save();
        }
      }
    } // save
  addNew() {
      super.addNew();
      this.current = new Semestre({
        departementid: this.departementid,
        anneeid: this.anneeid
      });
    } // addNew
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Semestre({
        anneeid: id
      });
      this.annee = new Annee({
        _id: id
      });
      var self = this;
      var service = this.dataService;
      return service.find_item_by_id(this.annee).then((d) => {
        if ((d !== undefined) && (d !== null)) {
          self.annee = d;
          if (d != null) {
            self.title = 'Semestres ' + d.name;
            self.departement = new Departement({_id: d.departementid});
            service.find_item_by_id(self.departement)
              .then((x) => {
                self.departement = x;
                return self.refreshAll();
              })
          }
        }
      });
    } // activate
} // class Annees
