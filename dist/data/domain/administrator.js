System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, Administrator;

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
            Administrator = _export("Administrator", (function (_DescriptionItem) {
                function Administrator(oMap) {
                    _classCallCheck(this, Administrator);

                    _get(Object.getPrototypeOf(Administrator.prototype), "constructor", this).call(this, oMap);
                    this.type = "administrator";
                    if (oMap != undefined && oMap != null) {
                        if (oMap.departementid != undefined) {
                            this.departementid = oMap.departementid;
                        }
                        if (oMap.personid != undefined) {
                            this.personid = oMap.personid;
                        }
                    } // oMap
                }

                _inherits(Administrator, _DescriptionItem);

                _createClass(Administrator, {
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
                            _get(Object.getPrototypeOf(Administrator.prototype), "to_insert_map", this).call(this, oMap);
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
                            return "administrators";
                        }
                    }
                });

                return Administrator;
            })(DescriptionItem));
        }
    };
});
// administrator.js
// class Administrator
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2FkbWluaXN0cmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUNRLGVBQWUsa0RBRVYsYUFBYTs7OztBQUZsQiwyQkFBZSxvQkFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUVWLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLElBQUksRUFBQzswQ0FEUixhQUFhOztBQUVsQiwrQ0FGSyxhQUFhLDZDQUVaLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUM1Qix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFDO0FBQ3RDLDRCQUFJLElBQUksY0FBaUIsSUFBSSxTQUFTLEVBQUM7QUFDbkMsZ0NBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFpQixDQUFDO3lCQUM5QztBQUNELDRCQUFJLElBQUksU0FBWSxJQUFJLFNBQVMsRUFBQztBQUM5QixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVksQ0FBQzt5QkFDcEM7cUJBQ0o7QUFBQSxpQkFDSjs7MEJBWlEsYUFBYTs7NkJBQWIsYUFBYTtBQWdCbEIsaUNBQWE7OzZCQUhBLFlBQUU7QUFDZixtQ0FBTyxBQUFDLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3lCQUMxRTs2QkFDZ0IsVUFBQyxDQUFDLEVBQUM7QUFDaEIsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFDO0FBQ3pELG9DQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDbEMsTUFBTTtBQUNILG9DQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzs2QkFDOUI7eUJBQ0o7O0FBQ0cscUNBQWlCOzZCQUFBLFlBQUU7QUFDbkIsbUNBQVEsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUU7eUJBQ3ZDOztBQUlHLDRCQUFROzZCQUhBLFlBQUU7QUFDVixtQ0FBTyxBQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUNoRTs2QkFDVyxVQUFDLENBQUMsRUFBQztBQUNYLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBQztBQUN6RCxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQzdCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7NkJBQ3pCO3lCQUNKOztBQUNHLGdDQUFZOzZCQUFBLFlBQUU7QUFDZCxtQ0FBUSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBRTt5QkFDbEM7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRTtBQUNkLG1DQUFRLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFFO3lCQUN4RDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUM7QUFDZix1REEzQ0ssYUFBYSwrQ0EyQ0UsSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUM7QUFDdEMsb0NBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFDO0FBQ3ZCLHdDQUFJLGNBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQ0FDOUM7QUFDQSxvQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFDO0FBQ25CLHdDQUFJLFNBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2lDQUNwQzs2QkFDSjt5QkFDSjs7QUFDRyxtQ0FBZTs7NkJBQUEsWUFBRTtBQUNqQixtQ0FBTyxnQkFBZ0IsQ0FBQzt5QkFDM0I7Ozs7dUJBdkRRLGFBQWE7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2FkbWluaXN0cmF0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==