System.register(["./departementchild"], function (_export) {
    var DepartementChildItem, _createClass, _get, _inherits, _classCallCheck, Unite;

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
            Unite = _export("Unite", (function (_DepartementChildItem) {
                function Unite(oMap) {
                    _classCallCheck(this, Unite);

                    _get(Object.getPrototypeOf(Unite.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Unite, _DepartementChildItem);

                _createClass(Unite, {
                    collection_name: {
                        get: function () {
                            return "unites";
                        }
                    }
                });

                return Unite;
            })(DepartementChildItem));
        }
    };
});
// unite.js
// class DepartementChildItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3VuaXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUSxvQkFBb0Isa0RBRWYsS0FBSzs7OztBQUZWLGdDQUFvQixxQkFBcEIsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQUVmLGlCQUFLO0FBQ0gseUJBREYsS0FBSyxDQUNGLElBQUksRUFBQzswQ0FEUixLQUFLOztBQUVWLCtDQUZLLEtBQUssNkNBRUosSUFBSSxFQUFFO2lCQUNmOzswQkFIUSxLQUFLOzs2QkFBTCxLQUFLO0FBSVYsbUNBQWU7NkJBQUEsWUFBRTtBQUNqQixtQ0FBTyxRQUFRLENBQUM7eUJBQ25COzs7O3VCQU5RLEtBQUs7ZUFBUyxvQkFBb0IiLCJmaWxlIjoiZGF0YS9kb21haW4vdW5pdGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==