System.register(["./descriptionitem", "../utils/crypto"], function (_export) {
    var DescriptionItem, Crypto, _createClass, _get, _inherits, _classCallCheck, Person;

    return {
        setters: [function (_descriptionitem) {
            DescriptionItem = _descriptionitem.DescriptionItem;
        }, function (_utilsCrypto) {
            Crypto = _utilsCrypto.Crypto;
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
                    reset_password: { // constructor

                        value: function reset_password() {
                            if (this.has_username) {
                                var cc = new Crypto();
                                this.password = cc.md5(this.username);
                            } else {
                                this.password = null;
                            }
                        }
                    },
                    change_password: {
                        value: function change_password(ct) {
                            if (ct == undefined || ct == null) {
                                this.password = null;
                            } else {
                                var _v = null;
                                var x = ct.trim();
                                if (x.length > 0) {
                                    var cc = new Crypto();
                                    _v = cc.md5(this.username);
                                }
                                this.password = _v;
                            }
                        }
                    },
                    check_password: {
                        value: function check_password(ct) {
                            if (ct == undefined || ct == null) {
                                if (this.has_password) {
                                    return false;
                                }
                            }
                            var x = ct.trim();
                            if (x.length < 1) {
                                if (this.has_password) {
                                    return false;
                                }
                            }
                            if (!this.has_password) {
                                return false;
                            }
                            var cc = new Crypto();
                            v = cc.md5(x);
                            return this.password == v;
                        }
                    },
                    departementids: { // check_password

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

//
// class Person
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksZUFBZSxFQUtmLE1BQU0sa0RBSUcsTUFBTTs7OztBQVRmLDJCQUFlLG9CQUFmLGVBQWU7O0FBS2Ysa0JBQU0sZ0JBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUFJRyxrQkFBTTtBQUNKLHlCQURGLE1BQU0sQ0FDSCxJQUFJLEVBQUU7MENBRFQsTUFBTTs7QUFFUCwrQ0FGQyxNQUFNLDZDQUVELElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNyQix3QkFBSSxBQUFDLElBQUksSUFBSSxTQUFTLElBQU0sSUFBSSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3ZDLDRCQUFJLElBQUksU0FBWSxJQUFJLFNBQVMsRUFBRTtBQUMvQixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVksQ0FBQzt5QkFDcEM7QUFDRCw0QkFBSSxJQUFJLFVBQWEsSUFBSSxTQUFTLEVBQUU7QUFDaEMsZ0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFhLENBQUM7eUJBQ3RDO0FBQ0QsNEJBQUksSUFBSSxTQUFZLElBQUksU0FBUyxFQUFFO0FBQy9CLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBWSxDQUFDO3lCQUNwQztBQUNELDRCQUFJLElBQUksU0FBWSxJQUFJLFNBQVMsRUFBRTtBQUMvQixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVksQ0FBQzt5QkFDcEM7QUFDRCw0QkFBSSxJQUFJLE1BQVMsSUFBSSxTQUFTLEVBQUU7QUFDNUIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFTLENBQUM7eUJBQzlCO0FBQ0QsNEJBQUksSUFBSSxNQUFTLElBQUksU0FBUyxFQUFFO0FBQzVCLGdDQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBUyxDQUFDO3lCQUM5QjtBQUNELDRCQUFJLElBQUksZUFBa0IsSUFBSSxTQUFTLEVBQUU7QUFDckMsZ0NBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxlQUFrQixDQUFDO3lCQUNoRDtBQUNELDRCQUFJLElBQUksTUFBUyxJQUFJLFNBQVMsRUFBRTtBQUM1QixnQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQVMsQ0FBQzt5QkFDOUI7QUFBQSxxQkFDSjtBQUFBLGlCQUNKOzswQkE5QkksTUFBTTs7NkJBQU4sTUFBTTtBQStCZixrQ0FBYzs7K0JBQUEsMEJBQUc7QUFDYixnQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLG9DQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLG9DQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN6QyxNQUFNO0FBQ0gsb0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzZCQUN4Qjt5QkFDSjs7QUFDRCxtQ0FBZTsrQkFBQSx5QkFBQyxFQUFFLEVBQUU7QUFDaEIsZ0NBQUksQUFBQyxFQUFFLElBQUksU0FBUyxJQUFNLEVBQUUsSUFBSSxJQUFJLEFBQUMsRUFBRTtBQUNuQyxvQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NkJBQ3hCLE1BQU07QUFDSCxvQ0FBSSxFQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2Isb0NBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQixvQ0FBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLHdDQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLHNDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUNBQzdCO0FBQ0Qsb0NBQUksQ0FBQyxRQUFRLEdBQUcsRUFBQyxDQUFDOzZCQUNyQjt5QkFDSjs7QUFDRCxrQ0FBYzsrQkFBQSx3QkFBQyxFQUFFLEVBQUU7QUFDWCxnQ0FBSSxBQUFDLEVBQUUsSUFBSSxTQUFTLElBQU0sRUFBRSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ25DLG9DQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbkIsMkNBQU8sS0FBSyxDQUFDO2lDQUNoQjs2QkFDSjtBQUNELGdDQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsZ0NBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDZCxvQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLDJDQUFPLEtBQUssQ0FBQztpQ0FDaEI7NkJBQ0o7QUFDRCxnQ0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDcEIsdUNBQU8sS0FBSyxDQUFDOzZCQUNoQjtBQUNELGdDQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLDZCQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLG1DQUFRLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFFO3lCQUMvQjs7QUFJRCxrQ0FBYzs7NkJBSEEsWUFBRztBQUNiLG1DQUFPLEFBQUMsQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQUFBQyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUNsRjs7NkJBQ2EsVUFBQyxDQUFDLEVBQUU7QUFDbEIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUNuRCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLG9DQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ2pCLHFDQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3hCLHdDQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDYix3Q0FBSSxBQUFDLENBQUMsSUFBSSxJQUFJLElBQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUN0Qyw0Q0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7cUNBQzVCO0FBQUEsaUNBQ0o7QUFBQSw2QkFDSjt5QkFDSjs7QUFDRyxzQ0FBa0I7NkJBQUEsWUFBRztBQUNyQixtQ0FBUSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBRTt5QkFDeEM7O0FBQ0QscUNBQWlCOytCQUFBLDJCQUFDLEVBQUUsRUFBRTtBQUNkLGdDQUFJLEFBQUMsRUFBRSxJQUFJLFNBQVMsSUFBTSxFQUFFLElBQUksSUFBSSxBQUFDLElBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUM3RCxvQ0FBSSxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFNLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDbkQsd0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQ0FDMUI7QUFDRCxvQ0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7NkJBQzdCO3lCQUNKOztBQUtELHlCQUFLOzs7NkJBSEEsWUFBRztBQUNSLG1DQUFPLEFBQUMsQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQUFBQyxHQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUNyRjs2QkFDUSxVQUFDLENBQUMsRUFBRTtBQUNULGdDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDbkQsb0NBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN4QixvQ0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNqQixxQ0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUN4Qix3Q0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2Isd0NBQUksQUFBQyxDQUFDLElBQUksSUFBSSxJQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDdEMsNENBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3FDQUMzQztBQUFBLGlDQUNKO0FBQUEsNkJBQ0o7eUJBQ0o7O0FBQ0csNkJBQVM7NkJBQUEsWUFBRztBQUNaLG1DQUFRLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFFO3lCQUMvQjs7QUFDRCw0QkFBUTsrQkFBQSxrQkFBQyxFQUFFLEVBQUU7QUFDTCxnQ0FBSSxBQUFDLEVBQUUsSUFBSSxTQUFTLElBQU0sRUFBRSxJQUFJLElBQUksQUFBQyxJQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDN0Qsb0NBQUksQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsSUFBTSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQUFBQyxFQUFFO0FBQ3JELHdDQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7aUNBQzNCO0FBQ0Qsb0NBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzZCQUM1Qzt5QkFDSjs7QUFFRCxtQ0FBZTs7OzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sU0FBUyxDQUFDO3lCQUNwQjs7QUFJRyw0QkFBUTs2QkFIQSxZQUFHO0FBQ1gsbUNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt5QkFDeEQ7NkJBQ1csVUFBQyxDQUFDLEVBQUU7QUFDWixnQ0FBSSxBQUFDLENBQUMsSUFBSSxTQUFTLElBQU0sQ0FBQyxJQUFJLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDMUQsb0NBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOzZCQUN2Qzt5QkFDSjs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ1gsaUNBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDO3lCQUNoQzs7QUFLRCw0QkFBUTs7OzZCQUhBLFlBQUc7QUFDWCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUN4RDs2QkFDVyxVQUFDLENBQUMsRUFBRTtBQUNaLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7NkJBQ3ZDO3lCQUNKOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDWCxpQ0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7eUJBQ2hDOztBQUVELDZCQUFTOzs7NkJBQUEsWUFBRztBQUNaLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzFEOztBQUNHLDRCQUFROzZCQUFBLFVBQUMsQ0FBQyxFQUFFO0FBQ1osZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzFELG9DQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsb0NBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7QUFDbEIsb0NBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNQLHdDQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQ0FDbEYsTUFBTTtBQUNILHdDQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQ0FDbEM7QUFDRCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7NkJBQ3ZDO3lCQUNKOztBQUNHLGlDQUFhOzZCQUFBLFlBQUc7QUFDWixpQ0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUM7eUJBQ2pDOztBQUVELDRCQUFROzs7NkJBQUEsWUFBRztBQUNQLGdDQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWCxnQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLGlDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs2QkFDckI7QUFDRCxnQ0FBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3BCLGlDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzZCQUNoQztBQUNELDZCQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2IsbUNBQU8sQUFBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUNwQzs7QUFDRCxnQ0FBWTs7NkJBQUEsWUFBRztBQUNYLG1DQUFRLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFFO3lCQUNsQzs7QUFFRCw0QkFBUTs7OzZCQUFBLFlBQUc7QUFDWCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUN4RDs7QUFDRywyQkFBTzs2QkFBQSxVQUFDLENBQUMsRUFBRTtBQUNYLGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7NkJBQ3pCO3lCQUNKOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDWCxpQ0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7eUJBQ2hDOztBQUtELHlCQUFLOzs7NkJBSEEsWUFBRztBQUNSLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzFEOzZCQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1QsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzFELG9DQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDMUI7eUJBQ0o7O0FBQ0csNkJBQVM7NkJBQUEsWUFBRztBQUNSLGlDQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQzt5QkFDN0I7O0FBTUQseUJBQUs7Ozs7NkJBSEEsWUFBRztBQUNSLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzFEOzZCQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1QsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzFELG9DQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDMUI7eUJBQ0o7O0FBQ0csNkJBQVM7NkJBQUEsWUFBRztBQUNSLGlDQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQzt5QkFDN0I7O0FBRUwsaUNBQWE7OzsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REFsT0MsTUFBTSwrQ0FrT2EsSUFBSSxFQUFFO0FBQzFCLGdDQUFJLEFBQUMsSUFBSSxJQUFJLFNBQVMsSUFBTSxJQUFJLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQix3Q0FBSSxTQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FDcEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ25CLHdDQUFJLFNBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2lDQUNwQztBQUNELG9DQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDcEIsd0NBQUksVUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7aUNBQ3RDO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQix3Q0FBSSxTQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQ0FDcEM7QUFDRCxvQ0FBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hCLHdDQUFJLE1BQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lDQUM5QjtBQUNELG9DQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEIsd0NBQUksTUFBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUNBQzlCO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQ3pCLHdDQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7OztBQUNYLDZEQUFlLElBQUksQ0FBQyxjQUFjO2dEQUF6QixFQUFFOztBQUNQLDZDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lDQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELHdDQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2QsNENBQUksZUFBa0IsR0FBRyxDQUFDLENBQUM7cUNBQzlCO2lDQUNKO0FBQ0Qsb0NBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQix3Q0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFDWCw4REFBZSxJQUFJLENBQUMsS0FBSztnREFBaEIsRUFBRTs7QUFDUCw2Q0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt5Q0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCx3Q0FBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNkLDRDQUFJLE1BQVMsR0FBRyxDQUFDLENBQUM7cUNBQ3JCO2lDQUNKO0FBQUEsNkJBQ0o7QUFBQSx5QkFDSjs7QUFDRCxnQ0FBWTs7NkJBQUEsWUFBRztBQUNmLG1DQUFRLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFFO3lCQUN6RTs7QUFDRCwyQkFBTzsrQkFBQSxpQkFBQyxDQUFDLEVBQUU7QUFDSCxnQ0FBSSxBQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFNLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxBQUFDLElBQ2xELENBQUMsSUFBSSxTQUFTLEFBQUMsSUFBSyxDQUFDLElBQUksSUFBSSxBQUFDLEVBQUU7QUFDakMsdUNBQU8sS0FBSyxDQUFDOzZCQUNoQjtBQUNELGdDQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDaEMsZ0NBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDZix1Q0FBTyxLQUFLLENBQUM7NkJBQ2hCOzs7Ozs7QUFDRCxxREFBYyxJQUFJLENBQUMsTUFBTTt3Q0FBaEIsQ0FBQzs7QUFDTix3Q0FBSSxDQUFDLElBQUksRUFBRSxFQUFFO0FBQ1QsK0NBQU8sSUFBSSxDQUFDO3FDQUNmO2lDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELG1DQUFPLEtBQUssQ0FBQzt5QkFDaEI7O0FBQ0QsNEJBQVE7OzZCQUFBLFlBQUc7QUFDWCxtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNoQzs7QUFDRywyQkFBTzs2QkFBQSxZQUFHO0FBQ1YsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDL0I7O0FBQ0csMkJBQU87NkJBQUEsWUFBRztBQUNWLG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQy9COztBQUNHLDJCQUFPOzZCQUFBLFlBQUc7QUFDVixtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUMvQjs7QUFDRyw2QkFBUzs2QkFBQSxZQUFHO0FBQ1osbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDakM7O0FBQ0csNEJBQVE7NkJBQUEsWUFBRztBQUNYLG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ2hDOztBQUNHLHFDQUFpQjs2QkFBQSxZQUFHO0FBQ3BCLG1DQUFPLEtBQUssQ0FBQzt5QkFDaEI7Ozs7dUJBalRRLE1BQU07ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL3BlcnNvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9