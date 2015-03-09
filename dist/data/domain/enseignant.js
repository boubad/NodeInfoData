System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, Enseignant;

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
            Enseignant = _export("Enseignant", (function (_DescriptionItem) {
                function Enseignant(oMap) {
                    _classCallCheck(this, Enseignant);

                    _get(Object.getPrototypeOf(Enseignant.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.personid != undefined) {
                            this.personid = oMap.personid;
                        }
                    } // oMap
                }

                _inherits(Enseignant, _DescriptionItem);

                _createClass(Enseignant, {
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
                            _get(Object.getPrototypeOf(Enseignant.prototype), "to_insert_map", this).call(this, oMap);
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
                            return "enseignant";
                        }
                    }
                });

                return Enseignant;
            })(DescriptionItem));
        }
    };
});
// enseignant.js
// class Enseignant
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Vuc2VpZ25hbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUNRLGVBQWUsa0RBRVYsVUFBVTs7OztBQUZmLDJCQUFlLG9CQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FBRVYsc0JBQVU7QUFDUix5QkFERixVQUFVLENBQ1AsSUFBSSxFQUFDOzBDQURSLFVBQVU7O0FBRWYsK0NBRkssVUFBVSw2Q0FFVCxJQUFJLEVBQUU7QUFDWix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3RDLDRCQUFJLElBQUksY0FBaUIsSUFBSSxTQUFTLEVBQUM7QUFDbkMsZ0NBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFpQixDQUFDO3lCQUM5QztBQUNELDRCQUFJLElBQUksU0FBWSxJQUFJLFNBQVMsRUFBQztBQUM5QixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVksQ0FBQzt5QkFDcEM7cUJBQ0o7QUFBQSxpQkFDSjs7MEJBWFEsVUFBVTs7NkJBQVYsVUFBVTtBQWVmLGlDQUFhOzs2QkFIQSxZQUFFO0FBQ2YsbUNBQU8sQUFBQyxJQUFJLENBQUMsY0FBYyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt5QkFDMUU7NkJBQ2dCLFVBQUMsQ0FBQyxFQUFDO0FBQ2hCLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBQztBQUN6RCxvQ0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQ2xDLE1BQU07QUFDSCxvQ0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7NkJBQzlCO3lCQUNKOztBQUNHLHFDQUFpQjs2QkFBQSxZQUFFO0FBQ25CLG1DQUFRLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFFO3lCQUN2Qzs7QUFJRyw0QkFBUTs2QkFIQSxZQUFFO0FBQ1YsbUNBQU8sQUFBQyxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt5QkFDaEU7NkJBQ1csVUFBQyxDQUFDLEVBQUM7QUFDWCxnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUM7QUFDekQsb0NBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUM3QixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzZCQUN6Qjt5QkFDSjs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFFO0FBQ2QsbUNBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUU7eUJBQ2xDOztBQUNHLGdDQUFZOzZCQUFBLFlBQUU7QUFDZCxtQ0FBUSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBRTt5QkFDeEQ7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBSSxFQUFDO0FBQ2YsdURBMUNLLFVBQVUsK0NBMENLLElBQUksRUFBRTtBQUMxQixnQ0FBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3RDLG9DQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBQztBQUN2Qix3Q0FBSSxjQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7aUNBQzlDO0FBQ0Esb0NBQUksSUFBSSxDQUFDLFlBQVksRUFBQztBQUNuQix3Q0FBSSxTQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FDcEM7NkJBQ0o7eUJBQ0o7O0FBQ0csbUNBQWU7OzZCQUFBLFlBQUU7QUFDakIsbUNBQU8sWUFBWSxDQUFDO3lCQUN2Qjs7Ozt1QkF0RFEsVUFBVTtlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9kb21haW4vZW5zZWlnbmFudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9