// datamanagerbase.js
import {
  HttpClient
}
from 'aurelia-http-client';
//
import {
  Administrator
}
from '../domain/administrator';
import {
  Annee
}
from '../domain/annee';
import {
  AttachedDoc
}
from '../domain/attacheddoc';
import {
  Departement
}
from '../domain/departement';
import {
  Enseignant
}
from '../domain/enseignant';
import {
  EtudAffectation
}
from '../domain/etudaffectation';
import {
  EtudEvent
}
from '../domain/etudevent';
import {
  Etudiant
}
from '../domain/etudiant';
import {
  Groupe
}
from '../domain/groupe';
import {
  GroupeEvent
}
from '../domain/groupeevent';
import {
  Matiere
}
from '../domain/matiere';
import {
  Operator
}
from '../domain/operator';
import {
  Person
}
from '../domain/person';
import {
  PersonInfo
}
from '../domain/personinfo';
import {
  ProfAffectation
}
from '../domain/profaffectation';
import {
  Semestre
}
from '../domain/semestre';
import {
  Unite
}
from '../domain/unite';
//
export class DataManagerBase {
  constructor(http, baseurl) {
      let base = 'http://localhost:52999/api';
      this._baseurl = 'http://localhost:52999/api';
      this.client = http;
      if ((baseurl !== undefined) && (baseurl !== null)) {
        base = baseurl;
      }
      this._baseurl = base;
      this.client.configure(x => {
        x.withBaseUrl(base);
        x.withHeader('Content-Type', 'application/json');
      });
    }
    //
  create_item(oMap) {
      if ((oMap === undefined) || (oMap === null)) {
        return null;
      }
      if ((oMap.type === undefined) || (oMap.type === null)) {
        return null;
      }
      let t = oMap.type;
      t = t.trim().toLowerCase();
      if (t == 'administrator') {
        return new Administrator(oMap);
      } else if (t == 'annee') {
        return new Annee(oMap);
      } else if (t == 'attacheddoc') {
        return new AttachedDoc(oMap);
      } else if (t == 'departement') {
        return new Departement(oMap);
      } else if (t == 'enseignant') {
        return new Enseignant(oMap);
      } else if (t == 'etudaffectation') {
        return new EtudAffectation(oMap);
      } else if (t == 'etudevent') {
        return new EtudEvent(oMap);
      } else if (t == 'etudiant') {
        return new Etudiant(oMap);
      } else if (t == 'groupe') {
        return new Groupe(oMap);
      } else if (t == 'groupeevent') {
        return new GroupeEvent(oMap);
      } else if (t == 'matiere') {
        return new Matiere(oMap);
      } else if (t == 'operator') {
        return new Operator(oMap);
      } else if (t == 'person') {
        return new Person(oMap);
      } else if (t == 'personinfo') {
        return new PersonInfo(oMap);
      } else if (t == 'profaffectation') {
        return new ProfAffectation(oMap);
      } else if (t == 'semestre') {
        return new Semestre(oMap);
      } else if (t == 'unite') {
        return new Unite(oMap);
      }
      return null;
    } // create_Item
  convert_items(dd) {
      let vRet = [];
      if ((dd !== undefined) && (dd !== null) && (dd.length > 0)) {
        for (let i = 0; i < dd.length; ++i) {
          let r = this.create_item(dd[i]);
          if ((r !== undefined) && (r !== null)) {
            vRet.push(r);
          }
        } // i
      }
      return vRet;
    } // convert_items
    //
  get baseUrl() {
      return (this._baseurl !== undefined) ? this._baseurl : null;
    } // baseUrl
    //
  form_url(prefix, params, query) {
      let sRet = '';
      if ((prefix !== undefined) && (prefix !== null)) {
        sRet = prefix;
      }
      if ((params !== undefined) && (params !== null)) {
        let n = params.length;
        for (let i = 0; i < n; ++i) {
          sRet = sRet + '/' + encodeURIComponent(params[i]);
        } // i
      }
      if ((query !== undefined) && (query !== null)) {
        let bFirst = true;
        for (let key in query) {
          let v = query[key];
          if (v !== null) {
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
      let data = {};
      item.to_fetch_map(data);
      data.$count = 1;
      let url = this.form_url(item.collection_name, null, data);
      //console.log(url);
      return this.client.get(url).then(rsp => {
        let nRet = 0;
        if (rsp.isSuccess) {
          nRet = rsp.content.count;
        }
        return nRet;
      }).catch(() => {
        return -1;
      })
    } // get_items_count
    //
  get_items(item, offset, limit) {
      let data = {};
      item.to_fetch_map(data);
      if ((offset !== undefined) &&
        (offset !== null) && (offset > 0)) {
        data.$skip = offset;
      }
      if ((limit !== undefined) &&
        (limit !== null) && (limit > 0)) {
        data.$limit = limit;
      }
      let url = this.form_url(item.collection_name, null, data);
      return this.client.get(url).then((rsp) => {
        if (rsp.isSuccess) {
          return this.convert_items(rsp.content);
        } else {
          return [];
        }
      }).catch(() => {
        return [];
      });
    } // get_items
  get_one_item(item) {
      return this.get_items(item).then(dd => {
        if (dd.length > 0) {
          return dd[0];
        } else {
          return null;
        }
      });
    } // get_one_item
  find_item_by_id(item) {
      let id = item.id;
      let model = this.create_item({
        _id: id,
        type: item.type
      });
      return this.get_one_item(model);
    } // find_item_byid
  insert_item(item) {
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
  get_items_array(collectionName, ids) {
      let n = ids.length;
      let xx = [];
      for (let i = 0; i < n; ++i) {
        let x = ids[i];
        if ((x !== undefined) && (x !== null) && (x.trim().length > 0)) {
          xx.push(x.trim());
        }
      } // i
      let nn = xx.length;
      if (nn < 1) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      let self = this;
      return new Promise((resolve, reject) => {
        let xp = [];
        for (let j = 0; j < nn; ++j) {
          let url = self.form_url(collectionName, [xx[j]]);
          xp.push(self.client.get(url));
        } // j
        let nx = xp.length;
        let xr = [];
        for (let k = 0; k < nx; ++k) {
          (xp[k]).then((r) => {
            xr.push(self.create_item(r));
            if (k == (nx - 1)) {
              resolve(xr);
            }
          }).catch(() => {
            if (k == (nx - 1)) {
              resolve(xr);
            }
          });
        } // k
      });
    } // get_items_array
} // class DataManagerBase
