//viewmodelbase.js
//
import {
    DataService
}
from '../services/dataservice';
//
export class ViewModelBase {
    constructor(dataService) {
            this.dataService = dataService;
            this.title = null;
            this._error = null;
            this._info = null;
            this._status = null;
            this.menu = [];
        } // constructor
    get hasTitle() {
        return ((this.title !== undefined) && (this.title !== null) && (this.title.trim().length > 0));
    }
    get error() {
        return ((this._error !== undefined) && (this._error !== null) &&
            (this._error.trim().length > 0)) ? this._error.trim() : null;
    }
    set error(s) {
        this._error = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get hasError() {
            return (this.error != null);
        }
        //
    get info() {
        return (this._info !== 'undefined') ? this._info : null;
    }
    set info(s) {
        this._info = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get hasInfo() {
            return (this.info !== null);
        }
        //
    get status() {
        return this._status;
    }
    set status(s) {
        this._status = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get hasStatus() {
            return (this.status !== null);
        }
        //
    ask_question(message) {
            return true;
        }
        //
    _internal_set_error(err) {
            if ((err !== undefined) && (err !== null)) {
                if ((err.message !== undefined) && (err.message !== null)) {
                    this.error = err.message;
                }
                else if ((err.msg !== undefined) && (err.msg !== null)) {
                    this.error = err.msg;
                }
                else if ((err.statusText !== undefined) && (err.statusText !== null)) {
                    this.error = err.statusText;
                }
                else {
                    this.error = err.toString();
                }
            }
        } // _internal_setÃ§error
} // class ViewModelBase
