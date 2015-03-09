System.register(["./data/domain/departement", "./data/domain/annee", "./data/domain/semestre", "./data/domain/person", "./data/domain/administrator", "./data/domain/operator", "./data/domain/enseignant", "./data/domain/etudiant"], function (_export) {
    var Departement, Annee, Semestre, Person, Administrator, Operator, Enseignant, Etudiant, _createClass, _classCallCheck, UserInfo;

    return {
        setters: [function (_dataDomainDepartement) {
            Departement = _dataDomainDepartement.Departement;
        }, function (_dataDomainAnnee) {
            Annee = _dataDomainAnnee.Annee;
        }, function (_dataDomainSemestre) {
            Semestre = _dataDomainSemestre.Semestre;
        }, function (_dataDomainPerson) {
            Person = _dataDomainPerson.Person;
        }, function (_dataDomainAdministrator) {
            Administrator = _dataDomainAdministrator.Administrator;
        }, function (_dataDomainOperator) {
            Operator = _dataDomainOperator.Operator;
        }, function (_dataDomainEnseignant) {
            Enseignant = _dataDomainEnseignant.Enseignant;
        }, function (_dataDomainEtudiant) {
            Etudiant = _dataDomainEtudiant.Etudiant;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            UserInfo = _export("UserInfo", (function () {
                function UserInfo() {
                    _classCallCheck(this, UserInfo);

                    this._dep = null;
                    this._annee = null;
                    this._semestre = null;
                    this._admin = null;
                    this._oper = null;
                    this._prof = null;
                    this._etud = null;
                    this._person = null;
                }

                _createClass(UserInfo, {
                    disconnect: { // constructor

                        value: function disconnect() {
                            this._dep = null;
                            this._annee = null;
                            this._semestre = null;
                            this._admin = null;
                            this._oper = null;
                            this._prof = null;
                            this._etud = null;
                            this._person = null;
                        }
                    },
                    person: { // disconnect
                        //

                        get: function () {
                            return this._person;
                        }
                    },
                    has_person: {
                        get: function () {
                            return this.person != null;
                        }
                    },
                    etud: {
                        //

                        get: function () {
                            return this._etud;
                        },
                        set: function (s) {
                            this._etud = s != undefined ? s : null;
                        }
                    },
                    is_etud: {
                        get: function () {
                            return this.etud != null && this.etud.has_id;
                        }
                    },
                    prof: {
                        get: function () {
                            return this._prof;
                        },
                        set: function (s) {
                            this._prof = s != undefined ? s : null;
                        }
                    },
                    is_prof: {
                        get: function () {
                            return this.prof != null && this.prof.has_id;
                        }
                    },
                    admin: {
                        //

                        get: function () {
                            return this._admin;
                        },
                        set: function (s) {
                            this._admin = s != undefined ? s : null;
                        }
                    },
                    is_admin: {
                        get: function () {
                            return this.admin != null && this.admin.has_id;
                        }
                    },
                    oper: {
                        get: function () {
                            return this._oper;
                        },
                        set: function (s) {
                            this._oper = s != undefined ? s : null;
                        }
                    },
                    is_oper: {
                        get: function () {
                            return this.oper != null && this.oper.has_id;
                        }
                    },
                    semestre: {
                        //

                        get: function () {
                            return this._semestre;
                        },
                        set: function (s) {
                            this._semestre = s != undefined ? s : null;
                        }
                    },
                    has_semestre: {
                        get: function () {
                            return this.semestre != null && this.semestre.has_id;
                        }
                    },
                    semestreid: {
                        get: function () {
                            return this.has_semestre ? this.semestre.id : null;
                        }
                    },
                    annee: {
                        //

                        get: function () {
                            return this._annee;
                        },
                        set: function (s) {
                            this._annee = s != undefined ? s : null;
                            this.semestre = null;
                        }
                    },
                    has_annee: {
                        get: function () {
                            return this.annee != null && this.annee.has_id;
                        }
                    },
                    anneeid: {
                        get: function () {
                            return this.has_annee ? this.annee.id : null;
                        }
                    },
                    departement: {
                        //

                        get: function () {
                            return this._dep;
                        },
                        set: function (s) {
                            this._dep = s != undefined ? s : null;
                            this.annee = null;
                        }
                    },
                    has_departement: {
                        get: function () {
                            return this.departement != null && this.departement.has_id;
                        }
                    },
                    departementid: {
                        get: function () {
                            return this.has_departement ? this.departement.id : null;
                        }
                    }
                });

                return UserInfo;
            })());
        }
    };
});
// userinfo.js
//
// class UserInfo
//# sourceMappingURL=data:application/json;base64,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