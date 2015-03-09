System.register(["./intervalitem"], function (_export) {
    var IntervalItem, _createClass, _get, _inherits, _classCallCheck, Semestre;

    return {
        setters: [function (_intervalitem) {
            IntervalItem = _intervalitem.IntervalItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Semestre = _export("Semestre", (function (_IntervalItem) {
                function Semestre(oMap) {
                    _classCallCheck(this, Semestre);

                    _get(Object.getPrototypeOf(Semestre.prototype), "constructor", this).call(this, oMap);
                    this.type = "semestre";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.anneeid != undefined) {
                            this.anneeid = oMap.anneeid;
                        }
                    } // oMap
                }

                _inherits(Semestre, _IntervalItem);

                _createClass(Semestre, {
                    collection_name: { // constructor

                        get: function () {
                            return "semestres";
                        }
                    },
                    anneeid: {
                        get: function () {
                            return this._anneeid != undefined ? this._anneeid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._anneeid = s.trim();
                            } else {
                                this._anneeid = null;
                            }
                        }
                    },
                    has_anneeid: {
                        get: function () {
                            return this.anneeid != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(Semestre.prototype), "is_storeable", this) && this.has_anneeid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Semestre.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_anneeid) {
                                    oMap.anneeid = this.anneeid;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return Semestre;
            })(IntervalItem));
        }
    };
});
//semestre.js
// class Annee
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NlbWVzdHJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxZQUFZLGtEQUlILFFBQVE7Ozs7QUFKakIsd0JBQVksaUJBQVosWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFJSCxvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxJQUFJLEVBQUU7MENBRFQsUUFBUTs7QUFFYiwrQ0FGSyxRQUFRLDZDQUVQLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUN2Qix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3RDLDRCQUFJLElBQUksUUFBVyxJQUFJLFNBQVMsRUFBQztBQUM3QixnQ0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVcsQ0FBQzt5QkFDbEM7cUJBQ0o7QUFBQSxpQkFDSjs7MEJBVFEsUUFBUTs7NkJBQVIsUUFBUTtBQVViLG1DQUFlOzs2QkFBQSxZQUFHO0FBQ2xCLG1DQUFPLFdBQVcsQ0FBQzt5QkFDdEI7O0FBSUcsMkJBQU87NkJBSEEsWUFBRTtBQUNULG1DQUFPLEFBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQzlEOzZCQUNVLFVBQUMsQ0FBQyxFQUFDO0FBQ1YsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFDO0FBQ3pELG9DQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDNUIsTUFBTTtBQUNILG9DQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs2QkFDeEI7eUJBQ0o7O0FBQ0csK0JBQVc7NkJBQUEsWUFBRTtBQUNiLG1DQUFRLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFFO3lCQUNqQzs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFFO0FBQ2QsbUNBQVEsMkJBM0JILFFBQVEsc0NBMkJpQixJQUFJLENBQUMsV0FBVyxDQUFFO3lCQUNuRDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUM7QUFDZix1REE5QkssUUFBUSwrQ0E4Qk8sSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDdEMsb0NBQUksSUFBSSxDQUFDLFdBQVcsRUFBQztBQUNqQix3Q0FBSSxRQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQ0FDbEM7NkJBQ0o7eUJBQ0o7QUFBQTs7Ozt1QkFwQ1EsUUFBUTtlQUFTLFlBQVkiLCJmaWxlIjoiZGF0YS9kb21haW4vc2VtZXN0cmUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==