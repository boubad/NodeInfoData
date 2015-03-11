// userinfobase.js
//
export class UserInfoBase {
  constructor() {
    this.departements = [];
    this.annees = [];
    this.semestres = [];
    this.unites = [];
    this.groupes = [];
    this.matieres = [];
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
  disconnect() {
    this.departements = [];
    this.annees = [];
    this.semestres = [];
    this.unites = [];
    this.groupes = [];
    this.matieres = [];
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
  get is_connected() {
    return (this.person !== undefined) && (this.person !== null) &&
      (this.person.id !== undefined) && (this.person.id !== null);
  }
  get has_departement() {
    return (this.departement !== undefined) && (this.departement !== null) &&
      (this.departement.id !== undefined) && (this.departement.id !== null);
  }
  get has_annee() {
    return (this.annee !== undefined) && (this.annee !== null) &&
      (this.annee.id !== undefined) && (this.annee.id !== null);
  }
  get has_semestre() {
    return (this.semestre !== undefined) && (this.semestre !== null) &&
      (this.semestre.id !== undefined) && (this.semestre.id !== null);
  }
  get has_unite() {
    return (this.unite !== undefined) && (this.unite !== null) &&
      (this.unite.id !== undefined) && (this.unite.id !== null);
  }
  get has_matiere() {
    return (this.matiere !== undefined) && (this.matiere !== null) &&
      (this.matiere.id !== undefined) && (this.matiere.id !== null);
  }
  get has_groupe() {
    return (this.groupe !== undefined) && (this.groupe !== null) &&
      (this.groupe.id !== undefined) && (this.groupe.id !== null);
  }
  get has_enseignant() {
    return (this.enseignant !== undefined) && (this.enseignant !== null) &&
      (this.enseignant.id !== undefined) && (this.enseignant.id !== null);
  }
  get has_profaffectation() {
    return (this.profaffectation !== undefined) && (this.profaffectation !== null) &&
      (this.profaffectation.id !== undefined) && (this.profaffectation.id !== null);
  }
  get has_groupeevent() {
    return (this.groupeevent !== undefined) && (this.groupeevent !== null) &&
      (this.groupeevent.id !== undefined) && (this.groupeevent.id !== null);
  }
} // class UserInfoBase
