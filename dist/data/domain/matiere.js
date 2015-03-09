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
                    this.type = "matiere";
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
//# sourceMappingURL=data:application/json;base64,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LENBQUMsV0FBVyxDQUFFO3lCQUNuRDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REFoRkMsT0FBTywrQ0FnRlksSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ3BCLHdDQUFJLFFBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUNsQztBQUNELG9DQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtBQUNsQix3Q0FBSSxNQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQ0FDOUI7QUFDRCxvQ0FBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7QUFDbkIsd0NBQUksT0FBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7aUNBQ2hDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO0FBQ3hCLHdDQUFJLFlBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2lDQUMxQztBQUNELG9DQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNoQix3Q0FBSSxJQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDMUI7NkJBQ0o7eUJBQ0o7QUFBQTs7Ozt1QkFsR0ksT0FBTztlQUFTLG9CQUFvQiIsImZpbGUiOiJkYXRhL2RvbWFpbi9tYXRpZXJlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=