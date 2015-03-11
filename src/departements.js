// departements.js
//
import {
    EventAggregator
}
from 'aurelia-event-aggregator';
//
//
import {
    Departement
}
from './data/domain/departement';
import {
    DataService
}
from './data/services/dataservice';
import {
    PagedViewModel
}
from './data/viewmodel/pagedviewmodel';
import {
    UserInfo
}
from './userinfo';
//
export class Departements extends PagedViewModel {
    static inject() {
        return [DataService, EventAggregator, UserInfo];
    }
    constructor(dataService, eventAggregator, userInfo) {
            super(dataService, userInfo, new Departement());
            this.eventAggregator = eventAggregator;
            this.userinfo = userInfo;
            this.title = 'Départements';
            this.sigle = null;
            this.name = null;
            this.description = null;
        } // constructor
    get current() {
            return super.current;
        } //
    set current(v) {
        let vv = ((v !== undefined) && (v !== null)) ? v : null;
        if (vv !== null) {
            this.sigle = vv.sigle;
            this.name = vv.name;
            this.description = vv.remarks;
        } else {
            this.sigle = '';
            this.name = '';
            this.description = '';
        }
        this.error = null;
        this.info = null;
        super.current = vv;
        this.eventAggregator.publish(Departement, vv);
    }
    get canSave() {
            return ((this.sigle !== undefined) && (this.sigle !== null) && (this.sigle.trim().length > 0));
        } // canSave
    save() {
        let data = {
            sigle: this.sigle,
            name: this.name,
            remarks: this.description
        };
        let d = new Departement(data);
        if (!d.is_storeable) {
            return;
        }
        let self = this;
        this.error = null;
        this.info = null;
        if ((this.current !== null) && this.current.has_id) {
        d.id = this.current.id;
        this.dataService.update_item(d).then((r) => {
            self.refresh();
        }).catch((err) => {
            self._internal_set_error(err);
        });
    } else {
        this.dataService.insert_items(d).then((r) => {
            self.refreshAll();
        }).catch((err) => {
            self._internal_set_error(err);
        });
    }
} // save
activate() {
        let self = this;
        if (this.items.length < 1) {
            return this.refreshAll();
        } else {
            return true;
        }
    } // activate
} // class DepartementViewModel
