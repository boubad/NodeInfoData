System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, Person;

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
            Person = _export("Person", (function (_DescriptionItem) {
                function Person(oMap) {
                    _classCallCheck(this, Person);

                    _get(Object.getPrototypeOf(Person.prototype), "constructor", this).call(this, oMap);
                    if (oMap != undefined && oMap != null) {
                        if (oMap.username != undefined) {
                            this.username = oMap.username;
                        }
                        if (oMap.firstname != undefined) {
                            this.firstname = oMap.firstname;
                        }
                        if (oMap.lastname != undefined) {
                            this.lastname = oMap.lastname;
                        }
                        if (oMap.password != undefined) {
                            this.password = oMap.password;
                        }
                        if (oMap.email != undefined) {
                            this.email = oMap.email;
                        }
                        if (oMap.phone != undefined) {
                            this.phone = oMap.phone;
                        }
                        if (oMap.departementids != undefined) {
                            this.departementids = oMap.departementids;
                        } //
                        if (oMap.roles != undefined) {
                            this.roles = oMap.roles;
                        } //
                    } // oMap
                }

                _inherits(Person, _DescriptionItem);

                _createClass(Person, {
                    departementids: { // constructor

                        get: function () {
                            return this._deps != undefined && this._deps != null ? this._deps : null;
                        },
                        // getDepartementids
                        set: function (s) {
                            this._deps = null;
                            if (s != undefined && s != null && s.length > 0) {
                                this._deps = new Set();
                                var n = s.length;
                                for (var i = 0; i < n; ++i) {
                                    var x = s[i];
                                    if (x != null && x.trim().length > 0) {
                                        this._deps.add(x.trim());
                                    } // x
                                } // i
                            }
                        }
                    },
                    has_departementids: {
                        get: function () {
                            return this.departementids != null;
                        }
                    },
                    add_departementid: {
                        value: function add_departementid(id) {
                            if (id != undefined && id != null && id.trim().length > 0) {
                                if (this._deps == undefined || this._deps == null) {
                                    this._deps = new Set();
                                }
                                this._deps.add(id.trim());
                            }
                        }
                    },
                    roles: { // add_departementid
                        //

                        get: function () {
                            return this._roles != undefined && this._roles != null ? this._roles : null;
                        },
                        set: function (s) {
                            this._roles = null;
                            if (s != undefined && s != null && s.length > 0) {
                                this._roles = new Set();
                                var n = s.length;
                                for (var i = 0; i < n; ++i) {
                                    var x = s[i];
                                    if (x != null && x.trim().length > 0) {
                                        this._roles.add(x.trim().toLowerCase());
                                    } // x
                                } // i
                            }
                        }
                    },
                    has_roles: {
                        get: function () {
                            return this.roles != null;
                        }
                    },
                    add_role: {
                        value: function add_role(id) {
                            if (id != undefined && id != null && id.trim().length > 0) {
                                if (this._roles == undefined || this._roles == null) {
                                    this._roles = new Set();
                                }
                                this._roles.add(id.trim().toLowerCase());
                            }
                        }
                    },
                    collection_name: { // add_departementid
                        //

                        get: function () {
                            return "persons";
                        }
                    },
                    username: {
                        get: function () {
                            return this._user != undefined ? this._user : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._user = s.trim().toLowerCase();
                            }
                        }
                    },
                    has_username: {
                        get: function () {
                            rturn(this.username != null);
                        }
                    },
                    lastname: {
                        //

                        get: function () {
                            return this._last != undefined ? this._last : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._last = s.trim().toUpperCase();
                            }
                        }
                    },
                    has_lastname: {
                        get: function () {
                            rturn(this.lastname != null);
                        }
                    },
                    firstname: {
                        //

                        get: function () {
                            return this._first != undefined ? this._first : null;
                        }
                    },
                    firsname: {
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                var ss = s.trim();
                                var n = ss.length;
                                if (n > 1) {
                                    this.first = ss.substr(0, 1).toUpperCase() + ss.substr(1, n - 1).toLowerCase();
                                } else {
                                    this._first = ss.toUpperCase();
                                }
                                this._last = s.trim().toUpperCase();
                            }
                        }
                    },
                    has_firstname: {
                        get: function () {
                            rturn(this.firstname != null);
                        }
                    },
                    fullname: {
                        //

                        get: function () {
                            var s = "";
                            if (this.has_lastname) {
                                s = this.lastname;
                            }
                            if (this.has_firstname) {
                                s = s + " " + this.firstname;
                            }
                            s = s.trim();
                            return s.length > 0 ? s : null;
                        }
                    },
                    has_fullname: { // fullname

                        get: function () {
                            return this.fullname != null;
                        }
                    },
                    password: {
                        //

                        get: function () {
                            return this._pass != undefined ? this._pass : null;
                        }
                    },
                    passord: {
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._pass = s.trim();
                            }
                        }
                    },
                    has_password: {
                        get: function () {
                            rturn(this.password != null);
                        }
                    },
                    email: {
                        // 

                        get: function () {
                            return this._email != undefined ? this._email : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._email = s.trim();
                            }
                        }
                    },
                    has_email: {
                        get: function () {
                            rturn(this.email != null);
                        }
                    },
                    phone: {
                        //
                        // 

                        get: function () {
                            return this._phone != undefined ? this._phone : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._phone = s.trim();
                            }
                        }
                    },
                    has_phone: {
                        get: function () {
                            rturn(this.phone != null);
                        }
                    },
                    to_insert_map: {
                        //

                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Person.prototype), "to_insert_map", this).call(this, oMap);
                            if (oMap != undefined && oMap != null) {
                                if (this.has_username) {
                                    oMap.username = this.username;
                                }
                                if (this.has_password) {
                                    oMap.password = this.password;
                                }
                                if (this.has_firstname) {
                                    oMap.firstname = this.firstname;
                                }
                                if (this.has_lastname) {
                                    oMap.lastname = this.lastname;
                                }
                                if (this.has_email) {
                                    oMap.email = this.email;
                                }
                                if (this.has_phone) {
                                    oMap.phone = this.phone;
                                }
                                if (this.has_departementids) {
                                    var r = [];
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = this.departementids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var id = _step.value;

                                            r.push(id);
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator["return"]) {
                                                _iterator["return"]();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }

                                    // id
                                    if (r.length > 0) {
                                        oMap.departementids = r;
                                    }
                                } //
                                if (this.has_roles) {
                                    var r = [];
                                    var _iteratorNormalCompletion2 = true;
                                    var _didIteratorError2 = false;
                                    var _iteratorError2 = undefined;

                                    try {
                                        for (var _iterator2 = this.roles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            var id = _step2.value;

                                            r.push(id);
                                        }
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                                                _iterator2["return"]();
                                            }
                                        } finally {
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }

                                    // id
                                    if (r.length > 0) {
                                        oMap.roles = r;
                                    }
                                } //
                            } // oMap
                        }
                    },
                    is_storeable: { // to_insert_map

                        get: function () {
                            return this.has_username && this.has_lastname && this.has_firstname;
                        }
                    },
                    hasrole: {
                        value: function hasrole(r) {
                            if (this._roles == undefined || this._roles == null || r == undefined || r == null) {
                                return false;
                            }
                            var rr = r.trim().toLowerCase();
                            if (rr.length < 1) {
                                return false;
                            }
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = this._roles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var x = _step.value;

                                    if (x == rr) {
                                        return true;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                                        _iterator["return"]();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            // x
                            return false;
                        }
                    },
                    is_admin: { // hasrole_

                        get: function () {
                            return this.hasrole("admin");
                        }
                    },
                    is_oper: {
                        get: function () {
                            return this.hasrole("oper");
                        }
                    },
                    is_prof: {
                        get: function () {
                            return this.hasrole("prof");
                        }
                    },
                    is_etud: {
                        get: function () {
                            return this.hasrole("etud");
                        }
                    },
                    is_reader: {
                        get: function () {
                            return this.hasrole("reader");
                        }
                    },
                    is_super: {
                        get: function () {
                            return this.hasrole("super");
                        }
                    },
                    has_departementid: {
                        get: function () {
                            return false;
                        }
                    }
                });

                return Person;
            })(DescriptionItem));
        }
    };
});
// person.js
// class Person
//# sourceMappingURL=data:application/json;base64,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QUFNO3dDQUFoQixDQUFDOztBQUNOLHdDQUFJLENBQUMsSUFBSSxFQUFFLEVBQUM7QUFDUiwrQ0FBTyxJQUFJLENBQUM7cUNBQ2Y7aUNBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsbUNBQU8sS0FBSyxDQUFDO3lCQUNoQjs7QUFDRyw0QkFBUTs7NkJBQUEsWUFBRTtBQUNWLG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2hDOztBQUNHLDJCQUFPOzZCQUFBLFlBQUU7QUFDVCxtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUMvQjs7QUFDRywyQkFBTzs2QkFBQSxZQUFFO0FBQ1QsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDL0I7O0FBQ0csMkJBQU87NkJBQUEsWUFBRTtBQUNULG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQy9COztBQUNHLDZCQUFTOzZCQUFBLFlBQUU7QUFDWCxtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUNqQzs7QUFDRyw0QkFBUTs2QkFBQSxZQUFFO0FBQ1YsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDaEM7O0FBQ0cscUNBQWlCOzZCQUFBLFlBQUU7QUFDbkIsbUNBQU8sS0FBSyxDQUFDO3lCQUNoQjs7Ozt1QkF4UVEsTUFBTTtlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9kb21haW4vcGVyc29uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=