// groupes.js
//
import {
  Groupe
}
from './data/domain/groupe';
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
export class Groupes extends PagedSigleNameViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Groupe());
      this.title = 'Groupes';
    } // constructor
  get canAdd() {
    return (super.canAdd && (this.departementid != null));
  }
  addNew() {
      super.addNew();
      this.current = new Groupe({
        departementid: this.departementid
      });
    } // addNew
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Groupe({
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
            self.title = 'Groupes ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Groupes
