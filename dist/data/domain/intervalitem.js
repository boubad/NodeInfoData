System.register(["./departementchild"], function (_export) {
    var DepartementChildItem, _createClass, _get, _inherits, _classCallCheck, IntervalItem;

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
            IntervalItem = _export("IntervalItem", (function (_DepartementChildItem) {
                function IntervalItem(oMap) {
                    _classCallCheck(this, IntervalItem);

                    _get(Object.getPrototypeOf(IntervalItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.startDate != undefined) {
                            this.startDate = oMap.startDate;
                        }
                        if (oMap.endDate != undefined) {
                            this.endDate = oMap.endDate;
                        }
                    }
                }

                _inherits(IntervalItem, _DepartementChildItem);

                _createClass(IntervalItem, {
                    startDate: {
                        get: function () {
                            return this._start != undefined ? this._start : null;
                        },
                        set: function (d) {
                            this._start = d != undefined ? d : null;
                        }
                    },
                    has_startDate: {
                        get: function () {
                            return this.startDate != null;
                        }
                    },
                    endDate: {
                        get: function () {
                            return this._end != undefined ? this._end : null;
                        },
                        set: function (d) {
                            this._end = d != undefined ? d : null;
                        }
                    },
                    has_endDate: {
                        get: function () {
                            return this.endDate != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(IntervalItem.prototype), "is_storeable", this) && this.has_startDate && this.has_endDate;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(IntervalItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_startDate()) {
                                    oMap.startDate = this.startDate;
                                }
                                if (this.has_endDate()) {
                                    oMap.endDate = this.endDate;
                                }
                            }
                        } // to_insert_map

                    }
                });

                return IntervalItem;
            })(DepartementChildItem));
        }
    };
});
// intervalitem.js
// class IntervalItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2ludGVydmFsaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksb0JBQW9CLGtEQUlYLFlBQVk7Ozs7QUFKckIsZ0NBQW9CLHFCQUFwQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FBSVgsd0JBQVk7QUFDVix5QkFERixZQUFZLENBQ1QsSUFBSSxFQUFFOzBDQURULFlBQVk7O0FBRWpCLCtDQUZLLFlBQVksNkNBRVgsSUFBSSxFQUFFO0FBQ1osd0JBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2Qyw0QkFBSSxJQUFJLFVBQWEsSUFBSSxTQUFTLEVBQUU7QUFDaEMsZ0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFhLENBQUM7eUJBQ3RDO0FBQ0QsNEJBQUksSUFBSSxRQUFXLElBQUksU0FBUyxFQUFFO0FBQzlCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBVyxDQUFDO3lCQUNsQztxQkFDSjtpQkFDSjs7MEJBWFEsWUFBWTs7NkJBQVosWUFBWTtBQWVqQiw2QkFBUzs2QkFIQSxZQUFHO0FBQ1osbUNBQU8sQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDMUQ7NkJBQ1ksVUFBQyxDQUFDLEVBQUU7QUFDYixnQ0FBSSxDQUFDLE1BQU0sR0FBRyxBQUFDLENBQUMsSUFBSSxTQUFTLEdBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt5QkFDN0M7O0FBQ0csaUNBQWE7NkJBQUEsWUFBRztBQUNoQixtQ0FBUSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBRTt5QkFDbkM7O0FBSUcsMkJBQU87NkJBSEEsWUFBRztBQUNWLG1DQUFPLEFBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7eUJBQ3REOzZCQUNVLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsQUFBQyxDQUFDLElBQUksU0FBUyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQzNDOztBQUNHLCtCQUFXOzZCQUFBLFlBQUc7QUFDZCxtQ0FBUSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBRTt5QkFDakM7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBWTtBQUN4QixtQ0FBUSwyQkEvQkgsWUFBWSxzQ0ErQmEsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFFO3lCQUN6RTs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REFsQ0MsWUFBWSwrQ0FrQ08sSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO0FBQ3RCLHdDQUFJLFVBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2lDQUN0QztBQUNELG9DQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtBQUNwQix3Q0FBSSxRQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQ0FDbEM7NkJBQ0o7eUJBQ0o7QUFBQTs7Ozt1QkEzQ0ksWUFBWTtlQUFTLG9CQUFvQiIsImZpbGUiOiJkYXRhL2RvbWFpbi9pbnRlcnZhbGl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==