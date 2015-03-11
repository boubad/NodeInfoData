// userinfobase.js
//
export class UserInfoBase {
    constructor(){
        this.person = null;
        this.departement = null;
        this.annee = null;
        this.semestre = null;
        this.unite = null;
        this.matiere = null;
        this.groupe = null;
        this.enseignant = null;
        this.profaffectation = null;
        this.groupeevent = null;
    }
    disconnect(){
        this.person = null;
        this.departement = null;
        this.annee = null;
        this.semestre = null;
        this.unite = null;
        this.matiere = null;
        this.groupe = null;
        this.enseignant = null;
        this.profaffectation = null;
        this.groupeevent = null;
    }
}// class UserInfoBase
