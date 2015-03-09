// dataservice.soec.js
//
import { HttpClient } from 'aurelia-http-client';
//
import {DataService} from '../../../../src/data/services/dataservice';
import {Crypto} from '../../../../src/data/utils/crypto';
//
describe('DataService module', () => {
  it(' creation', (done) => {
      let http =  new HttpClient();
      let baseUrl = 'http://localhost:52999/api';
      let manager = new DataService(http,baseUrl);
      expect(manager).not.toBe(null);  
      let cc = new Crypto();
      let x = cc.md5('bouba256');
      console.log(x);
      done();
  });
});
