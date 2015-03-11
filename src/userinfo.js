// userinfo.js
//
import {UserInfoBase} from './viewmodel/userinfobase';
//
import {
    Departement
}
from './data/domain/departement';
import {
    Unite
}
from './data/domain/unite';
import {
    Matiere
}
from './data/domain/matiere';
import {
    Groupe
}
from './data/domain/groupe';
import {
    ProfAffectation
}
from './data/domain/profaffectation';
import {
    GroupeEvent
}
from './data/domain/groupeevent';
import {
    Annee
}
from './data/domain/annee';
import {
    Semestre
}
from './data/domain/semestre';
import {
    Person
}
from './data/domain/person';
import {
    Enseignant
}
from './data/domain/enseignant';

//
import {
    EventAggregator
}
from 'aurelia-event-aggregator';
//
//
export class UserInfo extends UserInfoBase {
    //
    static inject() {
            return [EventAggregator];
        }
        //
    constructor(eventAggregator) {
           super();
            let self = this;
            this.eventAggregator = eventAggregator;
            //
            this.eventAggregator.subscribe(Departement, message => {
                self.departement = message;
                self.annee = null;
                self.semestre = null;
                self.person = null;
                self.unite = null;
                self.matiere = null;
                self.groupe = null;
                self.enseignant = null;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(Annee, message => {
                self.annee = message;
                self.semestre = null;
                self.groupe = null;
                self.enseignant = null;
            });
            this.eventAggregator.subscribe(Semestre, message => {
                self.semestre = message;
            });
            this.eventAggregator.subscribe(Semestre, message => {
                self.semestre = message;
                semestre.profaffectation = null;
                semestre.groupeevent = null;
            });
            this.eventAggregator.subscribe(Person, message => {
                self.person = message;
                self.departement = null;
                self.annee = null;
                self.semestre = null;
                self.unite = null;
                self.matiere = null;
                self.groupe = null;
                self.enseignant = null;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(Enseignant, message => {
                self.enseignant = message;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(Unite, message => {
                self.unite = message;
                self.matiere = null;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(Matiere, message => {
                self.matiere = message;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(Groupe, message => {
                self.groupe = message;
                self.profaffectation = null;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(ProfAffectation, message => {
                self.profAffectation = message;
                self.groupeevent = null;
            });
            this.eventAggregator.subscribe(GroupeEvent, message => {
                self.groupeevent = message;
            });
        } // constructor

} // class UserInfo
