System.register(["aurelia-http-client", "./datamanagerbase", "../domain/departement", "../domain/person", "../domain/administrator", "../domain/operator", "../domain/enseignant", "../domain/etudiant", "../domain/annee", "../domain/semestre"], function (_export) {
    var HttpClient, DataManagerBase, Departement, Person, Administrator, Operator, Enseignant, Etudiant, Annees, Semestre, _createClass, _get, _inherits, _classCallCheck, DataService;

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_datamanagerbase) {
            DataManagerBase = _datamanagerbase.DataManagerBase;
        }, function (_domainDepartement) {
            Departement = _domainDepartement.Departement;
        }, function (_domainPerson) {
            Person = _domainPerson.Person;
        }, function (_domainAdministrator) {
            Administrator = _domainAdministrator.Administrator;
        }, function (_domainOperator) {
            Operator = _domainOperator.Operator;
        }, function (_domainEnseignant) {
            Enseignant = _domainEnseignant.Enseignant;
        }, function (_domainEtudiant) {
            Etudiant = _domainEtudiant.Etudiant;
        }, function (_domainAnnee) {
            Annees = _domainAnnee.Annees;
        }, function (_domainSemestre) {
            Semestre = _domainSemestre.Semestre;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DataService = _export("DataService", (function (_DataManagerBase) {
                function DataService(http) {
                    _classCallCheck(this, DataService);

                    _get(Object.getPrototypeOf(DataService.prototype), "constructor", this).call(this, http, "http://localhost:52999/api");
                }

                _inherits(DataService, _DataManagerBase);

                _createClass(DataService, {
                    get_person_departements: { // constructor
                        //

                        value: function get_person_departements(p) {
                            if (p == undefined || p == null) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            if (!p.has_id) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            if (p.is_admin) {
                                return this.get_all_departements();
                            }
                            //
                            return new Promise(function (resolve, reject) {
                                resolve([]);
                            });
                        }
                    },
                    get_departement_annees: { // get_person_departements
                        //

                        value: function get_departement_annees(dep) {
                            if (dep == undefined || dep == null) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            if (!dep.has_id) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            var model = new Annee({
                                departementid: dep.id
                            });
                            return this.get_items(model);
                        }
                    },
                    get_annee_semestres: { // get_departement_annees
                        //

                        value: function get_annee_semestres(p) {
                            if (p == undefined || p == null) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            if (!p.has_id) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            var model = new Semestre({
                                anneeid: p.id
                            });
                            return this.get_items(model);
                        }
                    },
                    find_person_by_username_password: { // get_annee_semestres
                        //

                        value: function find_person_by_username_password(suser, spass) {
                            var model = new Person({
                                username: ruser
                            });
                            var self = this;
                            return this.get_one_item(model).then(function (r) {
                                var vRet = null;
                                if (r != undefined && r != null) {
                                    if (r.check_password(spass)) {
                                        vRet = r;
                                    }
                                } // r
                                return vRet;
                            });
                        }
                    },
                    get_departements_count: { // find_person_by_username
                        //

                        value: function get_departements_count(dep) {
                            var model = new Departement(dep);
                            return this.get_items_count(model);
                        }
                    },
                    get_departements: { // get_departements_count

                        value: function get_departements(dep, offset, limit) {
                            var model = new Departement(dep);
                            return this.get_items(model, offset, limit);
                        }
                    },
                    get_all_departements: { // get_departements

                        value: function get_all_departements() {
                            return this.get_departements();
                        }
                    },
                    maintains_departement: { // get_all_departements

                        value: function maintains_departement(dep) {
                            var model = new Departement(dep);
                            return this.maintains_item(model);
                        }
                    },
                    find_departement_by_id: { // maindains_departement

                        value: function find_departement_by_id(id) {
                            if (id == undefined || id == null) {
                                return new Promise(function (resolve, reject) {
                                    resolve(null);
                                });
                            }
                            var model = new Departement();
                            model.id = id;
                            return this.find_item_by_id(model).then(function (r) {
                                var xr = null;
                                if (r != undefined && r != null) {
                                    xr = new Departement(r);
                                }
                                return xr;
                            });
                        }
                    },
                    remove_departement: { // find_departement_by_id

                        value: function remove_departement(dep) {
                            var model = new Departement(dep);
                            return this.remove_item(model);
                        } // maindains_departements

                    }
                }, {
                    inject: {
                        value: function inject() {
                            return [HttpClient];
                        }
                    }
                });

                return DataService;
            })(DataManagerBase));
        }
    };
});
//dataservice.js
//
// class DataService
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvZGF0YXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLFVBQVUsRUFJVixlQUFlLEVBSWYsV0FBVyxFQUlYLE1BQU0sRUFJTixhQUFhLEVBSWIsUUFBUSxFQUlSLFVBQVUsRUFJVixRQUFRLEVBSVIsTUFBTSxFQUlOLFFBQVEsa0RBSUMsV0FBVzs7OztBQXhDcEIsc0JBQVUsc0JBQVYsVUFBVTs7QUFJViwyQkFBZSxvQkFBZixlQUFlOztBQUlmLHVCQUFXLHNCQUFYLFdBQVc7O0FBSVgsa0JBQU0saUJBQU4sTUFBTTs7QUFJTix5QkFBYSx3QkFBYixhQUFhOztBQUliLG9CQUFRLG1CQUFSLFFBQVE7O0FBSVIsc0JBQVUscUJBQVYsVUFBVTs7QUFJVixvQkFBUSxtQkFBUixRQUFROztBQUlSLGtCQUFNLGdCQUFOLE1BQU07O0FBSU4sb0JBQVEsbUJBQVIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFJQyx1QkFBVztBQUlULHlCQUpGLFdBQVcsQ0FJUixJQUFJLEVBQUU7MENBSlQsV0FBVzs7QUFLWiwrQ0FMQyxXQUFXLDZDQUtOLElBQUksRUFBRSw0QkFBNEIsRUFBRTtpQkFDN0M7OzBCQU5JLFdBQVc7OzZCQUFYLFdBQVc7QUFRcEIsMkNBQXVCOzs7K0JBQUEsaUNBQUMsQ0FBQyxFQUFFO0FBQ25CLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDakMsdUNBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLDJDQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7aUNBQ2YsQ0FBQyxDQUFDOzZCQUNOO0FBQ0QsZ0NBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ1gsdUNBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLDJDQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7aUNBQ2YsQ0FB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S0FBSyxFQUFFO0FBQzdCLGdDQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxtQ0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7eUJBQy9DOztBQUNMLHdDQUFvQjs7K0JBQUEsZ0NBQUc7QUFDZixtQ0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt5QkFDbEM7O0FBQ0wseUNBQXFCOzsrQkFBQSwrQkFBQyxHQUFHLEVBQUU7QUFDbkIsZ0NBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLG1DQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ3JDOztBQUNMLDBDQUFzQjs7K0JBQUEsZ0NBQUMsRUFBRSxFQUFFO0FBQ25CLGdDQUFJLEFBQUMsRUFBRSxJQUFJLFNBQVMsSUFBTSxFQUFFLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDbkMsdUNBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLDJDQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUNBQ2pCLENBQUMsQ0FBQzs2QkFDTjtBQUNELGdDQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQzlCLGlDQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNkLG1DQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQzNDLG9DQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZCxvQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ2pDLHNDQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQzNCO0FBQ0QsdUNBQU8sRUFBRSxDQUFDOzZCQUNiLENBQUMsQ0FBQzt5QkFDTjs7QUFDTCxzQ0FBa0I7OytCQUFBLDRCQUFDLEdBQUcsRUFBRTtBQUNoQixnQ0FBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsbUNBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDbEM7QUFBQTs7O0FBL0dFLDBCQUFNOytCQUFBLGtCQUFHO0FBQ1osbUNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdkI7Ozs7dUJBSFEsV0FBVztlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9zZXJ2aWNlcy9kYXRhc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
