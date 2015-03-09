System.register(["./baseitem"], function (_export) {
    var BaseItem, _createClass, _get, _inherits, _classCallCheck, DescriptionItem;

    return {
        setters: [function (_baseitem) {
            BaseItem = _baseitem.BaseItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DescriptionItem = _export("DescriptionItem", (function (_BaseItem) {
                function DescriptionItem(oMap) {
                    _classCallCheck(this, DescriptionItem);

                    _get(Object.getPrototypeOf(DescriptionItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.description != undefined) {
                            this.description = oMap.description;
                        }
                        if (oMap.avatarid != undefined) {
                            this.avatarid = oMap.avatarid;
                        }
                    } // oMap
                }

                _inherits(DescriptionItem, _BaseItem);

                _createClass(DescriptionItem, {
                    avatarid: { // constructor

                        get: function () {
                            return this._avatarid != undefined ? this._avatarid : null;
                        },
                        // id
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._avatarid = s.trim();
                            } else {
                                this._avatarid = null;
                            }
                        }
                    },
                    has_avatarid: { // id

                        get: function () {
                            return this.avatarid != null;
                        }
                    },
                    description: {
                        get: function () {
                            return this._desc != undefined ? this._desc : null;
                        },
                        // description
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._desc = s.trim();
                            } else {
                                this._desc = null;
                            }
                        }
                    },
                    has_description: { // description

                        get: function () {
                            return this.description != null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DescriptionItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_description) {
                                    oMap.description = this.description;
                                }
                                if (this.has_avatarid) {
                                    oMap.avatarid = this.avatarid;
                                }
                            }
                        } // toInsertMap

                    }
                });

                return DescriptionItem;
            })(BaseItem));
        }
    };
});
// descriptionitem.js
// class DescriptionItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Rlc2NyaXB0aW9uaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksUUFBUSxrREFJQyxlQUFlOzs7O0FBSnhCLG9CQUFRLGFBQVIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFJQywyQkFBZTtBQUNiLHlCQURGLGVBQWUsQ0FDWixJQUFJLEVBQUU7MENBRFQsZUFBZTs7QUFFaEIsK0NBRkMsZUFBZSw2Q0FFVixJQUFJLEVBQUU7QUFDWix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLDRCQUFJLElBQUksWUFBZSxJQUFJLFNBQVMsRUFBRTtBQUNsQyxnQ0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQWUsQ0FBQzt5QkFDMUM7QUFDRCw0QkFBSSxJQUFJLFNBQVksSUFBSSxTQUFTLEVBQUU7QUFDL0IsZ0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFZLENBQUM7eUJBQ3BDO3FCQUNKO0FBQUEsaUJBQ0o7OzBCQVhJLGVBQWU7OzZCQUFmLGVBQWU7QUFlcEIsNEJBQVE7OzZCQUhBLFlBQUc7QUFDUCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUNoRTs7NkJBQ08sVUFBQyxDQUFDLEVBQUU7QUFDUixnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUM7QUFDekQsb0NBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUM3QixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzZCQUN6Qjt5QkFDSjs7QUFDRCxnQ0FBWTs7NkJBQUEsWUFBRztBQUNmLG1DQUFRLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFFO3lCQUNsQzs7QUFJRywrQkFBVzs2QkFIQSxZQUFHO0FBQ1YsbUNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt5QkFDeEQ7OzZCQUNVLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFDO0FBQ3pELG9DQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDekIsTUFBTTtBQUNILG9DQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs2QkFDckI7eUJBQ0o7O0FBQ0QsbUNBQWU7OzZCQUFBLFlBQUc7QUFDbEIsbUNBQVEsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUU7eUJBQ3JDOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQVMsRUFBUTtBQUN2Qix1REF2Q0MsZUFBZSwrQ0F1Q0ksSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtBQUN0Qix3Q0FBSSxZQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQ0FDMUM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLHdDQUFJLFNBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2lDQUNwQzs2QkFDSjt5QkFDSjtBQUFBOzs7O3VCQWhESSxlQUFlO2VBQVMsUUFBUSIsImZpbGUiOiJkYXRhL2RvbWFpbi9kZXNjcmlwdGlvbml0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==