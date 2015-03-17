// unites.js
//
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

export class Unites extends PagedSigleNameViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Unite());
      this.title = 'Unités';
      this.menu = [];
    } // constructor
  get current() {
      return super.current;
    } //
  set current(v) {
    super.current = v;
    let mm = [];
    if ((v !== undefined) && (v !== null) && v.has_id) {
      let id = v.id;
      mm.push({
        title: 'Matières',
        refer: '#matieres/' + id
      });
    }
    this.menu = mm;
  }
  get canAdd() {
    return (super.canAdd && (this.departementid != null));
  }
  addNew() {
      super.addNew();
      this.current = new Unite({
        departementid: this.departementid
      });
    } // addNew
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Unite({
        departementid: id
      });
      this.departement = new Departement({
        _id: id
      });
      var self = this;
      return this.dataService.find_item_by_id(this.departement).then((d) => {
        if ((d !== undefined) && (d !== null)) {
          self.departemnt = d;
          if (d != null) {
            self.title = 'Unités ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Unites
