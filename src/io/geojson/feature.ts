import {GeometryTypes} from './types';
import {Geometry, IGeometry} from './geometry';

export interface IFeature {
    type: string;
    geometry: IGeometry;
    properties: {[key: string]: any};
}

export class Feature<T> implements IFeature {
    type = GeometryTypes.Feature;
    geometry: Geometry;
    properties: T = {} as T;

    constructor(geometry: Geometry, properties: T = null) {
        this.geometry = geometry;
        this.properties = properties || {} as T;
    }

    toString() {
        return JSON.stringify({
            type: this.type,
            geometry: this.geometry,
            properties: this.properties || null,
        });
    }
}
