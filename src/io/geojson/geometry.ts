import {IReferenceSystem, ReferenceSystem} from './reference.system';
import {Coordinates, GeometryTypes} from './types';
import {IGeometryConvertible} from '../../geometry/geometry.interfaces';
import {Line} from '../../geometry/line';
import {MultiLine} from '../../geometry/multi.line';
import {MultiPoint} from '../../geometry/multi.point';
import {MultiPolygon} from '../../geometry/multi.polygon';
import {Point} from '../../geometry/point';
import {Polygon} from '../../geometry/polygon';

export interface IGeometry {
    type: string;
    coordinates: Coordinates,
    crs?: IReferenceSystem;
}

export class Geometry implements IGeometry, IGeometryConvertible {
    type: GeometryTypes;
    coordinates: Coordinates;
    crs: ReferenceSystem;

    constructor(type: GeometryTypes, coordinates: Coordinates, srId: number = null) {
        this.type = type;
        this.coordinates = coordinates;
        if (srId > 0) {
            this.crs = new ReferenceSystem(srId);
        }
    }

    toString() {
        return this.crs ? JSON.stringify({
            type: this.type,
            coordinates: this.coordinates,
            crs: this.crs,
        }) : JSON.stringify({
            type: this.type,
            coordinates: this.coordinates,
        });
    }

    asPoint(): Point {
        if (this.type !== GeometryTypes.Point) {
            throw new Error(`can't convert geometry of type ${this.type} into a point`);
        }
        return new Point(this.coordinates as number[], this.crs.getSrId());
    }

    asLine(): Line {
        if (this.type !== GeometryTypes.Line) {
            throw new Error(`can't convert geometry of type ${this.type} into a line`);
        }
        return new Line(this.coordinates as number[][], this.crs.getSrId());
    }

    asPolygon(): Polygon {
        if (this.type !== GeometryTypes.Polygon) {
            throw new Error(`can't convert geometry of type ${this.type} into a polygon`);
        }
        return new Polygon(this.coordinates as number[][][], this.crs.getSrId());
    }

    asMultiPoint(): MultiPoint {
        if (this.type !== GeometryTypes.MultiPoint) {
            throw new Error(`can't convert geometry of type ${this.type} into a multipoint`);
        }
        return new MultiPoint((this.coordinates as number[][])
            .Convert(i => new Point(i, this.crs.getSrId())), this.crs.getSrId())
    }

    asMultiLine(): MultiLine {
        if (this.type !== GeometryTypes.MultiLine) {
            throw new Error(`can't convert geometry of type ${this.type} into a multiline`);
        }
        return new MultiLine((this.coordinates as number[][][])
            .Convert(i => new Line(i, this.crs.getSrId())), this.crs.getSrId());
    }

    asMultiPolygon(): MultiPolygon {
        if (this.type !== GeometryTypes.MultiPolygon) {
            throw new Error(`can't convert geometry of type ${this.type} into a multipolygon`);
        }
        return new MultiPolygon((this.coordinates as number[][][][])
            .Convert(i => new Polygon(i, this.crs.getSrId())), this.crs.getSrId());
    }
}
