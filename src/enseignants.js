//enseignants.js
//
import {
  Enseignant
}
from './data/domain/enseignant';
import {ProfPerson} from './data/domain/profperson';
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

export class Enseignants extends PersonViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService, new Enseignant(), new ProfPerson);
      this.title = 'Enseignants';
      this.menu = [];
    } // constructor
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Enseignant({
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
            self.title = 'Enseignants ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Enseignants
