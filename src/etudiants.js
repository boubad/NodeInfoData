//etudiants.js
//
import {
  Etudiant
}
from './data/domain/etudiant';
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
  EtudViewModel
}
from './data/viewmodel/etudviewmodel';

export class Etudiants extends EtudViewModel {
  static inject() {
    return [DataService];
  }
  constructor(dataService) {
      super(dataService);
      this.title = 'Etudiants';
    } // constructor
  activate(params, query, router) {
      let id = params.id;
      this.item_model = new Etudiant({
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
            self.title = 'Etudiants ' + d.name;
          }
        }
        return self.refreshAll();
      });
    } // activate
} // class Etudiants
