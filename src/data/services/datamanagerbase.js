// datamanagerbase.js
import {
    HttpClient
}
from 'aurelia-http-client';
//
export class DataManagerBase {
    constructor(http, baseurl) {
            let base = 'http://localhost:52999/api';
            this._baseurl = 'http://localhost:52999/api';
            this.client = http;
            if ((baseurl != undefined) && (baseurl != null)) {
                base = baseurl;
            }
            this._baseurl = base;
            this.client.configure(x => {
                x.withBaseUrl(base);
                x.withHeader('Content-Type', 'application/json');
            });

        }
        //
    get baseUrl() {
            return (this._baseurl != undefined) ? this._baseurl : null;
        } // baseUrl
        //
    form_url(prefix, params, query) {
            let sRet = '';
            if ((prefix != undefined) && (prefix != null)) {
                sRet = prefix;
            }
            if ((params != undefined) && (params != null)) {
                let n = params.length;
                for (let i = 0; i < n; ++i) {
                    sRet = sRet + '/' + encodeURIComponent(params[i]);
                } // i
            }
            if ((query != undefined) && (query != null)) {
                let bFirst = true;
                for (let key in query) {
                    let v = query[key];
                    if (v != null) {
                        if (bFirst) {
                            bFirst = false;
                            sRet = sRet + '?';
                        } else {
                            sRet = sRet + '&';
                        }
                        sRet = sRet + key + '=' + encodeURIComponent(v);
                    } // v
                } // key
            } // query
            return sRet;
        } // form_url
        //
    get_items_count(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.collection_name == undefined) || (item.collection_name == null) || (item.to_fetch_map == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item is not a BaseItem.'));
                });
            }
            let nRet = 0;
            let data = {};
            item.to_fetch_map(data);
            data['$count'] = 1;
            let url = this.form_url(item.collection_name, null, data);
            return this.client.get(url).then(rsp => {
                if (rsp.isSuccess) {
                    nRet = rsp.content.count;
                }
                return nRet;
            });
        } // get_items_count
        //
    get_items(item, offset, limit) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.collection_name == undefined) || (item.collection_name == null) || (item.to_fetch_map == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item is not a BaseItem.'));
                });
            }
            let data = {};
            item.to_fetch_map(data);
            if ((offset != undefined) && (offset != null) && (offset >= 0)) {
                data['$skip'] = offset;
            }
            if ((limit != undefined) && (limit != null) && (limit > 0)) {
                data['$limit'] = limit;
            }
            let url = this.form_url(item.collection_name, null, data);
            return this.client.get(url).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    return [];
                }
            });
        } // get_items
    get_one_item(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.collection_name == undefined) || (item.collection_name == null) || (item.to_fetch_map == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item is not a BaseItem.'));
                });
            }
            let data = {};
            item.to_fetch_map(data);
            let url = this.form_url(item.collection_name, null, data);
            return this.client.get(url).then((rsp) => {
                let vRet = null;
                if (rsp.isSuccess) {
                    let xx = rsp.content;
                    if ((xx != undefined) && (xx != null) && (xx.length > 0)) {
                        vRet = xx[0];
                    }
                }
                return vRet;
            });
        } // get_one_item
    find_item_by_id(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.id == undefined) || (item.id == null) ||
                (item.collection_name == undefined) || (item.collection_name == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            let id = item.id;
            let url = this.form_url(item.collection_name, [id]);
            return this.client.get(url).then(rsp => {
                let vRet = null;
                if (rsp.isSuccess) {
                    let xx = rsp.content;
                    if ((xx != undefined) && (xx != null) && (xx.length > 0)) {
                        vRet = xx[0];
                    }
                }
                return vRet;
            });
        } // find_item_byid
    insert_item(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.to_insert_map == undefined) ||
                (item.collection_name == undefined) || (item.collection_name == null) || (item.is_storeable == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if (!item.is_storeable) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item not storeable.'));
                });
            }
            let data = {};
            item.to_insert_map(data);
            let url = this.form_url(item.collection_name);
            return this.client.post(url, data).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            });
        } // insert_item
    update_item(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.id == undefined) || (item.id == null) || (item.to_insert_map == undefined) ||
                (item.collection_name == undefined) || (item.collection_name == null) || (item.is_storeable == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if (!item.is_storeable) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item not storeable.'));
                });
            }
            let data = {};
            item.to_insert_map(data);
            let url = this.form_url(item.collection_name, [item.id]);
            return this.client.put(url, data).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            });
        } // update_item
    remove_item(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.id == undefined) || (item.id == null) ||
                (item.collection_name == undefined) || (item.collection_name == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            let url = this.form_url(item.collection_name, [item.id]);
            return this.client.delete(url).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            });
        } // remove_item
    maintains_item(item) {
            if ((item == undefined) || (item == null)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if ((item.has_id == undefined) || (item.to_insert_map == undefined) ||
                (item.collection_name == undefined) || (item.collection_name == null) || (item.is_storeable == undefined)) {
                return new Promise((resolve, reject) => {
                    reject(new Error('invalid input parameters.'));
                });
            }
            if (!item.is_storeable) {
                return new Promise((resolve, reject) => {
                    reject(new Error('item not storeable.'));
                });
            }
            let data = {};
            item.to_insert_map(data);
            if (item.has_id) {
                let url = this.form_url(item.collection_name, [item.id]);
                return this.client.put(url, data).then((rsp) => {
                    if (rsp.isSuccess) {
                        return rsp.content;
                    } else {
                        throw new Error(rsp.statusText);
                    }
                });
            } else {
                let url = this.form_url(item.collection_name);
                return this.client.post(url, data).then((rsp) => {
                    if (rsp.isSuccess) {
                        return rsp.content;
                    } else {
                        throw new Error(rsp.statusText);
                    }
                });
            }
        } // maintains_item
} // class DataManagerBase