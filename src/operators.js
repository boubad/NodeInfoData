//operators.js
//
import {
  Operator
}
from './data/domain/operator';
import {Person} from './data/domain/person';
import {
  Departement
}
from './data/domain/departement';
import {
  DataService
}
from './data/services/dataservice';
import {
  PersonViewModel
}
from './data/viewmodel/personviewmodel';

export class Operators extends PersonViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Operator(), new Person());
      this.title = 'Opérateurs';
    } // constructor
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Operator({
        departementid: id
      });
      this.departement = new Departement({
        _id: id
      });
      let self = this;
      return this.dataService.find_item_by_id(this.departement).then((d) => {
        if ((d !== undefined) && (d !== null)) {
          self.departemnt = d;
          if (d != null) {
            self.title = 'Opérateurs ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Operators
