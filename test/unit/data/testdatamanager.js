// testdatamanager.js
import {
    HttpClient
}
from 'aurelia-http-client';
import {
    DataService
}
from '../../../../src/data/dataservice';
import {
    Departement
}
from '../../../../src/data/domain/departement';
//

//
describe('DataService Tests ', () => {
    let dep = new Departement({
            sigle: 'testdep',
            name: 'testdep Name',
            description: 'test desc bla bla bla',
            avatarid: 'av1'
        });
    let http = new HttpClient();
    let manager = new DataService(http);
    let current_dep;
    //
    beforeEach((done) => {
        manager.get_departements(dep).then((dd) => {
            if (dd.length > 0) {
                current_dep = dd[0];
                done();
            } else {
                done();
                /*
                manager.insert_item(dep).then((r) => {
                    current_dep = new Departement(r);
                    done();
                }).catch((err) => {
                   // console.log(err);
                    done();
                });
                */
            }
        }).catch((ex) => {
            console.log(err);
            expect(false).toBe(true);
            done();
        });
    });
    //
    /*
    it(' insert_departemens', (done) => {
        manager.maintains_departement(dep).then((dd) => {
            expect(dd).not.toBe(null);
            console.log(dd);
            // expect(dd.length).toBeGreaterThen(0);
            done();
        }).catch((err) => {
            console.log(err);
            expect(false).toBe(true);
            done();
        });
    });
    */
    //
    it(' get_departements_count', (done) => {
        let model = new Departement();
        manager.get_departements_count(model).then((n) => {
            expect(n).not.toBe(null);
            //expect(n).toBeGreaterThan(0);
            done();
        }).catch((err) => {
            console.log(err);
            expect(false).toBe(true);
            done();
        });
    });
    it(' get_departements', (done) => {
        manager.get_departements().then((dd) => {
            expect(dd).not.toBe(null);
            //console.log(dd);
            //expect(dd.length).toBeGreaterThen(0);
            done();
        }).catch((err) => {
            console.log(err);
            expect(false).toBe(true);
            done();
        });
    });
    //
    it(' find_departement_by_id', (done) => {
        if (current_dep == undefined) {
            done();
        } else {
            expect(current_dep).toBeDefined();
            expect(current_dep.has_id).toBe(true);
            manager.find_departement_by_id(current_dep.id).then((dd) => {
                expect(dd).not.toBe(null);
                expect(dd.id).toEqual(current_dep.id);
                console.log(dd);
                done();
            }).catch((err) => {
                console.log(err);
                expect(false).toBe(true);
                done();
            });
        }
    });
    //
    it(' find_departement_by_sigle', (done) => {
        if (current_dep == undefined) {
            done();
        } else {
            expect(current_dep).toBeDefined();
            expect(current_dep.has_sigle).toBe(true);
            manager.find_departement_by_sigle(current_dep.sigle).then((dd) => {
                expect(dd).not.toBe(null);
                expect(dd.sigle).toEqual(current_dep.sigle);
                console.log(dd);
                done();
            }).catch((err) => {
                console.log(err);
                expect(false).toBe(true);
                done();
            });
        }
    });
    //
    //
    it(' update_departement', (done) => {
        if (current_dep == undefined) {
            done();
        } else {
            expect(current_dep).toBeDefined();
            expect(current_dep.has_sigle).toBe(true);
            expect(current_dep.has_id).toBe(true);
            current_dep.name = 'ZZZZZZZZZZZ';
            manager.maintains_departement(current_dep).then((dd) => {
                expect(dd).not.toBe(null);
                done();
            }).catch((err) => {
                console.log(err);
                expect(false).toBe(true);
                done();
            });
        }
    });
    //
    /*
    it(' remove_departement', (done) => {
        if (current_dep == undefined) {
            done();
        } else {
            expect(current_dep).toBeDefined();
            expect(current_dep.has_id).toBe(true);
            manager.remove_departement(current_dep).then((dd) => {
                expect(dd).not.toBe(null);
                done();
            }).catch((err) => {
                console.log(err);
                expect(false).toBe(true);
                done();
            });
        }
    });
    */
    //
});