// pagedviewmodel.js
import {
    ViewModelBase
}
from './viewmodelbase';
//
export class PagedViewModel extends ViewModelBase {
    constructor(dataService, userInfo,model) {
            super(dataService, userInfo);
            this.item_model = model;
            this._internal_items_page = 16;
            this.itemsCount = 0;
            this.pagesCount = 0;
            this._internal_current_page = 0;
            this._items = [];
            this._current_item = null;
            this._old_item = null;
        } // constructor
    //
    get items(){
        return ((this._items !== undefined) && (this._items !== null)) ? this._items : [];
    }
    set items(tt){
        this._items = ((tt !== undefined) && (tt !== null)) ? tt : [];
    }
    //
    get_total_items_count() {
            return this.dataService.get_items_count(this.item_model);
        } // get_total_items_count
    get_items(offset, count) {
            return this.dataService.getItems(this.item_model, offset, count);
        } // get_items
    remove_item(item) {
            return this.dataService.remove_item(item);
        } // remove_item
    get canRemove() {
        return ((this.current !== null) && (this.current.has_id));
            } // canRemove
        remove() {
            let item = this.current;
            if ((item !== undefined) && (item !== null) && item.has_id) {
                let message = 'Voulez-vous vraiment supprimer ' + item.toString();
                if (!this.ask_question(message)){
                    return;
                }
                let self = this;
                this.error = null;
                this.remove_item(item).then(function (res) {
                    self.refreshAll();
                }, function (err) {
                    self._internal_set_error(err);
                });
            } // item
        }
        cancel() {
            this.current = this._old_item;
        }
        get canCancel() {
                return (this.current === null);
            } // canCancel
        addNew() {
                this._old_item = this.current;
                this.current = null;
            } // addNew
        refresh() {
                let self = this;
                this.error = null;
                let count = this.itemsPerPage;
                if (count < 1) {
                    count = 16;
                }
                let start = this.currentPage * count;
                if (start < 0) {
                    start = 0;
                }
                let old = this.current;
                return this.get_items(start, count).then((pp) => {
                    let res = [];
                    if ((pp !== undefined) && (pp !== null) && (pp.length > 0)) {
                        res = pp;
                    }
                    self.items = res;
                    let s = null;
                    let nt = self.pagesCount;
                    if (self.pagesCount > 1) {
                        let nx = self.currentPage + 1;
                        s = 'page ' + nx + ' sur ' + nt;
                    }
                    self.status = s;
                    let pSet = null;
                    if (self.items.length > 0) {
                        if ((old === undefined) || (old == null)) {
                            pSel = self.items[0];
                        } else {
                            if ((old.id !== undefined) && (old.id !== null)) {
                                let id = old.id;
                                for (let i = 0; i < self.items.length; ++i) {
                                    let x = self.items[i];
                                    if ((x !== undefined) && (x !== null) && (x.id != undefined) &&
                                        (x.id == id)) {
                                        pSel = x;
                                        break;
                                    }
                                } // i
                                if (pSel === null) {
                                    pSel = self.items[0];
                                }
                            } else {
                                pSel = self.items[0];
                            }
                        }
                    }
                    this.current = pSel;
                    return true;
                }).catch((err) => {
                    self._internal_set_error(err);
                    return false;
                });

            } // refresh
        _internal_pages_setup() {
                let nt = this.itemsCount;
                let total = ((nt !== undefined) && (nt !== null) && (nt > 0)) ? nt : 0;
                if (this._internal_items_pages < 1) {
                    this._internal_items_page = 16;
                }
                let nc = this._internal_items_page;
                let np = Math.floor(total / nc);
                if (total > 0) {
                    if ((total % nc) != 0) {
                        ++np;
                    }
                }
                this._internal_current_page = 0;
                this.pagesCount = np;
               return this.refresh();
            } // _iternal_pages_setup
        get current() {
            return this._current_item;
        }
        set current(v) {
            this._current_item = (v !== undefined) ? v : null;
        }
        get currentPage() {
            return (this._internal_current_page !== undefined) ?
                this._internal_current_page : 0;
        }
        set currentPage(n) {
                if ((n !== undefined) && (n !== null) && (n >= 0) && (n != this._internal_current_page)) {
                    if (n < this.pagesCount) {
                        this._internal_current_page = n;
                        this.refresh();
                    }
                }
            } // currentPage
        get itemsPerPage() {
            return ((this._internal_items_page !== undefined) && (this._internal_items_page !== null) && (this._internal_items_page > 0)) ? this._internal_items_page : 16;
    }
    set itemsPerPage(n) {
        if ((n !== undefined) && (n !== null) && (n > 0) && (n != this.itemsPerPage)) {
            this._internal_items_page = n;
            this._internal_pages_setup();
        }
    }
    refreshAll() {
            let self = this;
            this.error = null;
            return this.get_total_items_count().then((n) => {
                self.itemsCount = n;
                return self._internal_pages_setup();
            }).catch((err) => {
                self._internal_set_error(err);
                return false;
            });
        } // refreshAll
    get hasItems() {
        return (this.itemsCount > 0);
    }
    get hasPages() {
        return (this.pagesCount > 1);
    }
    get canPrevPage() {
            return (this.currentPage > 0);
        } // canPrevPage
    get canNextPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            return (n < nm);
        } // canNextPage
    firstPage() {
            this.currentPage = 0;
        } // firstPage
    prevPage() {
            let n = this.currentPage;
            this.currentPage = n - 1;
        } // firstPage
    nextPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            if (n < nm) {
                this.currentPage = n + 1;
            }
        } // nextPage
    lastPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            if (n < nm) {
                this.currentPage = nm;
            }
        } // lastPage
} // class PagedViewModel
