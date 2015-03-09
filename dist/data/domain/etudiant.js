System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, Etudiant;

    return {
        setters: [function (_descriptionitem) {
            DescriptionItem = _descriptionitem.DescriptionItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Etudiant = _export("Etudiant", (function (_DescriptionItem) {
                function Etudiant(oMap) {
                    _classCallCheck(this, Etudiant);

                    _get(Object.getPrototypeOf(Etudiant.prototype), "constructor", this).call(this, oMap);
                    this.type = "etudiant";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.personid != undefined) {
                            this.personid = oMap.personid;
                        }
                        if (oMap.dossier != undefined) {
                            this.dossier = oMap.dossier;
                        }
                        if (oMap.sexe != undefined) {
                            this.sexe = oMap.sexe;
                        }
                        if (oMap.birthDate != undefined) {
                            this.birthDate = oMap.birthDate;
                        }
                        if (oMap.etablissement != undefined) {
                            this.etablissement = oMap.etablissement;
                        }
                        if (oMap.ville != undefined) {
                            this.ville = oMap.ville;
                        }
                        if (oMap.serieBac != undefined) {
                            this.serieBac = oMap.serieBac;
                        }
                        if (oMap.optionBac != undefined) {
                            this.optionBac = oMap.optionBac;
                        }
                        if (oMap.etudesSuperieures != undefined) {
                            this.etudesSuperieures = oMap.etudesSuperieures;
                        }
                    } // oMap
                }

                _inherits(Etudiant, _DescriptionItem);

                _createClass(Etudiant, {
                    personid: { // constructor

                        get: function () {
                            return this._personid != undefined ? this._personid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._personid = s.trim();
                            } else {
                                this._personid = null;
                            }
                        }
                    },
                    has_personid: {
                        get: function () {
                            return this.personid != null;
                        }
                    },
                    departementid: {
                        get: function () {
                            return this._departementid != undefined ? this._departementid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._departementid = s.trim();
                            }
                        }
                    },
                    has_departementid: {
                        get: function () {
                            return this.departementid != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return this.has_departementid && this.has_personid;
                        }
                    },
                    dossier: {
                        //

                        get: function () {
                            return this._dossier != undefined ? this._dossier : null;
                        },
                        set: function (s) {
                            this._dossier = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_dossier: {
                        get: function () {
                            return this.dossier != null;
                        }
                    },
                    sexe: {
                        //

                        get: function () {
                            return this._sexe != undefined ? this._sexe : null;
                        },
                        set: function (s) {
                            this._sexe = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_sexe: {
                        get: function () {
                            return this.sexe != null;
                        }
                    },
                    birthDate: {
                        //

                        get: function () {
                            return this._date != undefined ? this._date : null;
                        },
                        set: function (s) {
                            this._date = s != undefined ? s : null;
                        }
                    },
                    has_birthDate: {
                        get: function () {
                            return this.birthDate != null;
                        }
                    },
                    ville: {
                        //

                        get: function () {
                            return this._ville != undefined ? this._ville : null;
                        },
                        set: function (s) {
                            this._ville = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_ville: {
                        get: function () {
                            return this.ville != null;
                        }
                    },
                    etablissement: {
                        //

                        get: function () {
                            return this._etablissement != undefined ? this._etablissement : null;
                        },
                        set: function (s) {
                            this._etablissement = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_etablissement: {
                        get: function () {
                            return this.etablissement != null;
                        }
                    },
                    serieBac: {
                        //

                        get: function () {
                            return this._seriebac != undefined ? this._seriebac : null;
                        },
                        set: function (s) {
                            this._seriebac = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_serieBac: {
                        get: function () {
                            return this.serieBac != null;
                        }
                    },
                    optionBac: {
                        //

                        get: function () {
                            return this._optionbac != undefined ? this._optionbac : null;
                        },
                        set: function (s) {
                            this._optionbac = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_optionBac: {
                        get: function () {
                            return this.optionBac != null;
                        }
                    },
                    etudesSuperieures: {
                        //

                        get: function () {
                            return this._sup != undefined ? this._sup : null;
                        },
                        set: function (s) {
                            this._sup = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_etudesSuperieures: {
                        get: function () {
                            return this.etudesSuperieures != null;
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "etudiants";
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Etudiant.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
                                }
                                if (this.has_personid) {
                                    oMap.personid = this.personid;
                                }
                                if (this.has_dossier) {
                                    oMap.dossier = this.dossier;
                                }
                                if (this.has_sexe) {
                                    oMap.sexe = this.sexe;
                                }
                                if (this.has_birthDate) {
                                    oMap.birthDate = this.birthDate;
                                }
                                if (this.has_ville) {
                                    oMap.ville = this.ville;
                                }
                                if (this.has_etablissement) {
                                    oMap.etablissement = this.etablissement;
                                }
                                if (this.has_serieBac) {
                                    oMap.serieBac = this.serieBac;
                                }
                                if (this.has_optionBac) {
                                    oMap.optionBac = this.optionBac;
                                }
                                if (this.has_etudesSuperieures) {
                                    oMap.etudesSuperieures = this.etudesSuperieures;
                                }
                            } // oMap
                        } // to_insert_map

                    }
                });

                return Etudiant;
            })(DescriptionItem));
        }
    };
});
// etudiant.js
// class Etudiant
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2V0dWRpYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxlQUFlLGtEQUlOLFFBQVE7Ozs7QUFKakIsMkJBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFJTixvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxJQUFJLEVBQUU7MENBRFQsUUFBUTs7QUFFVCwrQ0FGQyxRQUFRLDZDQUVILElBQUksRUFBRTtBQUNoQix3QkFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDbkIsd0JBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2Qyw0QkFBSSxJQUFJLGNBQWlCLElBQUksU0FBUyxFQUFFO0FBQ3BDLGdDQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBaUIsQ0FBQzt5QkFDOUM7QUFDRCw0QkFBSSxJQUFJLFNBQVksSUFBSSxTQUFTLEVBQUU7QUFDL0IsZ0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFZLENBQUM7eUJBQ3BDO0FBQ0QsNEJBQUksSUFBSSxRQUFXLElBQUksU0FBUyxFQUFFO0FBQzlCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBVyxDQUFDO3lCQUNsQztBQUNELDRCQUFJLElBQUksS0FBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQixnQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQVEsQ0FBQzt5QkFDNUI7QUFDRCw0QkFBSSxJQUFJLFVBQWEsSUFBSSxTQUFTLEVBQUU7QUFDaEMsZ0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFhLENBQUM7eUJBQ3RDO0FBQ0QsNEJBQUksSUFBSSxjQUFpQixJQUFJLFNBQVMsRUFBRTtBQUNwQyxnQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWlCLENBQUM7eUJBQzlDO0FBQ0QsNEJBQUksSUFBSSxNQUFTLElBQUksU0FBUyxFQUFFO0FBQzVCLGdDQUFJLENBQUMsS0FBSyxHQUFHLElB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