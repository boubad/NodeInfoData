// etudiant.js
import {
    DescriptionItem
}
from './descriptionitem';
/
//
export class Etudiant extends DescriptionItem {
    constructor(oMap) {
            super(oMap);
            if ((oMap != undefined) && (oMap != null)) {
                if (oMap['departementid'] != undefined) {
                    this.departementid = oMap['departementid'];
                }
                if (oMap['personid'] != undefined) {
                    this.personid = oMap['personid'];
                }
                if (oMap['dossier'] != undefined) {
                    this.dossier = oMap['dossier'];
                }
                if (oMap['sexe'] != undefined) {
                    this.sexe = oMap['sexe'];
                }
                if (oMap['birthDate'] != undefined) {
                    this.birthDate = oMap['birthDate'];
                }
                if (oMap['etablissement'] != undefined) {
                    this.etablissement = oMap['etablissement'];
                }
                if (oMap['ville'] != undefined) {
                    this.ville = oMap['ville'];
                }
                if (oMap['serieBac'] != undefined) {
                    this.serieBac = oMap['serieBac'];
                }
                if (oMap['optionBac'] != undefined) {
                    this.optionBac = oMap['optionBac'];
                }
                if (oMap['etudesSuperieures'] != undefined) {
                    this.etudesSuperieures = oMap['etudesSuperieures'];
                }
            } // oMap
        } // constructor
    get personid() {
        return (this._personid != undefined) ? this._personid : null;
    }
    set personid(s) {
        if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
            this._personid = s.trim();
        } else {
            this._personid = null;
        }
    }
    get has_personid() {
        return (this.personid != null);
    }
    get departementid() {
        return (this._departementid != undefined) ? this._departementid : null;
    }
    set departementid(s) {
        if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
            this._departementid = s.trim();
        }
    }
    get has_departementid() {
        return (this.departementid != null);
    }
    get is_storeable() {
            return (super.is_storeable && this.has_departementid);
        }
        //
    get dossier() {
        return (this._dossier != undefined) ? this._dossier : null;
    }
    set dossier(s) {
        this._dossier = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_dossier() {
            return (this.dossier != null);
        }
        //
    get sexe() {
        return (this._sexe != undefined) ? this._sexe : null;
    }
    set sexe(s) {
        this._sexe = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_sexe() {
            return (this.sexe != null);
        }
        //
    get birthDate() {
        return (this._date != undefined) ? this._date : null;
    }
    set birthDate(s) {
        this._date = (s != undefined) ? s : null;
    }
    get has_birthDate() {
            return (this.birthDate != null);
        }
        //
    get ville() {
        return (this._ville != undefined) ? this._ville : null;
    }
    set ville(s) {
        this._ville = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_ville() {
            return (this.ville != null);
        }
        //
    get etablissement() {
        return (this._etablissement != undefined) ? this._etablissement : null;
    }
    set etablissement(s) {
        this._etablissement = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_etablissement(): boolean {
            return (this.etablissement != null);
        }
        //
    get serieBac() {
        return (this._seriebac != undefined) ? this._seriebac : null;
    }
    set serieBac(s) {
        this._seriebac = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_serieBac() {
            return (this.serieBac != null);
        }
        //
    get optionBac() {
        return (this._optionbac != undefined) ? this._optionbac : null;
    }
    set optionBac(s) {
        this._optionbac = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_optionBac() {
            return (this.optionBac != null);
        }
        //
    get etudesSuperieures() {
        return (this._sup != undefined) ? this._sup : null;
    }
    set etudesSuperieures(s) {
        this._sup = ((s != undefined) && (s != null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_etudesSuperieures() {
        return (this.etudesSuperieures != null);
    }
    get collection_name() {
        return 'etudiants';
    }
    get is_storeable() {
        return (this.has_departementid && this.has_personid);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap != undefined) && (oMap != null)) {
                if (this.has_departementid) {
                    oMap['departementid'] = this.departementid;
                }
                if (this.has_personid) {
                    oMap['personid'] = this.personid;
                }
                if (this.has_dossier) {
                    oMap['dossier'] = this.dossier;
                }
                if (this.has_sexe) {
                    oMap['sexe'] = this.sexe;
                }
                if (this.has_birthDate) {
                    oMap['birthDate'] = this.birthDate;
                }
                if (this.has_ville) {
                    oMap['ville'] = this.ville;
                }
                if (this.has_etablissement) {
                    oMap['etablissement'] = this.etablissement;
                }
                if (this.has_serieBac) {
                    oMap['serieBac'] = this.serieBac;
                }
                if (this.has_optionBac) {
                    oMap['optionBac'] = this.optionBac;
                }
                if (this.has_etudesSuperieures) {
                    oMap['etudesSuperieures'] = this.etudesSuperieures;
                }
            } // oMap
        } // to_insert_map
} // class Etudiant