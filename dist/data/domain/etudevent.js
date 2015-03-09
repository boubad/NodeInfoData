System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, EtudEvent;

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
            EtudEvent = _export("EtudEvent", (function (_DescriptionItem) {
                //

                function EtudEvent(oMap) {
                    _classCallCheck(this, EtudEvent);

                    _get(Object.getPrototypeOf(EtudEvent.prototype), "constructor", this).call(this, oMap);
                    this.type = "etudevent";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.uniteid != undefined) {
                            this.uniteid = oMap.uniteid;
                        }
                        if (oMap.groupeeventid != undefined) {
                            this.groupeeventid = oMap.groupeeventid;
                        }
                        if (oMap.etudaffectationid != undefined) {
                            this.etudaffectationid = oMap.etudaffectationid;
                        }
                        if (oMap.date != undefined) {
                            this.date = oMap.date;
                        }
                        if (oMap.genre != undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.status != undefined) {
                            this.status = oMap.status;
                        }
                        if (oMap.note != undefined) {
                            this.note = oMap.note;
                        }
                        if (oMap.anneeid != undefined) {
                            this.anneeid = oMap.anneeid;
                        }
                        if (oMap.semestreid != undefined) {
                            this.semestreid = oMap.semestreid;
                        }
                        if (oMap.matiereid != undefined) {
                            this.matiereid = oMap.matiereid;
                        }
                        if (oMap.groupeid != undefined) {
                            this.groupeid = oMap.groupeid;
                        }
                        if (oMap.enseignantid != undefined) {
                            this.enseignantid = oMap.enseignantid;
                        }
                        if (oMap.etudiantid != undefined) {
                            this.etudiantid = oMap.etudiantid;
                        }
                    }
                }

                _inherits(EtudEvent, _DescriptionItem);

                _createClass(EtudEvent, {
                    collection_name: {
                        //

                        value: function collection_name() {
                            return "etudevents";
                        }
                    },
                    status: {
                        //

                        get: function () {
                            return this._status != undefined ? this._status : null;
                        },
                        set: function (s) {
                            this._status = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_status: {
                        get: function () {
                            return this.status != null;
                        }
                    },
                    note: {
                        get: function () {
                            return this._note != undefined ? this._note : null;
                        },
                        set: function (s) {
                            this._note = s != undefined && s != null && s > 0 ? s : null;
                        }
                    },
                    has_note: {
                        get: function () {
                            return this.note != null;
                        }
                    },
                    genre: {
                        //

                        get: function () {
                            return this._genre != undefined ? this._genre : null;
                        },
                        set: function (s) {
                            this._genre = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_genre: {
                        get: function () {
                            return this.genre != null;
                        }
                    },
                    etudaffectationid: {
                        get: function () {
                            return this._etudaffectationid != undefined ? this._etudaffectationid : null;
                        },
                        set: function (s) {
                            this._etudaffectationid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_etudaffectationid: {
                        get: function () {
                            return this.etudaffectationid != null;
                        }
                    },
                    groupeeventid: {
                        //

                        get: function () {
                            return this._groupeeventid != undefined ? this._groupeeventid : null;
                        },
                        set: function (s) {
                            this._groupeeventid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_groupeeventid: {
                        get: function () {
                            return this.groupeeventid != null;
                        }
                    },
                    departementid: {
                        //

                        get: function () {
                            return this._departementid != undefined ? this._departementid : null;
                        },
                        set: function (s) {
                            this._departementid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_departementid: {
                        get: function () {
                            return this.departementid != null;
                        }
                    },
                    uniteid: {
                        //

                        get: function () {
                            return this._uniteid != undefined ? this._uniteid : null;
                        },
                        set: function (s) {
                            this._uniteid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_uniteid: {
                        get: function () {
                            return this.uniteid != null;
                        }
                    },
                    enseignantid: {
                        //

                        get: function () {
                            return this._profid != undefined ? this._profid : null;
                        },
                        set: function (s) {
                            this._profid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_enseignantid: {
                        get: function () {
                            return this.enseignantid != null;
                        }
                    },
                    etudiantid: {
                        get: function () {
                            return this._etudid != undefined ? this._etudid : null;
                        },
                        set: function (s) {
                            this._etudid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_etudiantid: {
                        get: function () {
                            return this.etudiantid != null;
                        }
                    },
                    matiereid: {
                        get: function () {
                            return this._matiereid != undefined ? this._matiereid : null;
                        },
                        set: function (s) {
                            this._matiereid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_matiereid: {
                        get: function () {
                            return this.matiereid != null;
                        }
                    },
                    anneeid: {
                        get: function () {
                            return this._anneeid != undefined ? this._anneeid : null;
                        },
                        set: function (s) {
                            this._anneeid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_anneeid: {
                        get: function () {
                            return this.anneeid != null;
                        }
                    },
                    semestreid: {
                        get: function () {
                            return this._semestreid != undefined ? this._semestreid : null;
                        },
                        set: function (s) {
                            this._semestreid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_semestreid: {
                        get: function () {
                            return this.semestreid != null;
                        }
                    },
                    groupeid: {
                        get: function () {
                            return this._groupeid != undefined ? this._groupeid : null;
                        },
                        set: function (s) {
                            this._groupeid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_groupeid: {
                        get: function () {
                            return this.groupeid != null;
                        }
                    },
                    date: {
                        get: function () {
                            return this._date != undefined ? this._date : null;
                        },
                        set: function (d) {
                            this._date = d != undefined ? d : null;
                        }
                    },
                    has_date: {
                        get: function () {
                            return this.date != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return this.has_etudaffectationid && this.has_groupeeventid && this.has_genre && this.has_etudiantid && this.has_groupeid && this.has_semestreid && this.has_anneeid && this.has_departementid && this.has_matiereid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(EtudEvent.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
                                }
                                if (this.has_uniteid) {
                                    oMap.uniteid = this.uniteid;
                                }
                                if (this.has_groupeeventid) {
                                    oMap.groupeeventid = this.groupeeventid;
                                }
                                if (this.has_etudaffectationid) {
                                    oMap.etudaffectationid = this.etudaffectationid;
                                }
                                if (this.has_date) {
                                    oMap.date = this.date;
                                }
                                if (this.has_genre) {
                                    oMap.genre = this.genre;
                                }
                                if (this.has_note) {
                                    oMap.note = this.note;
                                }
                                if (this.has_status) {
                                    oMap.status = this.status;
                                }
                                if (this.has_anneeid) {
                                    oMap.anneeid = this.anneeid;
                                }
                                if (this.has_semestreid) {
                                    oMap.semestreid = this.semestreid;
                                }
                                if (this.has_groupeid) {
                                    oMap.groupeid = this.groupeid;
                                }
                                if (this.has_matiereid) {
                                    oMap.matiereid = this.matiereid;
                                }
                                if (this.has_enseignantid) {
                                    oMap.enseignantid = this.enseignantid;
                                }
                                if (this.has_etudiantid) {
                                    oMap.etudiantid = this.etudiantid;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return EtudEvent;
            })(DescriptionItem));
        }
    };
});
// etudevent.js
// class EtudEvent
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2V0dWRldmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksZUFBZSxrREFJTixTQUFTOzs7O0FBSmxCLDJCQUFlLG9CQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FBSU4scUJBQVM7OztBQUVQLHlCQUZGLFNBQVMsQ0FFTixJQUFJLEVBQUU7MENBRlQsU0FBUzs7QUFHViwrQ0FIQyxTQUFTLDZDQUdKLElBQUksRUFBRTtBQUNoQix3QkFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7QUFDcEIsd0JBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2Qyw0QkFBSSxJQUFJLGNBQWlCLElBQUksU0FBUyxFQUFFO0FBQ3BDLGdDQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBaUIsQ0FBQzt5QkFDOUM7QUFDRCw0QkFBSSxJQUFJLFFBQVcsSUFBSSxTQUFTLEVBQUU7QUFDOUIsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFXLENBQUM7eUJBQ2xDO0FBQ0QsNEJBQUksSUFBSSxjQUFpQixJQUFJLFNBQVMsRUFBRTtBQUNwQyxnQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWlCLENBQUM7eUJBQzlDO0FBQ0QsNEJBQUksSUFBSSxrQkFBcUIsSUFBSSxTQUFTLEVBQUU7QUFDeEMsZ0NBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGtCQUFxQixDQUFDO3lCQUN0RDtBQUNELDRCQUFJLElBQUksS0FBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQixnQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQVEsQ0FBQzt5QkFDNUI7QUFDRCw0QkFBSSxJQUFJLE1BQVMsSUFBSSxTQUFTLEVBQUU7QUFDNUIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFTLENBQUM7eUJBQzlCO0FBQ0QsNEJBQUksSUFBSSxPQUFVLElBQUksU0FBUyxFQUFFO0FBQzdCLGdDQUFJLENBQUMsTUFB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Q0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLHdDQUFJLFFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUNsQztBQUNELG9DQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4Qix3Q0FBSSxjQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7aUNBQzlDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO0FBQzVCLHdDQUFJLGtCQUFxQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztpQ0FDdEQ7QUFDRCxvQ0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysd0NBQUksS0FBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUNBQzVCO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQix3Q0FBSSxNQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQ0FDOUI7QUFDRCxvQ0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysd0NBQUksS0FBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUNBQzVCO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNqQix3Q0FBSSxPQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQ0FDaEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLHdDQUFJLFFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUNsQztBQUNELG9DQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDckIsd0NBQUksV0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUNBQ3hDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQix3Q0FBSSxTQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FDcEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3BCLHdDQUFJLFVBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2lDQUN0QztBQUNELG9DQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN2Qix3Q0FBSSxhQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7aUNBQzVDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUNyQix3Q0FBSSxXQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQ0FDeEM7NkJBQ0o7eUJBQ0o7QUFBQTs7Ozt1QkE5T0ksU0FBUztlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9kb21haW4vZXR1ZGV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=