System.register(["aurelia-http-client", "./datamanagerbase", "../domain/departement", "../domain/person", "../domain/administrator", "../domain/operator", "../domain/enseignant", "../domain/etudiant"], function (_export) {
    var HttpClient, DataManagerBase, Departement, Person, Administrator, Operator, Enseignant, Etudiant, _createClass, _get, _inherits, _classCallCheck, DataService;

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
                    find_person_by_username: { // constructor
                        //

                        value: function find_person_by_username(suser) {
                            var model = new Person({
                                username: ruser
                            });
                            return this.get_one_item(model).then(function (r) {
                                return new Person(r);
                            });
                        }
                    },
                    get_departements_count: { // find_person_by_username
                        //

                        value: function get_departements_count(dep) {
                            var model = dep != undefined && dep != null ? dep : new Departement();
                            return this.get_items_count(model);
                        }
                    },
                    get_departements: { // get_departements_count

                        value: function get_departements(dep, offset, limit) {
                            var model = dep != undefined && dep != null ? dep : new Departement();
                            return this.get_items(model, offset, limit).then(function (dd) {
                                var res = [];
                                for (var i = 0; i < dd.length; ++i) {
                                    var xx = new Departement(dd[i]);
                                    res.push(xx);
                                } // i
                                return res;
                            });
                        }
                    },
                    get_all_departements: { // get_departements

                        value: function get_all_departements() {
                            return this.get_departements();
                        }
                    },
                    maintains_departement: { // get_all_departements

                        value: function maintains_departement(dep) {
                            return this.maintains_item(dep);
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
                            return this.remove_item(dep);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvZGF0YXNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLFVBQVUsRUFJVixlQUFlLEVBSWYsV0FBVyxFQUlYLE1BQU0sRUFJTixhQUFhLEVBSWIsUUFBUSxFQUlSLFVBQVUsRUFJVixRQUFRLGtEQUlDLFdBQVc7Ozs7QUFoQ3BCLHNCQUFVLHNCQUFWLFVBQVU7O0FBSVYsMkJBQWUsb0JBQWYsZUFBZTs7QUFJZix1QkFBVyxzQkFBWCxXQUFXOztBQUlYLGtCQUFNLGlCQUFOLE1BQU07O0FBSU4seUJBQWEsd0JBQWIsYUFBYTs7QUFJYixvQkFBUSxtQkFBUixRQUFROztBQUlSLHNCQUFVLHFCQUFWLFVBQVU7O0FBSVYsb0JBQVEsbUJBQVIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFJQyx1QkFBVztBQUlULHlCQUpGLFdBQVcsQ0FJUixJQUFJLEVBQUU7MENBSlQsV0FBVzs7QUFLWiwrQ0FMQyxXQUFXLDZDQUtOLElBQUksRUFBRSw0QkFBNEIsRUFBRTtpQkFDN0M7OzBCQU5JLFdBQVc7OzZCQUFYLFdBQVc7QUFRcEIsMkNBQXVCOzs7K0JBQUEsaUNBQUMsS0FBSyxFQUFFO0FBQ3ZCLGdDQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUNuQix3Q0FBUSxFQUFFLEtBQUs7NkJBQ2xCLENBQUMsQ0FBQztBQUNILG1DQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ3hDLHVDQUFPLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN4QixDQUFDLENBQUM7eUJBQ047O0FBRUwsMENBQXNCOzs7K0JBQUEsZ0NBQUMsR0FBRyxFQUFFO0FBQ3BCLGdDQUFJLEtBQUssR0FBRyxBQUFDLEFBQUMsR0FBRyxJQUFJLFNBQVMsSUFBTSxHQUFHLElBQUksSUFBSSxBQUFDLEdBQUksR0FBRyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDNUUsbUNBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDdEM7O0FBQ0wsb0NBQWdCOzsrQkFBQSwwQkFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUM3QixnQ0FBSSxLQUFLLEdBQUcsQUFBQyxBQUFDLEdBQUcsSUFBSSxTQUFTLElBQU0sR0FBRyxJQUFJLElBQUksQUFBQyxHQUFJLEdBQUcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQzVFLG1DQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLEVBQUs7QUFDckQsb0NBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLHFDQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNoQyx3Q0FBSSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsdUNBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUNBQ2hCO0FBQ0QsdUNBQU8sR0FBRyxDQUFDOzZCQUNkLENBQUMsQ0FBQzt5QkFDTjs7QUFDTCx3Q0FBb0I7OytCQUFBLGdDQUFFO0FBQ2xCLG1DQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3lCQUNsQzs7QUFDRCx5Q0FBcUI7OytCQUFBLCtCQUFDLEdBQUcsRUFBRTtBQUNuQixtQ0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQzs7QUFDTCwwQ0FBc0I7OytCQUFBLGdDQUFDLEVBQUUsRUFBRTtBQUNuQixnQ0FBSSxBQUFDLEVBQUUsSUFBSSxTQUFTLElBQU0sRUFBRSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ25DLHVDQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNwQywyQ0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lDQUNqQixDQUFDLENBQUM7NkJBQ047QUFDRCxnQ0FBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUM5QixpQ0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDZCxtQ0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBSztBQUMzQyxvQ0FBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2Qsb0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUNqQyxzQ0FBRSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUMzQjtBQUNELHVDQUFPLEVBQUUsQ0FBQzs2QkFDYixDQUFDLENBQUM7eUJBQ047O0FBQ0wsc0NBQWtCOzsrQkFBQSw0QkFBQyxHQUFHLEVBQUU7QUFDaEIsbUNBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDaEM7QUFBQTs7O0FBdkRFLDBCQUFNOytCQUFBLGtCQUFHO0FBQ1osbUNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdkI7Ozs7dUJBSFEsV0FBVztlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9zZXJ2aWNlcy9kYXRhc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9