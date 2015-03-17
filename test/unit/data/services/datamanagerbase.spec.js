// datamanagerbase.spec.js
//
import { HttpClient } from 'aurelia-http-client';
//
import {DataManagerBase} from '../../../../src/data/services/datamanagerbase';
import {Crypto} from '../../../../src/data/utils/crypto';
//
import {Administrator} from '../../../../src/data/domain/administrator';
import {Annee} from '../../../../src/data/domain/annee';
import {AttachedDoc} from '../../../../src/data/domain/attacheddoc';
import {Departement} from '../../../../src/data/domain/departement';
import {Enseignant} from '../../../../src/data/domain/enseignant';
import {EtudAffectation} from '../../../../src/data/domain/etudaffectation';
import {EtudEvent} from '../../../../src/data/domain/etudevent';
import {Etudiant} from '../../../../src/data/domain/etudiant';
import {Groupe} from '../../../../src/data/domain/groupe';
import {GroupeEvent} from '../../../../src/data/domain/groupeevent';
import {Matiere} from '../../../../src/data/domain/matiere';
import {Operator} from '../../../../src/data/domain/operator';
import {Person} from '../../../../src/data/domain/person';
import {ProfAffectation} from '../../../../src/data/domain/profaffectation';
import {Semestre} from '../../../../src/data/domain/semestre';
import {Unite} from '../../../../src/data/domain/unite';
//
describe('DataManagerBase module ', () => {
    let http,baseUrl,manager;
    beforeEach(done=>{
      http =  new HttpClient();
      baseUrl = 'http://localhost:52999/api';
      manager = new DataManagerBase(http,baseUrl);
      done();
    });
  it(' creation', () => {
      expect(manager).not.toBe(null);
      //let cc = new Crypto();
      //let x = cc.md5('bouba256');
      //console.log(x);
  });
  //
  it(' get_items_count', done => {
      expect(manager).not.toBe(null);
      let model = new Person();
      manager.get_items_count(model).then( n =>{
        expect(n).toBeDefined();
        //console.log('Items count ' + n);
        expect(n).not.toBe(null);
        expect(n).toBeGreaterThen(0);
        done();
      }).catch(()=>{
        done();
      });
  });
  //
  it(' get_items', done => {
      expect(manager).not.toBe(null);
      let model = new Person();
      manager.get_items(model).then( dd =>{
        expect(dd).toBeDefined();
        expect(dd).not.toBe(null);
        expect(dd.length).toBeGreaterThen(0);
        console.log(dd);
        done();
      }).catch(()=>{
        done();
      });
  });
  //
});
