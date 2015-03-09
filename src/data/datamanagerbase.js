// datamanagerbase.js
//import {HttpClient} from 'aurelia-http-client';
//
export class DataManagerBase {
    constructor(http, baseurl) {
            this.client = http;
            if ((baseurl != undefined) && (baseurl != null)) {
                this._baseurl = baseurl;
            }
            this.client.configure(x => { 
                x.withHeader('Content-Type', 'application/json'); 
            }); 

        }
        //
    get baseUrl() {
            return (this._baseurl != undefined) ? this._baseurl : null;
        } // baseUrl
    set baseUrl(s) {
            if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
                this._baseurl = s;
            }
        } // baseUrl
        //
    form_url(prefix, params, query) {
            let sRet = this.baseUrl;
            if (sRet == null) {
                return null;
            }
            let n = sRet.length;
            if (sRet.lastIndexOf('/') != (n - 1)) {
                sRet = sRet + '/';
            }
            if ((prefix != undefined) && (prefix != null)) {
                sRet = sRet + prefix;
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
        } // _form_url
        //
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
            let data = {};
            item.to_fetch_map(data);
            data['$count'] = 1;
            let url = this.form_url(item.collection_name, null, data);
            return this.client.get(url).then(rsp => {
                if (rsp.isSuccess) {
                    return rsp.content.count;
                } else {
                    throw new Error(rsp.statusText);
                }
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
                    throw new Error(rsp.statusText);
                }
            });
        } // get_items
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
            let url = this.form_url(item.collection_name, [item.id]);
            return this.client.get(url).then(rsp => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            }).catch(err => {
                return null;
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
                    reject(new Error('item not streable.'));
                });
            }
            let data = {};
            item.to_insert_map(data);
            let xx = JSON.stringify(data);
            //console.log(xx);
            let url = this.form_url(item.collection_name);
            return this.client.post(url, xx).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            }).catch((err)=>{
                throw err;
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
                    reject(new Error('item not streable.'));
                });
            }
            let data = {};
            item.to_insert_map(data);
            let xx = JSON.stringify(data);
            let url = this.form_url(item.collection_name, [item.id]);
            return this.client.put(url, xx).then((rsp) => {
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
            return this.client.delete(url, data).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                } else {
                    throw new Error(rsp.statusText);
                }
            });
        } // remove_item
} // class DataManagerBase