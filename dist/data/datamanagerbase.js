System.register([], function (_export) {
    var _createClass, _classCallCheck, DataManagerBase;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            // datamanagerbase.js
            //import {HttpClient} from 'aurelia-http-client';
            //
            DataManagerBase = _export("DataManagerBase", (function () {
                function DataManagerBase(http, baseurl) {
                    _classCallCheck(this, DataManagerBase);

                    this.client = http;
                    if (baseurl != undefined && baseurl != null) {
                        this._baseurl = baseurl;
                    }
                    this.client.configure(function (x) {
                        x.withHeader("Content-Type", "application/json");
                    });
                }

                _createClass(DataManagerBase, {
                    baseUrl: {
                        //

                        get: function () {
                            return this._baseurl != undefined ? this._baseurl : null;
                        },
                        // baseUrl
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._baseurl = s;
                            }
                        }
                    },
                    form_url: { // baseUrl
                        //

                        value: function form_url(prefix, params, query) {
                            var sRet = this.baseUrl;
                            if (sRet == null) {
                                return null;
                            }
                            var n = sRet.length;
                            if (sRet.lastIndexOf("/") != n - 1) {
                                sRet = sRet + "/";
                            }
                            if (prefix != undefined && prefix != null) {
                                sRet = sRet + prefix;
                            }
                            if (params != undefined && params != null) {
                                var _n = params.length;
                                for (var i = 0; i < _n; ++i) {
                                    sRet = sRet + "/" + encodeURIComponent(params[i]);
                                } // i
                            }
                            if (query != undefined && query != null) {
                                var bFirst = true;
                                for (var key in query) {
                                    var v = query[key];
                                    if (v != null) {
                                        if (bFirst) {
                                            bFirst = false;
                                            sRet = sRet + "?";
                                        } else {
                                            sRet = sRet + "&";
                                        }
                                        sRet = sRet + key + "=" + encodeURIComponent(v);
                                    } // v
                                } // key
                            } // query
                            return sRet;
                        }
                    },
                    get_items_count: { // _form_url
                        //
                        //

                        value: function get_items_count(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.collection_name == undefined || item.collection_name == null || item.to_fetch_map == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item is not a BaseItem."));
                                });
                            }
                            var data = {};
                            item.to_fetch_map(data);
                            data.$count = 1;
                            var url = this.form_url(item.collection_name, null, data);
                            return this.client.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content.count;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    get_items: { // get_items_count
                        //

                        value: function get_items(item, offset, limit) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.collection_name == undefined || item.collection_name == null || item.to_fetch_map == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item is not a BaseItem."));
                                });
                            }
                            var data = {};
                            item.to_fetch_map(data);
                            if (offset != undefined && offset != null && offset >= 0) {
                                data.$skip = offset;
                            }
                            if (limit != undefined && limit != null && limit > 0) {
                                data.$limit = limit;
                            }
                            var url = this.form_url(item.collection_name, null, data);
                            return this.client.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    find_item_by_id: { // get_items

                        value: function find_item_by_id(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.collection_name == undefined || item.collection_name == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.client.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            })["catch"](function (err) {
                                return null;
                            });
                        }
                    },
                    insert_item: { // find_item_byid

                        value: function insert_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.to_insert_map == undefined || item.collection_name == undefined || item.collection_name == null || item.is_storeable == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (!item.is_storeable) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item not streable."));
                                });
                            }
                            var data = {};
                            item.to_insert_map(data);
                            var xx = JSON.stringify(data);
                            //console.log(xx);
                            var url = this.form_url(item.collection_name);
                            return this.client.post(url, xx).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            })["catch"](function (err) {
                                throw err;
                            });
                        }
                    },
                    update_item: { // insert_item

                        value: function update_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.to_insert_map == undefined || item.collection_name == undefined || item.collection_name == null || item.is_storeable == undefined) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (!item.is_storeable) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("item not streable."));
                                });
                            }
                            var data = {};
                            item.to_insert_map(data);
                            var xx = JSON.stringify(data);
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.client.put(url, xx).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    remove_item: { // update_item

                        value: function remove_item(item) {
                            if (item == undefined || item == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            if (item.id == undefined || item.id == null || item.collection_name == undefined || item.collection_name == null) {
                                return new Promise(function (resolve, reject) {
                                    reject(new Error("invalid input parameters."));
                                });
                            }
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.client["delete"](url, data).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        } // remove_item

                    }
                });

                return DataManagerBase;
            })());
        }
    };
});
// class DataManagerBase
//# sourceMappingURL=data:application/json;base64,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