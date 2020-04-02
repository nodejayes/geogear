import {GeometryTypes} from './types';
import {Feature, IFeature} from "./feature";
import {IReferenceSystem, ReferenceSystem} from './reference.system';

export interface IFeatureCollection {
    type: string;
    features: IFeature[];
    crs: IReferenceSystem;
}

export class FeatureCollection<T> implements IFeatureCollection {
    type = GeometryTypes.FeatureCollection;
    features: Feature<T>[];
    crs: ReferenceSystem;

    constructor(features: Feature<T>[]) {
        this.features = features;
        if (features && features.length > 0) {
            let tmp = 0;
            for (const f of features) {
                if (!f.geometry.crs) {
                    continue;
                }
                const srId = f.geometry.crs.getSrId();
                if (tmp > 0 && tmp != srId) {
                    throw new Error('multiple Coordinate Systems in Feature Collections not supported');
                }
                tmp = srId;
            }
            if (tmp > 0) {
                this.crs = new ReferenceSystem(tmp);
            }
        }
    }

    toString() {
        return this.crs ? JSON.stringify({
            type: this.type,
            features: this.features || [],
            crs: this.crs,
        }) : JSON.stringify({
            type: this.type,
            features: this.features || [],
        });
    }
}
