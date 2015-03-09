System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, GroupeEvent;

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
            GroupeEvent = _export("GroupeEvent", (function (_DescriptionItem) {
                //

                function GroupeEvent(oMap) {
                    _classCallCheck(this, GroupeEvent);

                    _get(Object.getPrototypeOf(GroupeEvent.prototype), "constructor", this).call(this, oMap);
                    this.type = "groupeevent";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.profaffectationid != undefined) {
                            this.profaffectationid = oMap.profaffectationid;
                        }
                        if (oMap.date != undefined) {
                            this.date = oMap.date;
                        }
                        if (oMap.name != undefined) {
                            this.name = oMap.name;
                        }
                        if (oMap.genre != undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.startTime != undefined) {
                            this.startTime = oMap.startTime;
                        }
                        if (oMap.endTime != undefined) {
                            this.endTime = oMap.endTime;
                        }
                        if (oMap.location != undefined) {
                            this.location = oMap.location;
                        }
                        if (oMap.status != undefined) {
                            this.status = oMap.status;
                        }
                        if (oMap.coefficient != undefined) {
                            this.coefficient = oMap.coefficient;
                        }
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
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
                        if (oMap.uniteid != undefined) {
                            this.uniteid = oMap.uniteid;
                        }
                    }
                }

                _inherits(GroupeEvent, _DescriptionItem);

                _createClass(GroupeEvent, {
                    collection_name: {
                        //

                        get: function () {
                            return "groupeevents";
                        }
                    },
                    startTime: {
                        //

                        get: function () {
                            return this._starttime != undefined ? this._starttime : null;
                        },
                        set: function (d) {
                            this._starttime = d != undefined ? d : null;
                        }
                    },
                    has_startTime: {
                        get: function () {
                            return this.startTime != null;
                        }
                    },
                    endTime: {
                        get: function () {
                            return this._endtime != undefined ? this._endtime : null;
                        },
                        set: function (d) {
                            this._endtime = d != undefined ? d : null;
                        }
                    },
                    has_endTime: {
                        get: function () {
                            return this.endTime != null;
                        }
                    },
                    status: {
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
                    location: {
                        get: function () {
                            return this._location != undefined ? this._location : null;
                        },
                        set: function (s) {
                            this._location = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_location: {
                        get: function () {
                            return this.location != null;
                        }
                    },
                    coefficient: {
                        get: function () {
                            return this._coef != undefined ? this._coef : null;
                        },
                        set: function (s) {
                            this._coef = s != undefined && s != null && s > 0 ? s : null;
                        }
                    },
                    has_coefficient: {
                        get: function () {
                            return this.coefficient != null;
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
                    name: {
                        get: function () {
                            return this._name != undefined ? this._name : null;
                        },
                        set: function (s) {
                            this._name = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_name: {
                        get: function () {
                            return this.name != null;
                        }
                    },
                    profaffectationid: {
                        get: function () {
                            return this._profaffectationid != undefined ? this._profaffectationid : null;
                        },
                        set: function (s) {
                            this._profaffectationid = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_profaffectationid: {
                        get: function () {
                            return this.profaffectationid != null;
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
                            if (this.has_startTime && this.has_endTime) {
                                if (this.startTime.getDate() > this.endTime.getDate()) {
                                    return false;
                                }
                            }
                            return this.has_profaffectationid() && this.has_date() && this.has_name() && this.has_genre() && this.has_departementid && this.has_anneeid && this.has_semestreid && this.has_groupeid && this.has_matiere_id && this.has_uniteid && this.has_enseignantid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(GroupeEvent.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_profaffectationid) {
                                    oMap.profaffectationid = this.profaffectationid;
                                }
                                if (this.has_date) {
                                    oMap.date = this.date;
                                }
                                if (this.has_name) {
                                    oMap.name = this.name;
                                }
                                if (this.has_genre) {
                                    oMap.genre = this.genre;
                                }
                                if (this.has_coefficient) {
                                    oMap.coefficient = this.coefficient;
                                }
                                if (this.has_location) {
                                    oMap.location = this.location;
                                }
                                if (this.has_status) {
                                    oMap.status = this.status;
                                }
                                if (this.has_startTime) {
                                    oMap.startTime = this.startTime;
                                }
                                if (this.has_endTime) {
                                    oMap.endTime = this.endTime;
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
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
                                }
                                if (this.has_uniteid) {
                                    oMap.uniteid = this.uniteid;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return GroupeEvent;
            })(DescriptionItem));
        }
    };
});
// groupeevent.js
// class GroupeEvent
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2dyb3VwZWV2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUSxlQUFlLGtEQUVWLFdBQVc7Ozs7QUFGaEIsMkJBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFFVix1QkFBVzs7O0FBRVQseUJBRkYsV0FBVyxDQUVSLElBQUksRUFBQzswQ0FGUixXQUFXOztBQUdoQiwrQ0FISyxXQUFXLDZDQUdWLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztBQUMxQix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3RDLDRCQUFJLElBQUksa0JBQXFCLElBQUksU0FBUyxFQUFDO0FBQ3ZDLGdDQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxrQkFBcUIsQ0FBQzt5QkFDdEQ7QUFDRCw0QkFBSSxJQUFJLEtBQVEsSUFBSSxTQUFTLEVBQUM7QUFDMUIsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFRLENBQUM7eUJBQzVCO0FBQ0QsNEJBQUksSUFBSSxLQUFRLElBQUksU0FBUyxFQUFDO0FBQzFCLGdDQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBUSxDQUFDO3lCQUM1QjtBQUNELDRCQUFJLElBQUksTUFBUyxJQUFJLFNBQVMsRUFBQztBQUMzQixnQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQVMsQ0FBQzt5QkFDOUI7QUFDRCw0QkFBSSxJQUFJLFVBQWEsSUFBSSxTQUFTLEVBQUM7QUFDL0IsZ0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFhLENBQUM7eUJBQ3RDO0FBQ0QsNEJBQUksSUFBSSxRQUFXLElBQUksU0FBUyxFQUFDO0FBQzdCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBVyxDQUFDO3lCQUNsQztBQUNELDRCQUFJLElBQUksU0FBWSxJQUFJLFNBQVMsRUFBQztBQUM5QixnQ0FBSSxDQUFDLFFBQVEs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QzlCLHdDQUFJLFNBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2lDQUNqQztBQUNRLG9DQUFJLElBQUksQ0FBQyxhQUFhLEVBQUM7QUFDL0Isd0NBQUksVUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7aUNBQ25DO0FBQ1Esb0NBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFDO0FBQ2xDLHdDQUFJLGFBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztpQ0FDekM7QUFDUyxvQ0FBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUM7QUFDcEMsd0NBQUksY0FBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2lDQUMzQztBQUNTLG9DQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7QUFDOUIsd0NBQUksUUFBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7aUNBQy9COzZCQUNEO3lCQUNEO0FBQUE7Ozs7dUJBaFJXLFdBQVc7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2dyb3VwZWV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=