System.register(["./data/domain/departement", "./data/domain/annee", "./data/domain/semestre", "./data/domain/person", "./data/domain/administrator", "./data/domain/operator", "./data/domain/enseignant", "./data/domain/etudiant", "./data/services/dataservice"], function (_export) {
    var Departement, Annee, Semestre, Person, Administrator, Operator, Enseignant, Etudiant, DataService, _createClass, _classCallCheck, UserInfo;

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
        }, function (_dataServicesDataservice) {
            DataService = _dataServicesDataservice.DataService;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            UserInfo = _export("UserInfo", (function () {
                //

                function UserInfo(dataService) {
                    _classCallCheck(this, UserInfo);

                    this.dataService = dataService;
                    this._deps = [];
                    this._annees = [];
                    this._semestres = [];
                    this._dep = null;
                    this._annee = null;
                    this._semestre = null;
                    this._person = null;
                }

                _createClass(UserInfo, {
                    disconnect: { // constructor

                        value: function disconnect() {
                            this._deps = [];
                            this._annees = [];
                            this._semestres = [];
                            this._dep = null;
                            this._annee = null;
                            this._semestre = null;
                            this._person = null;
                        }
                    },
                    connect: { // disconnect
                        //

                        value: function connect(username, password) {
                            this.disconnect();
                            var self = this;
                            this.dataService.find_person_by_username_password(username, password).then(function (p) {
                                self.person = p;
                            });
                        }
                    },
                    departements: { // connect
                        //

                        get: function () {
                            return this._deps != undefined && this._deps != null ? this._deps : [];
                        },
                        set: function (dd) {
                            this._deps = dd;
                            this.departement = null;
                        }
                    },
                    annees: {
                        get: function () {
                            return this._annees != undefined && this._annees != null ? this._annees : [];
                        },
                        set: function (dd) {
                            this._annees = dd;
                            this.annee = null;
                        }
                    },
                    semestres: {
                        get: function () {
                            return this._semestres != undefined && this._semestres != null ? this._semestres : [];
                        },
                        set: function (dd) {
                            this._semestres = dd;
                            this.semestre = null;
                        }
                    },
                    person: {
                        get: function () {
                            return this._person;
                        },
                        set: function (p) {
                            this._person = p;
                            var self = this;
                            this.dataService.get_person_departements(self.person).then(function (dd) {
                                self.departements = dd;
                            });
                        }
                    },
                    has_person: {
                        get: function () {
                            return this.person != null && this.personid.has_id;
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
                            var self = this;
                            this.dataService.get_annee_semestres(self.annee).then(function (ss) {
                                self.semestres = ss;
                            });
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
                            return this._dep != undefined ? this._dep : null;
                        },
                        set: function (s) {
                            this._dep = s != undefined ? s : null;
                            var self = this;
                            this.dataService.get_departement_annees(self.departement).then(function (aa) {
                                self.annees = aa;
                            });
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
                }, {
                    inject: {
                        //

                        value: function inject() {
                            return [DataService];
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

//
// class UserInfo
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJpbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxXQUFXLEVBSVgsS0FBSyxFQUlMLFFBQVEsRUFJUixNQUFNLEVBSU4sYUFBYSxFQUliLFFBQVEsRUFJUixVQUFVLEVBSVYsUUFBUSxFQUtSLFdBQVcsaUNBSUYsUUFBUTs7OztBQXJDakIsdUJBQVcsMEJBQVgsV0FBVzs7QUFJWCxpQkFBSyxvQkFBTCxLQUFLOztBQUlMLG9CQUFRLHVCQUFSLFFBQVE7O0FBSVIsa0JBQU0scUJBQU4sTUFBTTs7QUFJTix5QkFBYSw0QkFBYixhQUFhOztBQUliLG9CQUFRLHVCQUFSLFFBQVE7O0FBSVIsc0JBQVUseUJBQVYsVUFBVTs7QUFJVixvQkFBUSx1QkFBUixRQUFROztBQUtSLHVCQUFXLDRCQUFYLFdBQVc7Ozs7Ozs7Ozs7QUFJRixvQkFBUTs7O0FBTU4seUJBTkYsUUFBUSxDQU1MLFdBQVcsRUFBRTswQ0FOaEIsUUFBUTs7QUFPVCx3QkFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0Isd0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLHdCQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQix3QkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUN2Qjs7NkJBZkksUUFBUTtBQWlCakIsOEJBQVU7OytCQUFBLHNCQUFHO0FBQ0wsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGdDQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixnQ0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGdDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixnQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdEIsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3lCQUN2Qjs7QUFFTCwyQkFBTzs7OytCQUFBLGlCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDcEIsZ0NBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQixnQ0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLGdDQUFJLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUs7QUFDOUUsb0NBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzZCQUNuQixDQUFDLENBQUM7eUJBQ047O0FBS0QsZ0NBQVk7Ozs2QkFIQSxZQUFHO0FBQ2YsbUNBQU8sQUFBQyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFNLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxBQUFDLEdBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7eUJBQ2hGOzZCQUNlLFVBQUMsRUFBRSxFQUFFO0FBQ2pCLGdDQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixnQ0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7eUJBQzNCOztBQUlHLDBCQUFNOzZCQUhBLFlBQUc7QUFDVCxtQ0FBTyxBQUFDLEFBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLElBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEFBQUMsR0FBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt5QkFDdEY7NkJBQ1MsVUFBQyxFQUFFLEVBQUU7QUFDWCxnQ0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUNyQjs7QUFJRyw2QkFBUzs2QkFIQSxZQUFHO0FBQ1osbUNBQU8sQUFBQyxBQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFNLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxBQUFDLEdBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7eUJBQy9GOzZCQUNZLFVBQUMsRUFBRSxFQUFFO0FBQ2QsZ0NBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt5QkFDeEI7O0FBSUcsMEJBQU07NkJBSEEsWUFBRztBQUNULG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQ3ZCOzZCQUNTLFVBQUMsQ0FBQyxFQUFFO0FBQ1YsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLGdDQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0NBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBSztBQUMvRCxvQ0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7NkJBQzFCLENBQUMsQ0FBQzt5QkFDTjs7QUFDRyw4QkFBVTs2QkFBQSxZQUFHO0FBQ1QsbUNBQVEsQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBRTt5QkFDMUQ7O0FBS0QsNEJBQVE7Ozs2QkFIQSxZQUFHO0FBQ1gsbUNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDekI7NkJBQ1csVUFBQyxDQUFDLEVBQUU7QUFDWixnQ0FBSSxDQUFDLFNBQVMsR0FBRyxBQUFDLENBQUMsSUFBSSxTQUFTLEdBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDaEQ7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRztBQUNmLG1DQUFRLEFBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUU7eUJBQzVEOztBQUNHLDhCQUFVOzZCQUFBLFlBQUc7QUFDVCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxZQUFZLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO3lCQUN4RDs7QUFLRCx5QkFBSzs7OzZCQUhBLFlBQUc7QUFDUixtQ0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO3lCQUN0Qjs2QkFDUSxVQUFDLENBQUMsRUFBRTtBQUNULGdDQUFJLENBQUMsTUFBTSxHQUFHLEFBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzFDLGdDQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0NBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsRUFBSztBQUMxRCxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7NkJBQ3ZCLENBQUMsQ0FBQzt5QkFDTjs7QUFDRyw2QkFBUzs2QkFBQSxZQUFHO0FBQ1osbUNBQVEsQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRTt5QkFDdEQ7O0FBQ0csMkJBQU87NkJBQUEsWUFBRztBQUNOLG1DQUFPLEFBQUMsSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ2xEOztBQUtELCtCQUFXOzs7NkJBSEEsWUFBRztBQUNkLG1DQUFPLEFBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7eUJBQ3REOzZCQUNjLFVBQUMsQ0FBQyxFQUFFO0FBQ2YsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsQUFBQyxDQUFDLElBQUksU0FBUyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDeEMsZ0NBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixnQ0FBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFLO0FBQ25FLG9DQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs2QkFDcEIsQ0FBQyxDQUFDO3lCQUNOOztBQUNHLG1DQUFlOzZCQUFBLFlBQUc7QUFDbEIsbUNBQVEsQUFBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBRTt5QkFDbEU7O0FBQ0csaUNBQWE7NkJBQUEsWUFBRztBQUNoQixtQ0FBTyxBQUFDLElBQUksQ0FBQyxlQUFlLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO3lCQUM5RDs7O0FBakhNLDBCQUFNOzs7K0JBQUEsa0JBQUc7QUFDUixtQ0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3lCQUN4Qjs7Ozt1QkFKSSxRQUFRIiwiZmlsZSI6InVzZXJpbmZvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
