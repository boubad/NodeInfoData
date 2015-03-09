System.register(["./intervalitem"], function (_export) {
    var IntervalItem, _createClass, _get, _inherits, _classCallCheck, Annee;

    return {
        setters: [function (_intervalitem) {
            IntervalItem = _intervalitem.IntervalItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Annee = _export("Annee", (function (_IntervalItem) {
                function Annee(oMap) {
                    _classCallCheck(this, Annee);

                    _get(Object.getPrototypeOf(Annee.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Annee, _IntervalItem);

                _createClass(Annee, {
                    collection_name: {
                        get: function () {
                            return "annees";
                        }
                    }
                });

                return Annee;
            })(IntervalItem));
        }
    };
});
// annee.js
// class Annee
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2FubmVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxZQUFZLGtEQUlILEtBQUs7Ozs7QUFKZCx3QkFBWSxpQkFBWixZQUFZOzs7Ozs7Ozs7Ozs7OztBQUlILGlCQUFLO0FBQ0gseUJBREYsS0FBSyxDQUNGLElBQUksRUFBRTswQ0FEVCxLQUFLOztBQUVWLCtDQUZLLEtBQUssNkNBRUosSUFBSSxFQUFFO2lCQUNmOzswQkFIUSxLQUFLOzs2QkFBTCxLQUFLO0FBSVYsbUNBQWU7NkJBQUEsWUFBRztBQUNsQixtQ0FBTyxRQUFRLENBQUM7eUJBQ25COzs7O3VCQU5RLEtBQUs7ZUFBUyxZQUFZIiwiZmlsZSI6ImRhdGEvZG9tYWluL2FubmVlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=