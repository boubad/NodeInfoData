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
                    this.type = "person";
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
//# sourceMappingURL=data:application/json;base64,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