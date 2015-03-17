// matiere.js
import {
    DepartementChildItem
}
from './departementchild';
//
export class Matiere extends DepartementChildItem {
    //
    constructor(oMap) {
            super(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.uniteid !== undefined) {
                    this.uniteid = oMap.uniteid;
                }
                if (oMap.genre !== undefined) {
                    this.genre = oMap.genre;
                }
                if (oMap.mat_module !== undefined) {
                    this.mat_module = oMap.mat_module;
                }
                if (oMap.coefficient !== undefined) {
                    this.coefficient = oMap.coefficient;
                }
                if (oMap.ecs !== undefined) {
                    this.ecs = oMap.ecs;
                }
            }
        } // constructor
    get type() {
        return 'matiere';
    }
    get collection_name() {
            return "matieres";
        }
        //
    get ecs() {
        return (this._ecs !== undefined) ? this._ecs : null;
    }
    set ecs(s) {
        this._ecs = ((s !== undefined) && (s !== null) && (s > 0)) ? s : null;
    }
    get has_ecs() {
            return (this.ecs !== null);
        }
        //
    get coefficient() {
        return (this._coef !== undefined) ? this._coef : null;
    }
    set coefficient(s) {
        this._coef = ((s !== undefined) && (s !== null) && (s > 0)) ? s : null;
    }
    get has_coefficient() {
            return (this.coefficient !== null);
        }
        //
    get mat_module() {
        return (this._module !== undefined) ? this._module : null;
    }
    set mat_module(s) {
        this._module = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_mat_module() {
            return (this.mat_module !== null);
        }
        //
    get genre() {
        return (this._genre !== undefined) ? this._genre : null;
    }
    set genre(s) {
        this._genre = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
    }
    get has_genre() {
            return (this.genre !== null);
        }
        //
    get uniteid() {
        return (this._uniteid !== undefined) ? this._uniteid : null;
    }
    set uniteid(s) {
        this._uniteid = ((s !== undefined) &&
            (s !== null) && (s.toString().trim().length > 0)) ? s : null;
    }
    get has_uniteid() {
        return (this.uniteid !== null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_uniteid);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if ((oMap !== undefined) && (oMap !== null)) {
                if (this.has_uniteid) {
                    oMap.uniteid = this.uniteid;
                }
                if (this.has_genre) {
                    oMap.genre = this.genre;
                }
                if (this.has_mat_module) {
                    oMap.mat_module = this.mat_module;
                }
                if (this.has_coefficient) {
                    oMap.coefficient = this.coefficient;
                }
                if (this.has_ecs) {
                    oMap.ecs = this.ecs;
                }
            }
        } // to_insert_map
} // class Matiere
