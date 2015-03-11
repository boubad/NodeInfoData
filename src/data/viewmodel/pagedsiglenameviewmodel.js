// pagedsiglenameviewmodel.js
import {
  PagedViewModel
}
from './pagedviewmodel';
//
export class PagedSigleNameViewModel extends PagedViewModel {
  constructor(dataService, userInfo, model) {
      super(dataService, userInfo, model);
    } // constructor
  get sigle() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.sigle !== undefined)) ? this.current.sigle : null;
  }
  set sigle(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.sigle = s;
    }
  }
  get name() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.name !== undefined)) ? this.current.name : null;
  }
  set name(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.name = s;
    }
  }
  get description() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.remarks !== undefined)) ? this.current.remarks : null;
  }
  set description(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.remarks = s;
    }
  }
} // class PagedSigleNameViewModel
