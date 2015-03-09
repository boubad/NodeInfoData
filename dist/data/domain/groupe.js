System.register(["./departementchild"], function (_export) {
    var DepartementChildItem, _createClass, _get, _inherits, _classCallCheck, Groupe;

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
            Groupe = _export("Groupe", (function (_DepartementChildItem) {
                function Groupe(oMap) {
                    _classCallCheck(this, Groupe);

                    _get(Object.getPrototypeOf(Groupe.prototype), "constructor", this).call(this, oMap);
                    this.type = "groupe";
                }

                _inherits(Groupe, _DepartementChildItem);

                _createClass(Groupe, {
                    collection_name: {
                        get: function () {
                            return "groupes";
                        }
                    }
                });

                return Groupe;
            })(DepartementChildItem));
        }
    };
});
// groupe.js
// class Groupe
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2dyb3VwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQ1Esb0JBQW9CLGtEQUVmLE1BQU07Ozs7QUFGWCxnQ0FBb0IscUJBQXBCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUFFZixrQkFBTTtBQUNKLHlCQURGLE1BQU0sQ0FDSCxJQUFJLEVBQUM7MENBRFIsTUFBTTs7QUFFWCwrQ0FGSyxNQUFNLDZDQUVMLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztpQkFDeEI7OzBCQUpRLE1BQU07OzZCQUFOLE1BQU07QUFLWCxtQ0FBZTs2QkFBQSxZQUFFO0FBQ2pCLG1DQUFPLFNBQVMsQ0FBQzt5QkFDcEI7Ozs7dUJBUFEsTUFBTTtlQUFTLG9CQUFvQiIsImZpbGUiOiJkYXRhL2RvbWFpbi9ncm91cGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==