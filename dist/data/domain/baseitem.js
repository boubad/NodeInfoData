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
                        if (oMap.type != undefined) {
                            this.type = oMap.type;
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
                    type: {
                        get: function () {
                            return this._type != undefined ? this._type : null;
                        },
                        set: function (s) {
                            this._type = s != undefined && s != null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_type: {
                        get: function () {
                            return this.type != null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            if (oMap != null && oMap != null) {
                                if (this.has_type) {
                                    oMap.type = this.type;
                                }
                            }
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Jhc2VpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUNBRWEsUUFBUTs7Ozs7Ozs7Ozs7OztBQUFSLG9CQUFRO0FBQ04seUJBREYsUUFBUSxDQUNMLElBQUksRUFBRTswQ0FEVCxRQUFROztBQUVULHdCQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsNEJBQUksSUFBSSxJQUFPLElBQUksU0FBUyxFQUFFO0FBQzFCLGdDQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBTyxDQUFDO3lCQUN6QjtBQUNELDRCQUFJLElBQUksS0FBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQixnQ0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQVEsQ0FBQzt5QkFDM0I7QUFDRCw0QkFBSSxJQUFJLEtBQVEsSUFBSSxTQUFTLEVBQUM7QUFDMUIsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFRLENBQUM7eUJBQzVCO3FCQUNKO0FBQUEsaUJBQ0o7OzZCQWJJLFFBQVE7QUFrQmIsc0JBQUU7Ozs2QkFIQSxZQUFHO0FBQ0QsbUNBQU8sQUFBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzt5QkFDcEQ7OzZCQUNDLFVBQUMsQ0FBQyxFQUFFO0FBQ0YsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzFELG9DQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDdkIsTUFBTTtBQUNILG9DQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzs2QkFDbkI7eUJBQ0o7O0FBQ0QsMEJBQU07OzZCQUFBLFlBQUc7QUFDVCxtQ0FBUSxJQUFJLENBQUMsRUFB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