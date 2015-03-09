System.register([], function (_export) {
    var _createClass, _classCallCheck, BaseItem;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            // baseitem.js
            //
            BaseItem = _export("BaseItem", (function () {
                function BaseItem(oMap) {
                    _classCallCheck(this, BaseItem);

                    if (oMap != undefined && oMap != null) {
                        if (oMap._id != undefined) {
                            this.id = oMap._id;
                        }
                        if (oMap._rev != undefined) {
                            this.rev = oMap._rev;
                        }
                    } // oMap
                }

                _createClass(BaseItem, {
                    id: { // constructor
                        //

                        get: function () {
                            return this._id != undefined ? this._id : null;
                        },
                        // id
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._id = s.trim();
                            } else {
                                this._id = null;
                            }
                        }
                    },
                    has_id: { // id

                        get: function () {
                            return this.id != null;
                        }
                    },
                    rev: {
                        get: function () {
                            return this._rev != undefined ? this._rev : null;
                        },
                        // id
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._rev = s.trim();
                            } else {
                                this._rev = null;
                            }
                        }
                    },
                    has_rev: { // id

                        get: function () {
                            return this.rev != null;
                        }
                    },
                    is_storeable: {
                        //

                        get: function () {
                            return false;
                        }
                    },
                    collection_name: {
                        get: function () {
                            return null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {}
                    },
                    to_fetch_map: { // toInsertMap

                        value: function to_fetch_map(oMap) {
                            if (oMap != undefined && oMap != null) {
                                this.to_insert_map(oMap);
                                if (this.has_id) {
                                    oMap._id = this.id;
                                }
                                if (this.has_rev) {
                                    oMap._rev = this.rev;
                                }
                            }
                        }
                    },
                    toString: { // to_fetch_map

                        value: function toString() {
                            var oMap = {};
                            this.to_fetch_map(oMap);
                            return JSON.stringify(oMap);
                        } // toString

                    }
                });

                return BaseItem;
            })());
        }
    };
});
// class BaseItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Jhc2VpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUNBRWEsUUFBUTs7Ozs7Ozs7Ozs7OztBQUFSLG9CQUFRO0FBQ04seUJBREYsUUFBUSxDQUNMLElBQUksRUFBRTswQ0FEVCxRQUFROztBQUVULHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsNEJBQUksSUFBSSxJQUFPLElBQUksU0FBUyxFQUFFO0FBQzFCLGdDQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBTyxDQUFDO3lCQUN6QjtBQUNELDRCQUFJLElBQUksS0FBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQixnQ0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQVEsQ0FBQzt5QkFDM0I7cUJBQ0o7QUFBQSxpQkFDSjs7NkJBVkksUUFBUTtBQWViLHNCQUFFOzs7NkJBSEEsWUFBRztBQUNELG1DQUFPLEFBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7eUJBQ3BEOzs2QkFDQyxVQUFDLENBQUMsRUFBRTtBQUNGLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQ0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQ3ZCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7NkJBQ25CO3lCQUNKOztBQUNELDBCQUFNOzs2QkFBQSxZQUFHO0FBQ1QsbUNBQVEsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUU7eUJBQzVCOztBQUlHLHVCQUFHOzZCQUhBLFlBQUc7QUFDRixtQ0FBTyxBQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3lCQUN0RDs7NkJBQ0UsVUFBQyxDQUFDLEVBQUU7QUFDSCxnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDMUQsb0NBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUN4QixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzZCQUNwQjt5QkFDSjs7QUFDRCwyQkFBTzs7NkJBQUEsWUFBRztBQUNOLG1DQUFRLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFFO3lCQUM3Qjs7QUFFRCxnQ0FBWTs7OzZCQUFBLFlBQUc7QUFDZixtQ0FBTyxLQUFLLENBQUM7eUJBQ2hCOztBQUNHLG1DQUFlOzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sSUFBSSxDQUFDO3lCQUNmOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRSxFQUFFOztBQUN0QixnQ0FBWTs7K0JBQUEsc0JBQUMsSUFBUyxFQUFRO0FBQ3RCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsb0NBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNiLHdDQUFJLElBQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2lDQUN6QjtBQUNELG9DQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCx3Q0FBSSxLQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDM0I7NkJBQ0o7eUJBQ0o7O0FBQ0wsNEJBQVE7OytCQUFBLG9CQUFHO0FBQ0gsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLG1DQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQy9CO0FBQUE7Ozs7dUJBN0RJLFFBQVEiLCJmaWxlIjoiZGF0YS9kb21haW4vYmFzZWl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==