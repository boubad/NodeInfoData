System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, AffectationBaseItem;

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
            AffectationBaseItem = _export("AffectationBaseItem", (function (_DescriptionItem) {
                //

                function AffectationBaseItem(oMap) {
                    _classCallCheck(this, AffectationBaseItem);

                    _get(Object.getPrototypeOf(AffectationBaseItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.anneeid != undefined) {
                            this.anneeid = oMap.anneeid;
                        }
                        if (oMap.semestreid != undefined) {
                            this.semestreid = oMap.semestreid;
                        }
                        if (oMap.groupeid != undefined) {
                            this.groupeid = oMap.groupeid;
                        }
                        if (oMap.startDate != undefined) {
                            this.startDate = oMap.startDate;
                        }
                        if (oMap.endDate != undefined) {
                            this.endDate = oMap.endDate;
                        }
                    }
                }

                _inherits(AffectationBaseItem, _DescriptionItem);

                _createClass(AffectationBaseItem, {
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
                    anneeid: {
                        //

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
                    startDate: {
                        get: function () {
                            return this._start != undefined ? this._start : null;
                        },
                        set: function (d) {
                            this._start = d != undefined ? d : null;
                        }
                    },
                    has_startDate: {
                        get: function () {
                            return this.startDate != null;
                        }
                    },
                    endDate: {
                        get: function () {
                            return this._end != undefined ? this._end : null;
                        },
                        set: function (d) {
                            this._end = d != undefined ? d : null;
                        }
                    },
                    has_endDate: {
                        get: function () {
                            return this.endDate != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            if (this.has_startDate && this.has_endDate) {
                                if (this.startDate.getDate() > this.endDate.getDate()) {
                                    return false;
                                }
                            }
                            return this.has_departementid && this.has_semestreid && this.has_groupeid && this.has_anneeid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(AffectationBaseItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
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
                                if (this.has_startDate) {
                                    oMap.startDate = this.startDate;
                                }
                                if (this.has_endDate) {
                                    oMap.endDate = this.endDate;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return AffectationBaseItem;
            })(DescriptionItem));
        }
    };
});
// affectationbase.ts
//
// class AffectationBaseItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2FmZmVjdGF0aW9uYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksZUFBZSxrREFHTixtQkFBbUI7Ozs7QUFINUIsMkJBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFHTiwrQkFBbUI7OztBQUVqQix5QkFGRixtQkFBbUIsQ0FFaEIsSUFBSSxFQUFFOzBDQUZULG1CQUFtQjs7QUFHcEIsK0NBSEMsbUJBQW1CLDZDQUdkLElBQUksRUFBRTtBQUNaLHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsNEJBQUksSUFBSSxjQUFpQixJQUFJLFNBQVMsRUFBRTtBQUNwQyxnQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWlCLENBQUM7eUJBQzlDO0FBQ0QsNEJBQUksSUFBSSxRQUFXLElBQUksU0FBUyxFQUFFO0FBQzlCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBVyxDQUFDO3lCQUNsQztBQUNELDRCQUFJLElBQUksV0FBYyxJQUFJLFNBQVMsRUFBRTtBQUNqQyxnQ0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQWMsQ0FBQzt5QkFDeEM7QUFDRCw0QkFBSSxJQUFJLFNBQVksSUFBSSxTQUFTLEVBQUU7QUFDL0IsZ0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFZLENBQUM7eUJBQ3BDO0FBQ0QsNEJBQUksSUFBSSxVQUFhLElBQUksU0FBUyxFQUFFO0FBQ2hDLGdDQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBYSxDQUFDO3lCQUN0QztBQUNELDRCQUFJLElBQUksUUFBVyxJQUFJLFNBQVMsRUFBRTtBQUM5QixnQ0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVcsQ0FBQzt5QkFDbEM7cUJBQ0o7aUJBQ0o7OzBCQXhCSSxtQkFBbUI7OzZCQUFuQixtQkFBbUI7QUE2QnhCLGlDQUFhOzs7NkJBSEEsWUFBRztBQUNoQixtQ0FBTyxBQUFD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QUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt5QkFDdEQ7NkJBQ1UsVUFBQyxDQUFDLEVBQUU7QUFDWCxnQ0FBSSxDQUFDLElBQUksR0FBRyxBQUFDLENBQUMsSUFBSSxTQUFTLEdBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDM0M7O0FBQ0csK0JBQVc7NkJBQUEsWUFBRztBQUNkLG1DQUFRLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFFO3lCQUNqQzs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ2YsZ0NBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3hDLG9DQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNuRCwyQ0FBTyxLQUFLLENBQUM7aUNBQ2hCOzZCQUNKO0FBQ0QsbUNBQVEsSUFBSSxDQUFDLGlCQUFpQixJQUMxQixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBRTt5QkFDckU7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBUyxFQUFRO0FBQ3ZCLHVEQTNGQyxtQkFBbUIsK0NBMkZBLElBQUksRUFBRTtBQUMxQixnQ0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLG9DQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4Qix3Q0FBSSxjQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7aUNBQzlDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNsQix3Q0FBSSxRQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQ0FDbEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3JCLHdDQUFJLFdBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lDQUN4QztBQUNELG9DQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbkIsd0NBQUksU0FBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7aUNBQ3BDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNwQix3Q0FBSSxVQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FDdEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLHdDQUFJLFFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUNsQzs2QkFDSjt5QkFDSjtBQUFBOzs7O3VCQWhISSxtQkFBbUI7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2FmZmVjdGF0aW9uYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9