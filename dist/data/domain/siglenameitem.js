System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, SigleNameItem;

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
            SigleNameItem = _export("SigleNameItem", (function (_DescriptionItem) {
                function SigleNameItem(oMap) {
                    _classCallCheck(this, SigleNameItem);

                    _get(Object.getPrototypeOf(SigleNameItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.sigle != undefined) {
                            this.sigle = oMap.sigle;
                        }
                        if (oMap.name != undefined) {
                            this.name = oMap.name;
                        }
                    } // oMap
                }

                _inherits(SigleNameItem, _DescriptionItem);

                _createClass(SigleNameItem, {
                    sigle: { // constructor

                        get: function () {
                            return this._sigle != undefined ? this._sigle : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._sigle = s.trim().toLowerCase();
                            } else {
                                this._sigle = null;
                            }
                        }
                    },
                    has_sigle: {
                        get: function () {
                            return this.sigle != null;
                        }
                    },
                    name: {
                        get: function () {
                            return this._name != undefined ? this._name : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._name = s.trim();
                            } else {
                                this._name = null;
                            }
                        }
                    },
                    has_name: {
                        get: function () {
                            return this.name != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return this.has_sigle;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(SigleNameItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_sigle) {
                                    oMap.sigle = this.sigle;
                                }
                                if (this.has_name) {
                                    oMap.name = this.name;
                                }
                            }
                        } // toInsertMap

                    }
                });

                return SigleNameItem;
            })(DescriptionItem));
        }
    };
});
// siglenameitem.js
// class DescriptionItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NpZ2xlbmFtZWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUVJLGVBQWUsa0RBSU4sYUFBYTs7OztBQUp0QiwyQkFBZSxvQkFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUlOLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLElBQUksRUFBRTswQ0FEVCxhQUFhOztBQUVkLCtDQUZDLGFBQWEsNkNBRVIsSUFBSSxFQUFFO0FBQ1osd0JBQUksQUFBQyxJQUFJLElBQUksU0FBUyxJQUFNLElBQUksSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUN2Qyw0QkFBSSxJQUFJLE1BQVMsSUFBSSxTQUFTLEVBQUU7QUFDNUIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFTLENBQUM7eUJBQzlCO0FBQ0QsNEJBQUksSUFBSSxLQUFRLElBQUksU0FBUyxFQUFFO0FBQzNCLGdDQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBUSxDQUFDO3lCQUM1QjtxQkFDSjtBQUFBLGlCQUNKOzswQkFYSSxhQUFhOzs2QkFBYixhQUFhO0FBZWxCLHlCQUFLOzs2QkFIQSxZQUFHO0FBQ1IsbUNBQU8sQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDMUQ7NkJBQ1EsVUFBQyxDQUFDLEVBQUU7QUFDVCxnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDMUQsb0NBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOzZCQUN4QyxNQUFNO0FBQ0gsb0NBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzZCQUN0Qjt5QkFDSjs7QUFDRyw2QkFBUzs2QkFBQSxZQUFHO0FBQ1osbUNBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUU7eUJBQy9COztBQUlHLHdCQUFJOzZCQUhBLFlBQUc7QUFDUCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUN4RDs2QkFDTyxVQUFDLENBQUMsRUFBRTtBQUNSLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQ3pCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7NkJBQ3JCO3lCQUNKOztBQUNHLDRCQUFROzZCQUFBLFlBQUc7QUFDWCxtQ0FBUSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBRTt5QkFDOUI7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRztBQUNmLG1DQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ3pCOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQVMsRUFBUTtBQUN2Qix1REExQ0MsYUFBYSwrQ0EwQ00sSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQix3Q0FBSSxNQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQ0FDOUI7QUFDRCxvQ0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysd0NBQUksS0FBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUNBQzVCOzZCQUNKO3lCQUNKO0FBQUE7Ozs7dUJBbkRJLGFBQWE7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL3NpZ2xlbmFtZWl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==