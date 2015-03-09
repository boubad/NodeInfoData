System.register(["./affectationbase"], function (_export) {
    var AffectationBaseItem, _createClass, _get, _inherits, _classCallCheck, EtudAffectation;

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

            EtudAffectation = (function (_AffectationBaseItem) {
                function EtudAffectation(oMap) {
                    _classCallCheck(this, EtudAffectation);

                    _get(Object.getPrototypeOf(EtudAffectation.prototype), "constructor", this).call(this, oMap);
                    this.type = "etudaffectation";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.etudiantid != undefined) {
                            this.etudiantid = oMap.etudiantid;
                        }
                    }
                }

                _inherits(EtudAffectation, _AffectationBaseItem);

                _createClass(EtudAffectation, {
                    etudiantid: {
                        //

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
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(EtudAffectation.prototype), "is_storeable", this) && this.has_etudiantid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(EtudAffectation.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_etudiantid) {
                                    oMap.etudiantid = this.etudiantid;
                                }
                            }
                        }
                    },
                    collection_name: { // to_insert_map

                        get: function () {
                            return "etudaffectations";
                        }
                    }
                });

                return EtudAffectation;
            })(AffectationBaseItem);
        }
    };
});
// etudaffectation.js
//
// class EtudAffectation
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2V0dWRhZmZlY3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksbUJBQW1CLGtEQUlqQixlQUFlOzs7O0FBSmpCLCtCQUFtQixvQkFBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7QUFJakIsMkJBQWU7QUFDTix5QkFEVCxlQUFlLENBQ0wsSUFBSSxFQUFFOzBDQURoQixlQUFlOztBQUVULCtDQUZOLGVBQWUsNkNBRUgsSUFBSSxFQUFFO0FBQ2hCLHdCQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQzFCLHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsNEJBQUksSUFBSSxXQUFjLElBQUksU0FBUyxFQUFFO0FBQ2pDLGdDQUFJLENBQUMsVUFBVSxHQUFHLElBQUksV0FBYyxDQUFDO3lCQUN4QztxQkFDSjtpQkFDSjs7MEJBVEgsZUFBZTs7NkJBQWYsZUFBZTtBQWNiLDhCQUFVOzs7NkJBSEEsWUFBRztBQUNiLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7eUJBQzVEOzZCQUNhLFVBQUMsQ0FBQyxFQUFFO0FBQ2QsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsQUFBQyxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQzt5QkFDL0Y7O0FBQ0csa0NBQWM7NkJBQUEsWUFBRztBQUNqQixtQ0FBUSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBRTt5QkFDcEM7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRztBQUNmLG1DQUFRLDJCQXJCVixlQUFlLHNDQXFCaUIsSUFBSSxDQUFDLGNBQWMsQ0FBRTt5QkFDdEQ7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBUyxFQUFRO0FBQ3ZCLHVEQXhCTixlQUFlLCtDQXdCVyxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2QyxvQ0FBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQ3JCLHdDQUFJLFdBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lDQUN4Qzs2QkFDSjt5QkFDSjs7QUFDRCxtQ0FBZTs7NkJBQUEsWUFBRztBQUNsQixtQ0FBTyxrQkFBa0IsQ0FBQzt5QkFDN0I7Ozs7dUJBakNDLGVBQWU7ZUFBUyxtQkFBbUIiLCJmaWxlIjoiZGF0YS9kb21haW4vZXR1ZGFmZmVjdGF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=