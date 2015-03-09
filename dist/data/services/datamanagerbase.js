System.register(["aurelia-http-client", "../domain/administrator", "../domain/annee", "../domain/attacheddoc", "../domain/departement", "../domain/enseignant", "../domain/etudaffectation", "../domain/etudevent", "../domain/etudiant", "../domain/groupe", "../domain/groupeevent", "../domain/matiere", "../domain/operator", "../domain/person", "../domain/profaffectation", "../domain/semestre", "../domain/unite"], function (_export) {
    var HttpClient, Administrator, Annee, AttachedDoc, Departement, Enseignant, EtudAffectation, EtudEvent, Etudiant, Groupe, GroupeEvent, Matiere, Operator, Person, ProfAffectation, Semestre, Unite, _createClass, _classCallCheck, DataManagerBase;

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_domainAdministrator) {
            Administrator = _domainAdministrator.Administrator;
        }, function (_domainAnnee) {
            Annee = _domainAnnee.Annee;
        }, function (_domainAttacheddoc) {
            AttachedDoc = _domainAttacheddoc.AttachedDoc;
        }, function (_domainDepartement) {
            Departement = _domainDepartement.Departement;
        }, function (_domainEnseignant) {
            Enseignant = _domainEnseignant.Enseignant;
        }, function (_domainEtudaffectation) {
            EtudAffectation = _domainEtudaffectation.EtudAffectation;
        }, function (_domainEtudevent) {
            EtudEvent = _domainEtudevent.EtudEvent;
        }, function (_domainEtudiant) {
            Etudiant = _domainEtudiant.Etudiant;
        }, function (_domainGroupe) {
            Groupe = _domainGroupe.Groupe;
        }, function (_domainGroupeevent) {
            GroupeEvent = _domainGroupeevent.GroupeEvent;
        }, function (_domainMatiere) {
            Matiere = _domainMatiere.Matiere;
        }, function (_domainOperator) {
            Operator = _domainOperator.Operator;
        }, function (_domainPerson) {
            Person = _domainPerson.Person;
        }, function (_domainProfaffectation) {
            ProfAffectation = _domainProfaffectation.ProfAffectation;
        }, function (_domainSemestre) {
            Semestre = _domainSemestre.Semestre;
        }, function (_domainUnite) {
            Unite = _domainUnite.Unite;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DataManagerBase = _export("DataManagerBase", (function () {
                function DataManagerBase(http, baseurl) {
                    _classCallCheck(this, DataManagerBase);

                    var base = "http://localhost:52999/api";
                    this._baseurl = "http://localhost:52999/api";
                    this.client = http;
                    if (baseurl != undefined && baseurl != null) {
                        base = baseurl;
                    }
                    this._baseurl = base;
                    this.client.configure(function (x) {
                        x.withBaseUrl(base);
                        x.withHeader("Content-Type", "application/json");
                    });
                }

                _createClass(DataManagerBase, {
                    create_item: {
                        //

                        value: function create_item(oMap) {
                            if (oMap == undefined || oMap == null) {
                                return null;
                            }
                            if (oMap.type == undefined || oMap.type == null) {
                                return null;
                            }
                            var t = oMap.type;
                            t = t.trim().toLowerCase();
                            if (t == "administrator") {
                                return new Administrator(oMap);
                            } else if (t == "annee") {
                                return new Annee(oMap);
                            } else if (t == "attacheddoc") {
                                return new AttachedDoc(oMap);
                            } else if (t == "departement") {
                                return new Departement(oMap);
                            } else if (t == "enseignant") {
                                return new Enseignant(oMap);
                            } else if (t == "etudaffectation") {
                                return new EtudAffectation(oMap);
                            } else if (t == "etudevent") {
                                return new EtudEvent(oMap);
                            } else if (t == "etudiant") {
                                return new Etudiant(oMap);
                            } else if (t == "groupe") {
                                return new Groupe(oMap);
                            } else if (t == "groupeevent") {
                                return new GroupeEvent(oMap);
                            } else if (t == "matiere") {
                                return new Matiere(oMap);
                            } else if (t == "operator") {
                                return new Operator(oMap);
                            } else if (t == "person") {
                                return new Person(oMap);
                            } else if (t == "profaffectation") {
                                return new ProfAffectation(oMap);
                            } else if (t == "semestre") {
                                return new Semestre(oMap);
                            } else if (t == "unite") {
                                return new Unite(oMap);
                            }
                            return null;
                        }
                    },
                    convert_items: { // create_Item

                        value: function convert_items(dd) {
                            var vRet = [];
                            if (dd != undefined && dd != null && dd.length > 0) {
                                for (var i = 0; i < dd.length; ++i) {
                                    var r = this.create_item(dd[i]);
                                    if (r != undefined && r != null) {
                                        vRet.push(r);
                                    }
                                } // i
                            }
                            return vRet;
                        }
                    },
                    baseUrl: { // convert_items
                        //

                        get: function () {
                            return this._baseurl != undefined ? this._baseurl : null;
                        }
                    },
                    get_items_count: { // form_url
                        //

                        value: function get_items_count(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.collection_name == undefined || item.collection_name == null || item.to_fetch_map == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item is not a BaseItem."));
                                });
                            }
                            var nRet = 0;
                            var data = {};
                            item.to_fetch_map(data);
                            data.$count = 1;
                            var url = this.form_url(item.collection_name, null, data);
                            return this.client.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    nRet = rsp.content.count;
                                }
                                return nRet;
                            });
                        }
                    },
                    get_items: { // get_items_count
                        //

                        value: function get_items(item, offset, limit) {
                            var _this = this;

                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.collection_name == undefined || item.collection_name == null || item.to_fetch_map == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item is not a BaseItem."));
                                });
                            }
                            var data = {};
                            item.to_fetch_map(data);
                            if (offset != undefined && offset != null && offset >= 0) {
                                data.$skip = offset;
                            }
                            if (limit != undefined && limit != null && limit > 0) {
                                data.$limit = limit;
                            }
                            var url = this.form_url(item.collection_name, null, data);
                            return this.client.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return _this.convert_items(rsp.content);
                                } else {
                                    return [];
                                }
                            });
                        }
                    },
                    get_one_item: { // get_items

                        value: function get_one_item(item) {
                            var _this = this;

                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.collection_name == undefined || item.collection_name == null || item.to_fetch_map == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item is not a BaseItem."));
                                });
                            }
                            var data = {};
                            item.to_fetch_map(data);
                            var url = this.form_url(item.collection_name, null, data);
                            return this.client.get(url).then(function (rsp) {
                                var vRet = null;
                                if (rsp.isSuccess) {
                                    var xx = rsp.content;
                                    if (xx != undefined && xx != null && xx.length > 0) {
                                        vRet = xx[0];
                                    }
                                }
                                return _this.create_item(vRet);
                            });
                        }
                    },
                    find_item_by_id: { // get_one_item

                        value: function find_item_by_id(item) {
                            var _this = this;

                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.collection_name == undefined || item.collection_name == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            var id = item.id;
                            var url = this.form_url(item.collection_name, [id]);
                            return this.client.get(url).then(function (rsp) {
                                var vRet = null;
                                if (rsp.isSuccess) {
                                    var xx = rsp.content;
                                    if (xx != undefined && xx != null && xx.length > 0) {
                                        vRet = xx[0];
                                    }
                                }
                                return _this.create_item(vRet);
                            });
                        }
                    },
                    insert_item: { // find_item_byid

                        value: function insert_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.to_insert_map == undefined || item.collection_name == undefined || item.collection_name == null || item.is_storeable == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (!item.is_storeable) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item not storeable."));
                                });
                            }
                            var data = {};
                            item.to_insert_map(data);
                            var url = this.form_url(item.collection_name);
                            return this.client.post(url, data).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    update_item: { // insert_item

                        value: function update_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.to_insert_map == undefined || item.collection_name == undefined || item.collection_name == null || item.is_storeable == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (!item.is_storeable) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item not storeable."));
                                });
                            }
                            var data = {};
                            item.to_insert_map(data);
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.client.put(url, data).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    remove_item: { // update_item

                        value: function remove_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.collection_name == undefined || item.collection_name == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.client["delete"](url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    maintains_item: { // remove_item

                        value: function maintains_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.has_id == undefined || item.to_insert_map == undefined || item.collection_name == undefined || item.collection_name == null || item.is_storeable == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (!item.is_storeable) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item not storeable."));
                                });
                            }
                            var data = {};
                            item.to_insert_map(data);
                            if (item.has_id) {
                                var url = this.form_url(item.collection_name, [item.id]);
                                return this.client.put(url, data).then(function (rsp) {
                                    if (rsp.isSuccess) {
                                        return rsp.content;
                                    } else {
                                        throw new Error(rsp.statusText);
                                    }
                                });
                            } else {
                                var url = this.form_url(item.collection_name);
                                return this.client.post(url, data).then(function (rsp) {
                                    if (rsp.isSuccess) {
                                        return rsp.content;
                                    } else {
                                        throw new Error(rsp.statusText);
                                    }
                                });
                            }
                        }
                    },
                    get_items_array: { // maintains_item

                        value: function get_items_array(collectionName, ids) {
                            if (collectionName == undefined || collectionName == null || ids == undefined || ids == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid argument(s)"));
                                });
                            }
                            var n = ids.length;
                            var xx = [];
                            for (var i = 0; i < n; ++i) {
                                var x = ids[i];
                                if (x != undefined && x != null && x.trim().length > 0) {
                                    xx.push(x.trim());
                                }
                            } // i
                            var nn = xx.length;
                            if (nn < 1) {
                                return new Promise(function (resolve, reject) {
                                    resolve([]);
                                });
                            }
                            var self = this;
                            return new Promise(function (resolve, reject) {
                                var xp = [];
                                for (var j = 0; j < nn; ++j) {
                                    var url = self.form_url(collectionName, [xx[j]]);
                                    xp.push(self.client.get(url));
                                } // j
                                var nx = xp.length;
                                var xr = [];
                                for (var k = 0; k < nx; ++k) {
                                    (function (k) {
                                        xp[k].then(function (r) {
                                            xr.push(self.create_item(r));
                                            if (k == nx - 1) {
                                                resolve(xr);
                                            }
                                        })["catch"](function (err) {
                                            if (k == nx - 1) {
                                                resolve(xr);
                                            }
                                        });
                                    })(k);
                                } // k
                            });
                        } // get_items_array

                    }
                }, {
                    form_url: { // baseUrl
                        //

                        value: function form_url(prefix, params, query) {
                            var sRet = "";
                            if (prefix != undefined && prefix != null) {
                                sRet = prefix;
                            }
                            if (params != undefined && params != null) {
                                var n = params.length;
                                for (var i = 0; i < n; ++i) {
                                    sRet = sRet + "/" + encodeURIComponent(params[i]);
                                } // i
                            }
                            if (query != undefined && query != null) {
                                var bFirst = true;
                                for (var key in query) {
                                    var v = query[key];
                                    if (v != null) {
                                        if (bFirst) {
                                            bFirst = false;
                                            sRet = sRet + "?";
                                        } else {
                                            sRet = sRet + "&";
                                        }
                                        sRet = sRet + key + "=" + encodeURIComponent(v);
                                    } // v
                                } // key
                            } // query
                            return sRet;
                        }
                    }
                });

                return DataManagerBase;
            })());
        }
    };
});
// datamanagerbase.js

