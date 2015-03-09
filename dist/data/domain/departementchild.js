System.register(["./siglenameitem"], function (_export) {
    var SigleNameItem, _createClass, _get, _inherits, _classCallCheck, DepartementChildItem;

    return {
        setters: [function (_siglenameitem) {
            SigleNameItem = _siglenameitem.SigleNameItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DepartementChildItem = _export("DepartementChildItem", (function (_SigleNameItem) {
                function DepartementChildItem(oMap) {
                    _classCallCheck(this, DepartementChildItem);

                    _get(Object.getPrototypeOf(DepartementChildItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                    } // oMap
                }

                _inherits(DepartementChildItem, _SigleNameItem);

                _createClass(DepartementChildItem, {
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
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(DepartementChildItem.prototype), "is_storeable", this) && this.has_departementid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DepartementChildItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_departementid) {
                                    oMap.departementid = this.departementid;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return DepartementChildItem;
            })(SigleNameItem));
        }
    };
});
//departementchild.js
//
// class DepartementChildItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50Y2hpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUVRLGFBQWEsa0RBRVIsb0JBQW9COzs7O0FBRnpCLHlCQUFhLGtCQUFiLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FBRVIsZ0NBQW9CO0FBQ2xCLHlCQURGLG9CQUFvQixDQUNqQixJQUFJLEVBQUM7MENBRFIsb0JBQW9COztBQUV6QiwrQ0FGSyxvQkFBb0IsNkNBRW5CLElBQUksRUFBRTtBQUNaLHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDdEMsNEJBQUksSUFBSSxjQUFpQixJQUFJLFNBQVMsRUFBQztBQUNuQyxnQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGNBQWlCLENBQUM7eUJBQzlDO3FCQUNKO0FBQUEsaUJBQ0o7OzBCQVJRLG9CQUFvQjs7NkJBQXBCLG9CQUFvQjtBQVl6QixpQ0FBYTs7NkJBSEEsWUFBRTtBQUNmLG1DQUFPLEFBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7eUJBQzFFOzZCQUNnQixVQUFDLENBQUMsRUFBQztBQUNoQixnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUM7QUFDekQsb0NBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUNsQyxNQUFNO0FBQ0gsb0NBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDOzZCQUM5Qjt5QkFDSjs7QUFDRyxxQ0FBaUI7NkJBQUEsWUFBRTtBQUNuQixtQ0FBUSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBRTt5QkFDdkM7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRTtBQUNkLG1DQUFRLDJCQXZCSCxvQkFBb0Isc0NBdUJLLElBQUksQ0FBQyxpQkFBaUIsQ0FBRTt5QkFDekQ7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBSSxFQUFDO0FBQ2YsdURBMUJLLG9CQUFvQiwrQ0EwQkwsSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDdEMsb0NBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFDO0FBQ3ZCLHdDQUFJLGNBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQ0FDOUM7NkJBQ0o7eUJBQ0o7QUFBQTs7Ozt1QkFoQ1Esb0JBQW9CO2VBQVMsYUFBYSIsImZpbGUiOiJkYXRhL2RvbWFpbi9kZXBhcnRlbWVudGNoaWxkLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=