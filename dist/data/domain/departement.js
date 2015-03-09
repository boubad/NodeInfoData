System.register(["./siglenameitem"], function (_export) {
    var SigleNameItem, _createClass, _get, _inherits, _classCallCheck, Departement;

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
            Departement = _export("Departement", (function (_SigleNameItem) {
                function Departement(oMap) {
                    _classCallCheck(this, Departement);

                    _get(Object.getPrototypeOf(Departement.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Departement, _SigleNameItem);

                _createClass(Departement, {
                    collection_name: { // constructor

                        get: function () {
                            return "departements";
                        }
                    }
                });

                return Departement;
            })(SigleNameItem));
        }
    };
});
// departement.js
// class Departement
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxhQUFhLGtEQUlKLFdBQVc7Ozs7QUFKcEIseUJBQWEsa0JBQWIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFJSix1QkFBVztBQUNULHlCQURGLFdBQVcsQ0FDUixJQUFJLEVBQUU7MENBRFQsV0FBVzs7QUFFWiwrQ0FGQyxXQUFXLDZDQUVOLElBQUksRUFBRTtpQkFDZjs7MEJBSEksV0FBVzs7NkJBQVgsV0FBVztBQUloQixtQ0FBZTs7NkJBQUEsWUFBRztBQUNsQixtQ0FBTyxjQUFjLENBQUM7eUJBQ3pCOzs7O3VCQU5RLFdBQVc7ZUFBUyxhQUFhIiwiZmlsZSI6ImRhdGEvZG9tYWluL2RlcGFydGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=