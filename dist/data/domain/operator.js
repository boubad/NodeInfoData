System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, Operator;

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
            Operator = _export("Operator", (function (_DescriptionItem) {
                function Operator(oMap) {
                    _classCallCheck(this, Operator);

                    _get(Object.getPrototypeOf(Operator.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.personid != undefined) {
                            this.personid = oMap.personid;
                        }
                    } // oMap
                }

                _inherits(Operator, _DescriptionItem);

                _createClass(Operator, {
                    departementid: { // constructor

                        get: function () {
                            return this._departementid != undefined ? this._departementid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._departementid = s.trim();
                            } else {
                                this._departementid = null;
                            }
                        }
                    },
                    has_departementid: {
                        get: function () {
                            return this.departementid != null;
                        }
                    },
                    personid: {
                        get: function () {
                            return this._personid != undefined ? this._personid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._personid = s.trim();
                            } else {
                                this._personid = null;
                            }
                        }
                    },
                    has_personid: {
                        get: function () {
                            return this.personid != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return this.has_personid && this.has_departementid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Operator.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
                                }
                                if (this.has_personid) {
                                    oMap.personid = this.personid;
                                }
                            }
                        }
                    },
                    collection_name: { // to_insert_map

                        get: function () {
                            return "operators";
                        }
                    }
                });

                return Operator;
            })(DescriptionItem));
        }
    };
});
// operator.js
// class Operators
//# sourceMappingURL=data:application/json;base64,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