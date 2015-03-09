System.register(["./affectationbase"], function (_export) {
    var AffectationBaseItem, _createClass, _get, _inherits, _classCallCheck, ProfAffectation;

    return {
        setters: [function (_affectationbase) {
            AffectationBaseItem = _affectationbase.AffectationBaseItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //

            ProfAffectation = (function (_AffectationBaseItem) {
                //

                function ProfAffectation(oMap) {
                    _classCallCheck(this, ProfAffectation);

                    _get(Object.getPrototypeOf(ProfAffectation.prototype), "constructor", this).call(this, oMap);
                    this.type = "profaffectation";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.enseignantid != undefined) {
                            this.enseignantid = oMap.enseignantid;
                        }
                        if (oMap.matiereid != undefined) {
                            this.matiereid = oMap.matiereid;
                        }
                    }
                }

                _inherits(ProfAffectation, _AffectationBaseItem);

                _createClass(ProfAffectation, {
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
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(ProfAffectation.prototype), "is_storeable", this) && this.has_enseignantid && this.has_matiereid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(ProfAffectation.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_enseignantid) {
                                    oMap.enseignantid = this.enseignantid;
                                }
                                if (this.has_matiereid) {
                                    oMap.matiereid = this.matiereid;
                                }
                            }
                        }
                    },
                    collection_name: { // to_insert_map

                        get: function () {
                            return "profaffectations";
                        }
                    }
                });

                return ProfAffectation;
            })(AffectationBaseItem);
        }
    };
});
//profaffectation.js
//
// class ProfAffectation
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3Byb2ZhZmZlY3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksbUJBQW1CLGtEQUlqQixlQUFlOzs7O0FBSmpCLCtCQUFtQixvQkFBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUFJakIsMkJBQWU7OztBQUVOLHlCQUZULGVBQWUsQ0FFTCxJQUFJLEVBQUU7MENBRmhCLGVBQWU7O0FBR1QsK0NBSE4sZUFBZSw2Q0FHSCxJQUFJLEVBQUU7QUFDaEIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDMUIsd0JBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2Qyw0QkFBSSxJQUFJLGFBQWdCLElBQUksU0FBUyxFQUFFO0FBQ25DLGdDQUFJLENBQUMsWUFBWSxHQUFHLElBQUksYUFBZ0IsQ0FBQzt5QkFDNUM7QUFDRCw0QkFBSSxJQUFJLFVBQWEsSUFBSSxTQUFTLEVBQUU7QUFDaEMsZ0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFhLENBQUM7eUJBQ3RDO3FCQUNKO2lCQUNKOzswQkFiSCxlQUFlOzs2QkFBZixlQUFlO0FBa0JiLGdDQUFZOzs7NkJBSEEsWUFBRztBQUNmLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQzVEOzZCQUNlLFVBQUMsQ0FBQyxFQUFFO0FBQ2hCLGdDQUFJLENBQUMsT0FBTyxHQUFHLEFBQUMsQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQy9GOztBQUNHLG9DQUFnQjs2QkFBQSxZQUFHO0FBQ25CLG1DQUFRLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFFO3lCQUN0Qzs7QUFJRyw2QkFBUzs2QkFIQSxZQUFHO0FBQ1osbUNBQU8sQUFBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt5QkFDbEU7NkJBQ1ksVUFBQyxDQUFDLEVBQUU7QUFDYixnQ0FBSSxDQUFDLFVBQVUsR0FBRyxBQUFDLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO3lCQUNsRzs7QUFDRyxpQ0FBYTs2QkFBQSxZQUFHO0FBQ2hCLG1DQUFRLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFFO3lCQUNuQzs7QUFFRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsMkJBbkNWLGVBQWUsc0NBbUNpQixJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBRTt5QkFDOUU7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBUyxFQUFRO0FBQ3ZCLHVEQXRDTixlQUFlLCtDQXNDVyxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2QyxvQ0FBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDdkIsd0NBQUksYUFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2lDQUM1QztBQUNELG9DQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDcEIsd0NBQUksVUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7aUNBQ3RDOzZCQUNKO3lCQUNKOztBQUNELG1DQUFlOzs2QkFBQSxZQUFHO0FBQ2xCLG1DQUFPLGtCQUFrQixDQUFDO3lCQUM3Qjs7Ozt1QkFsREMsZUFBZTtlQUFTLG1CQUFtQiIsImZpbGUiOiJkYXRhL2RvbWFpbi9wcm9mYWZmZWN0YXRpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==