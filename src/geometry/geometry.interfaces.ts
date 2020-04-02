import {Point} from './point';
import {Line} from './line';
import {Polygon} from './polygon';
import {MultiPoint} from './multi.point';
import {MultiLine} from './multi.line';
import {MultiPolygon} from './multi.polygon';

export interface IGeometryConvertible {
    asPoint(): Point;
    asLine(): Line;
    asPolygon(): Polygon;
    asMultiPoint(): MultiPoint;
    asMultiLine(): MultiLine;
    asMultiPolygon(): MultiPolygon;
}
