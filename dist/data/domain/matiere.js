System.register(["./departementchild"], function (_export) {
    var DepartementChildItem, _createClass, _get, _inherits, _classCallCheck, Matiere;

    return {
        setters: [function (_departementchild) {
            DepartementChildItem = _departementchild.DepartementChildItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Matiere = _export("Matiere", (function (_DepartementChildItem) {
                //

                function Matiere(oMap) {
                    _classCallCheck(this, Matiere);

                    _get(Object.getPrototypeOf(Matiere.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.uniteid != undefined) {
                            this.uniteid = oMap.uniteid;
                        }
                        if (oMap.genre != undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.module != undefined) {
                            this.module = oMap.module;
                        }
                        if (oMap.coefficient != undefined) {
                            this.coefficient = oMap.coefficient;
                        }
                        if (oMap.ecs != undefined) {
                            this.ecs = oMap.ecs;
                        }
                    }
                }

                _inherits(Matiere, _DepartementChildItem);

                _createClass(Matiere, {
                    collection_name: { // constructor

                        get: function () {
                            return "matieres";
                        }
                    },
                    ecs: {
                        //

                        get: function () {
                            return this._ecs != undefined ? this._ecs : null;
                        },
                        set: function (s) {
                            this._ecs = s != undefined && s != null && s > 0 ? s : null;
                        }
                    },
                    has_ecs: {
                        get: function () {
                            return this.ecs != null;
                        }
                    },
                    coefficient: {
                        //

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
                    module: {
                        //

                        get: function () {
                            return this._module != undefined ? this._module : null;
                        },
                        set: function (s) {
                            this._module = s != undefined && s != null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_module: {
                        get: function () {
                            return this.module != null;
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
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(Matiere.prototype), "is_storeable", this) && this.has_uniteid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Matiere.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_uniteid()) {
                                    oMap.uniteid = this.uniteid;
                                }
                                if (this.has_genre()) {
                                    oMap.genre = this.genre;
                                }
                                if (this.has_module()) {
                                    oMap.module = this.module;
                                }
                                if (this.has_coefficient()) {
                                    oMap.coefficient = this.coefficient;
                                }
                                if (this.has_ecs()) {
                                    oMap.ecs = this.ecs;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return Matiere;
            })(DepartementChildItem));
        }
    };
});
// matiere.js
// class Matiere
//# sourceMappingURL=data:application/json;base64,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QUEsdUJBQUMsSUFBSSxFQUFFO0FBQ1osdURBL0VDLE9BQU8sK0NBK0VZLElBQUksRUFBRTtBQUMxQixnQ0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLG9DQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtBQUNwQix3Q0FBSSxRQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQ0FDbEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDbEIsd0NBQUksTUFBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUNBQzlCO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQ25CLHdDQUFJLE9BQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2lDQUNoQztBQUNELG9DQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtBQUN4Qix3Q0FBSSxZQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQ0FDMUM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDaEIsd0NBQUksSUFBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7aUNBQzFCOzZCQUNKO3lCQUNKO0FBQUE7Ozs7dUJBakdJLE9BQU87ZUFBUyxvQkFBb0IiLCJmaWxlIjoiZGF0YS9kb21haW4vbWF0aWVyZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9