// semestres.js
//
import {
  Matiere
}
from './data/domain/matiere';
import {
  Unite
}
from './data/domain/unite';
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
export class Matieres extends PagedSigleNameViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Matiere());
      this.title = 'Matières';
      this.unite = new Unite();
      this.departement = new Departement();
      this.menu = [];
      this._coef = null;
      this._ecs = null;
      this.current = new Matiere();
    } // constructor
  get genre() {
    return ((this.current !== undefined) && (this !== null)) ? this.current.genre : null;
  }
  set genre(s) {
    if ((this.current !== undefined) && (this !== null)) {
      this.current.genre = s;
    }
  }
  get mat_module() {
    return ((this.current !== undefined) && (this !== null)) ? this.current.mat_module : null;
  }
  set mat_module(s) {
    if ((this.current !== undefined) && (this !== null)) {
      this.current.mat_module = s;
    }
  }
  get coefficient() {
    return ((this._coef !== undefined) && (this._coef !== null)) ? this._coef : null;
  }
  set coefficient(v) {
    if ((v !== undefined) && (v !== null)) {
      try {
        let x = parseFloat(v);
        if ((!isNaN(x)) && (x > 0)) {
          this._coef = x;
        }
      }
      catch (e) {}
    }
  }
  get ecs() {
    return ((this._ecs !== undefined) && (this._ecs !== null)) ? this._ecs : null;
  }
  set ecs(v) {
    if ((v !== undefined) && (v !== null)) {
      try {
        let x = parseFloat(v);
        if ((!isNaN(x)) && (x > 0)) {
          this._ecs = x;
        }
      }
      catch (e) {}
    }
  }
  get uniteid() {
    return ((this.unite !== undefined) && (this.unite !== null)) ?
      this.unite.id : null;
  }
  set uniteid(d) {
    if ((this.unite !== undefined) && (this.unite !== null)) {
      this.unite.id = d;
    }
  }
  get current() {
      return super.current;
    } //
  set current(v) {
    super.current = v;
    this._coef = null;
    this._ecs = null;
    if ((v !== undefined) && (v !== null)) {
      this.coefficient = v.coefficient;
      this.ecs = v.ecs;
    }
  }
  get canAdd() {
    return (super.canAdd && (this.departementid != null) &&
      (this.uniteid !== null));
  }
  get canSave() {
    if ((this.sigle === undefined) || (this.sigle === null) ||
      (this.departementid == null) || (this.uniteid == null)) {
      return false;
    }
    return true;
  }
  save() {
      if ((this.current == null) || (this.current.sigle === undefined) ||
        (this.current.sigle === null) ||
        (this.departementid == null) || (this.uniteid == null)) {
        return;
      }
      this.current.departementid = this.departementid;
      this.current.uniteid = this.uniteid;
      this.current.coefficient = this.coefficient;
      this.current.ecs = this.ecs;
      super.save();
    } // save
  addNew() {
      super.addNew();
      this.current = new Matiere({
        departementid: this.departementid,
        uniteid: this.uniteid
      });
    } // addNew
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Matiere({
        uniteid: id
      });
      this.unite = new Unite({
        _id: id
      });
      var self = this;
      var service = this.dataService;
      return service.find_item_by_id(this.unite).then((d) => {
        if ((d !== undefined) && (d !== null)) {
          self.unite = d;
          if (d != null) {
            self.title = 'Matières ' + d.name;
            self.departement = new Departement({
              _id: d.departementid
            });
            service.find_item_by_id(self.departement)
              .then((x) => {
                self.departement = x;
                return self.refreshAll();
              })
          }
        }
      });
    } // activate
} // class Matieres
