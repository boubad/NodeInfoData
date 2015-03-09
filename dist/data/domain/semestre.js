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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NlbWVzdHJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxZQUFZLGtEQUlILFFBQVE7Ozs7QUFKakIsd0JBQVksaUJBQVosWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFJSCxvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxJQUFJLEVBQUU7MENBRFQsUUFBUTs7QUFFYiwrQ0FGSyxRQUFRLDZDQUVQLElBQUksRUFBRTtBQUNaLHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDdEMsNEJBQUksSUFBSSxRQUFXLElBQUksU0FBUyxFQUFDO0FBQzdCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBVyxDQUFDO3lCQUNsQztxQkFDSjtBQUFBLGlCQUNKOzswQkFSUSxRQUFROzs2QkFBUixRQUFRO0FBU2IsbUNBQWU7OzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sV0FBVyxDQUFDO3lCQUN0Qjs7QUFJRywyQkFBTzs2QkFIQSxZQUFFO0FBQ1QsbUNBQU8sQUFBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt5QkFDOUQ7NkJBQ1UsVUFBQyxDQUFDLEVBQUM7QUFDVixnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUM7QUFDekQsb0NBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUM1QixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzZCQUN4Qjt5QkFDSjs7QUFDRywrQkFBVzs2QkFBQSxZQUFFO0FBQ2IsbUNBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUU7eUJBQ2pDOztBQUNHLGdDQUFZOzZCQUFBLFlBQUU7QUFDZCxtQ0FBUSwyQkExQkgsUUFBUSxzQ0EwQmlCLElBQUksQ0FBQyxXQUFXLENBQUU7eUJBQ25EOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBQztBQUNmLHVEQTdCSyxRQUFRLCtDQTZCTyxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBQztBQUN0QyxvQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFDO0FBQ2pCLHdDQUFJLFFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUNsQzs2QkFDSjt5QkFDSjtBQUFBOzs7O3VCQW5DUSxRQUFRO2VBQVMsWUFBWSIsImZpbGUiOiJkYXRhL2RvbWFpbi9zZW1lc3RyZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9