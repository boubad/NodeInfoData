// dataservice.soec.js
//
import { HttpClient } from 'aurelia-http-client';
//
import {DataService} from '../../../../src/data/services/dataservice';
//
describe('DataService module', () => {
  it(' creation', (done) => {
      let http =  new HttpClient();
      let baseUrl = 'http://localhost:52999/api';
      let manager = new DataService(http,baseUrl);
      expect(manager).not.toBe(null);  
      done();
  });
});
