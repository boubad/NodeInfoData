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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3Byb2ZhZmZlY3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksbUJBQW1CLGtEQUlqQixlQUFlOzs7O0FBSmpCLCtCQUFtQixvQkFBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUFJakIsMkJBQWU7OztBQUVOLHlCQUZULGVBQWUsQ0FFTCxJQUFJLEVBQUU7MENBRmhCLGVBQWU7O0FBR1QsK0NBSE4sZUFBZSw2Q0FHSCxJQUFJLEVBQUU7QUFDWix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLDRCQUFJLElBQUksYUFBZ0IsSUFBSSxTQUFTLEVBQUU7QUFDbkMsZ0NBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxhQUFnQixDQUFDO3lCQUM1QztBQUNELDRCQUFJLElBQUksVUFBYSxJQUFJLFNBQVMsRUFBRTtBQUNoQyxnQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQWEsQ0FBQzt5QkFDdEM7cUJBQ0o7aUJBQ0o7OzBCQVpILGVBQWU7OzZCQUFmLGVBQWU7QUFpQmIsZ0NBQVk7Ozs2QkFIQSxZQUFHO0FBQ2YsbUNBQU8sQUFBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDNUQ7NkJBQ2UsVUFBQyxDQUFDLEVBQUU7QUFDaEIsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsQUFBQyxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQzt5QkFDL0Y7O0FBQ0csb0NBQWdCOzZCQUFBLFlBQUc7QUFDbkIsbUNBQVEsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUU7eUJBQ3RDOztBQUlHLDZCQUFTOzZCQUhBLFlBQUc7QUFDWixtQ0FBTyxBQUFDLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3lCQUNsRTs2QkFDWSxVQUFDLENBQUMsRUFBRTtBQUNiLGdDQUFJLENBQUMsVUFBVSxHQUFHLEFBQUMsQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ2xHOztBQUNHLGlDQUFhOzZCQUFBLFlBQUc7QUFDaEIsbUNBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUU7eUJBQ25DOztBQUVHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBUSwyQkFsQ1YsZUFBZSxzQ0FrQ2lCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFFO3lCQUM5RTs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFTLEVBQVE7QUFDdkIsdURBckNOLGVBQWUsK0NBcUNXLElBQUksRUFBRTtBQUMxQixnQ0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLG9DQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN2Qix3Q0FBSSxhQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7aUNBQzVDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNwQix3Q0FBSSxVQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FDdEM7NkJBQ0o7eUJBQ0o7O0FBQ0QsbUNBQWU7OzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sa0JBQWtCLENBQUM7eUJBQzdCOzs7O3VCQWpEQyxlQUFlO2VBQVMsbUJBQW1CIiwiZmlsZSI6ImRhdGEvZG9tYWluL3Byb2ZhZmZlY3RhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9