//
// class DataManagerBase
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvZGF0YW1hbmFnZXJiYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxVQUFVLEVBSU4sYUFBYSxFQUNiLEtBQUssRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFVBQVUsRUFDVixlQUFlLEVBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLGVBQWUsRUFDZixRQUFRLEVBQ1IsS0FBSyxpQ0FFQSxlQUFlOzs7O0FBckJ4QixzQkFBVSxzQkFBVixVQUFVOztBQUlOLHlCQUFhLHdCQUFiLGFBQWE7O0FBQ2IsaUJBQUssZ0JBQUwsS0FBSzs7QUFDTCx1QkFBVyxzQkFBWCxXQUFXOztBQUNYLHVCQUFXLHNCQUFYLFdBQVc7O0FBQ1gsc0JBQVUscUJBQVYsVUFBVTs7QUFDViwyQkFBZSwwQkFBZixlQUFlOztBQUNmLHFCQUFTLG9CQUFULFNBQVM7O0FBQ1Qsb0JBQVEsbUJBQVIsUUFBUTs7QUFDUixrQkFBTSxpQkFBTixNQUFNOztBQUNOLHVCQUFXLHNCQUFYLFdBQVc7O0FBQ1gsbUJBQU8sa0JBQVAsT0FBTzs7QUFDUCxvQkFBUSxtQkFBUixRQUFROztBQUNSLGtCQUFNLGlCQUFOLE1BQU07O0FBQ04sMkJBQWUsMEJBQWYsZUFBZTs7QUFDZixvQkFBUSxtQkFBUixRQUFROztBQUNSLGlCQUFLLGdCQUFMLEtBQUs7Ozs7Ozs7Ozs7QUFFQSwyQkFBZTtBQUNiLHlCQURGLGVBQWUsQ0FDWixJQUFJLEVBQUUsT0FBTyxFQUFFOzBDQURsQixlQUFlOztBQUVoQix3QkFBSSxJQUFJLEdBQUcsNEJBQTRCLENBQUM7QUFDeEMsd0JBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUM7QUFDN0Msd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLEFBQUMsT0FBTyxJQUFJLFNBQVMsSUFBTSxPQUFPLElBQUksSUFBSSxBQUFD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QUMsQUFBQyxFQUFDO0FBQ2IsdURBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzs2Q0FDZjt5Q0FDSixDQUFDLFNBQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUNYLGdEQUFJLENBQUMsSUFBSyxFQUFFLEdBQUUsQ0FBQyxBQUFDLEVBQUM7QUFDZCx1REFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZDQUNmO3lDQUNKLENBQUMsQ0FBQzt1Q0FWQyxDQUFDO2lDQVdUO0FBQUEsNkJBQ0osQ0FBQyxDQUFDO3lCQUNMO0FBQUE7OztBQWxTTSw0QkFBUTs7OytCQUFBLGtCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQy9CLGdDQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxnQ0FBSSxBQUFDLE1BQU0sSUFBSSxTQUFTLElBQU0sTUFBTSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQzNDLG9DQUFJLEdBQUcsTUFBTSxDQUFDOzZCQUNqQjtBQUNELGdDQUFJLEFBQUMsTUFBTSxJQUFJLFNBQVMsSUFBTSxNQUFNLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDM0Msb0NBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdEIscUNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDeEIsd0NBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUNyRDtBQUFBLDZCQUNKO0FBQ0QsZ0NBQUksQUFBQyxLQUFLLElBQUksU0FBUyxJQUFNLEtBQUssSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN6QyxvQ0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLHFDQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNuQix3Q0FBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLHdDQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDWCw0Q0FBSSxNQUFNLEVBQUU7QUFDUixrREFBTSxHQUFHLEtBQUssQ0FBQztBQUNmLGdEQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQzt5Q0FDckIsTUFBTTtBQUNILGdEQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQzt5Q0FDckI7QUFDRCw0Q0FBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO3FDQUNuRDtBQUFBLGlDQUNKO0FBQUEsNkJBQ0o7QUFDRCxtQ0FBTyxJQUFJLENBQUM7eUJBQ2Y7Ozs7dUJBeEdJLGVBQWUiLCJmaWxlIjoiZGF0YS9zZXJ2aWNlcy9kYXRhbWFuYWdlcmJhc2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==