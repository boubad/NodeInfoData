// loginviewmodel.js
import {
  ViewModelBase
}
from './viewmodelbase';

//
export class LoginViewModel extends ViewModelBase {
  constructor(dataService, userInfo, model) {
      super(dataService);
      this.userInfo = userInfo;
      this.username= null;
      this.password = null;
    } // constructor
    //
  
} // class LoginViewModel
