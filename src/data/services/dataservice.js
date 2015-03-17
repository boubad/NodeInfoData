//dataservice.js
//
import {
  HttpClient
}
from 'aurelia-http-client';
import {
  DataManagerBase
}
from './datamanagerbase';
//
export class DataService extends DataManagerBase {
  static inject() {
    return [HttpClient];
  }
  constructor(http) {
      super(http, 'http://localhost:52999/api');
    } // constructor
    //
} // class DataService
