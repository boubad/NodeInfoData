// etudviewmodel.js
//
import {
    PersonViewModel
}
from './personviewmodel';
import {
    EtudPerson
}
from '../domain/etudperson';
import {
    Etudiant
}
from '../domain/Etudiant';
import {
    moment
}
from 'moment';
//
export class EtudViewModel extends PersonViewModel {
    constructor(dataService) {
            super(dataService, new Etudiant(), new EtudPerson());
            this._format = 'YYYY-MM-DD';
        } // constructor
    get birthDate() {
        return (this._date !== undefined) ? this._date : null;
    }
    set birthDate(s) {
        this._date = s;
    }
    get current() {
        return super.current;
    }
    set current(v) {
        super.current = v;
        let sd = null;
        if ((this.current != null) && (this.current.birthDate !== undefined) &&
            (this.current.birthDate != null)) {
            sd = moment(this.current.birthDate).format(this._format);
        }
        this.date = sd;
    }
    get dossier() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.dossier !== undefined)) ? this.person.dossier : null;
    }
    set dossier(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.dossier = s;
        }
    }
    get sexe() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.sexe !== undefined)) ? this.person.sexe : null;
    }
    set sexe(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.sexe = s;
        }
    }
    get etablissement() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.etablissement !== undefined)) ? this.person.etablissement : null;
    }
    set etablissement(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.etablissement = s;
        }
    }
    get ville() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.ville !== undefined)) ? this.person.ville : null;
    }
    set ville(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.ville = s;
        }
    }
    get serieBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.serieBac !== undefined)) ? this.person.serieBac : null;
    }
    set serieBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.serieBac = s;
        }
    }
    get optionBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.optionBac !== undefined)) ? this.person.optionBac : null;
    }
    set optionBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.optionBac = s;
        }
    }
    get mentionBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.mentionBac !== undefined)) ? this.person.mentionBac : null;
    }
    set mentionBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.mentionBac = s;
        }
    }
    get etudesSuperieures() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.etudesSuperieures !== undefined)) ? this.person.etudesSuperieures : null;
    }
    set etudesSuperieures(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.etudesSuperieures = s;
        }
    }
    save() {
            let d1 = null;
            let data = this.current;
            let px = this.person;
            if ((data === undefined) || (data === null) ||
                (px === undefined) || (px === null)) {
                return;
            }
            if ((!px.is_storeable) || (data.departementid === null)) {
                return;
            }
            let d1 = null;
            try {
                if (this.birthDate !== null) {
                    let d = moment(this.birthDate, this._format);
                    if (d.isValid()) {
                        d1 = d;
                    }
                }
            }
            catch (e) {}
            data.birthDate = d1;
            super.save();
        } // save
} // class PersonViewModel
