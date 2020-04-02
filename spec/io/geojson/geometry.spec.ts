import 'mocha';
import {assert} from 'chai';
import {Geometry} from '../../../src/io/geojson/geometry';
import {GeometryTypes} from '../../../src/io/geojson/types';
import {
    LineCoordinates,
    LineGeoJSON,
    LineGeoJSONCrs,
    MultiLineCoordinates,
    MultiLineGeoJSON, MultiLineGeoJSONCrs,
    MultiPointCoordinates,
    MultiPointGeoJSON,
    MultiPointGeoJSONCrs, MultiPolygonCoordinates, MultiPolygonGeoJSON, MultiPolygonGeoJSONCrs,
    PointCoordinates,
    PointGeoJSON,
    PointGeoJSONCrs,
    PolygonCoordinates,
    PolygonGeoJSON,
    PolygonGeoJSONCrs,
    Wgs84
} from './mock';

describe('Geometry Tests', () => {
    describe('Point Tests', () => {
        it('should create Geometry Point without Crs', () => {
            const point = new Geometry(GeometryTypes.Point, PointCoordinates);
            assert.equal(point.type, GeometryTypes.Point);
            assert.deepEqual(point.coordinates, PointCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry Point with Crs', () => {
            const point = new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.Point);
            assert.deepEqual(point.coordinates, PointCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry Point without Crs', () => {
            const stream = new Geometry(GeometryTypes.Point, PointCoordinates).toString();
            assert.equal(stream, PointGeoJSON)
        });
        it('should serialize Geometry Point with Crs', () => {
            const stream = new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84).toString();
            assert.equal(stream, PointGeoJSONCrs)
        });
        it('should convertible into a Point', () => {
            const point = new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84);
            const p = point.asPoint();
            assert.deepEqual(p.coordinates, PointCoordinates);
            assert.equal(p.srId, Wgs84);
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84);
            assert.throws(() => point.asLine());
            assert.throws(() => point.asPolygon());
            assert.throws(() => point.asMultiPoint());
            assert.throws(() => point.asMultiLine());
            assert.throws(() => point.asMultiPolygon());
        });
    });

    describe('Line Tests', () => {
        it('should create Geometry Line without Crs', () => {
            const point = new Geometry(GeometryTypes.Line, LineCoordinates);
            assert.equal(point.type, GeometryTypes.Line);
            assert.deepEqual(point.coordinates, LineCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry Line with Crs', () => {
            const point = new Geometry(GeometryTypes.Line, LineCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.Line);
            assert.deepEqual(point.coordinates, LineCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry Line without Crs', () => {
            const stream = new Geometry(GeometryTypes.Line, LineCoordinates).toString();
            assert.equal(stream, LineGeoJSON)
        });
        it('should serialize Geometry Line with Crs', () => {
            const stream = new Geometry(GeometryTypes.Line, LineCoordinates, Wgs84).toString();
            assert.equal(stream, LineGeoJSONCrs)
        });
        it('should convertible into a Line', () => {
            const point = new Geometry(GeometryTypes.Line, LineCoordinates, Wgs84);
            const p = point.asLine();
            assert.deepEqual(p.coordinates, LineCoordinates);
            assert.equal(p.srId, Wgs84);
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.Line, LineCoordinates, Wgs84);
            assert.throws(() => point.asPoint());
            assert.throws(() => point.asPolygon());
            assert.throws(() => point.asMultiPoint());
            assert.throws(() => point.asMultiLine());
            assert.throws(() => point.asMultiPolygon());
        });
    });

    describe('Polygon Tests', () => {
        it('should create Geometry Polygon without Crs', () => {
            const point = new Geometry(GeometryTypes.Polygon, PolygonCoordinates);
            assert.equal(point.type, GeometryTypes.Polygon);
            assert.deepEqual(point.coordinates, PolygonCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry Polygon with Crs', () => {
            const point = new Geometry(GeometryTypes.Polygon, PolygonCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.Polygon);
            assert.deepEqual(point.coordinates, PolygonCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry Polygon without Crs', () => {
            const stream = new Geometry(GeometryTypes.Polygon, PolygonCoordinates).toString();
            assert.equal(stream, PolygonGeoJSON)
        });
        it('should serialize Geometry Polygon with Crs', () => {
            const stream = new Geometry(GeometryTypes.Polygon, PolygonCoordinates, Wgs84).toString();
            assert.equal(stream, PolygonGeoJSONCrs)
        });
        it('should convertible into a Polygon', () => {
            const point = new Geometry(GeometryTypes.Polygon, PolygonCoordinates, Wgs84);
            const p = point.asPolygon();
            assert.deepEqual(p.coordinates, PolygonCoordinates);
            assert.equal(p.srId, Wgs84);
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.Polygon, PolygonCoordinates, Wgs84);
            assert.throws(() => point.asPoint());
            assert.throws(() => point.asLine());
            assert.throws(() => point.asMultiPoint());
            assert.throws(() => point.asMultiLine());
            assert.throws(() => point.asMultiPolygon());
        });
    });

    describe('MultiPoint Tests', () => {
        it('should create Geometry MultiPoint without Crs', () => {
            const point = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates);
            assert.equal(point.type, GeometryTypes.MultiPoint);
            assert.deepEqual(point.coordinates, MultiPointCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry MultiPoint with Crs', () => {
            const point = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.MultiPoint);
            assert.deepEqual(point.coordinates, MultiPointCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry MultiPoint without Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates).toString();
            assert.equal(stream, MultiPointGeoJSON)
        });
        it('should serialize Geometry MultiPoint with Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates, Wgs84).toString();
            assert.equal(stream, MultiPointGeoJSONCrs)
        });
        it('should convertible into a MultiPoint', () => {
            const point = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates, Wgs84);
            const p = point.asMultiPoint();
            for (let idx = 0; idx < MultiPointCoordinates.length; idx++) {
                assert.deepEqual(p.points[idx].coordinates, MultiPointCoordinates[idx]);
                assert.equal(p.points[idx].srId, Wgs84);
                assert.equal(p.srId, Wgs84);
            }
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.MultiPoint, MultiPointCoordinates, Wgs84);
            assert.throws(() => point.asPoint());
            assert.throws(() => point.asLine());
            assert.throws(() => point.asPolygon());
            assert.throws(() => point.asMultiLine());
            assert.throws(() => point.asMultiPolygon());
        });
    });

    describe('MultiLine Tests', () => {
        it('should create Geometry MultiLine without Crs', () => {
            const point = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates);
            assert.equal(point.type, GeometryTypes.MultiLine);
            assert.deepEqual(point.coordinates, MultiLineCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry MultiLine with Crs', () => {
            const point = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.MultiLine);
            assert.deepEqual(point.coordinates, MultiLineCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry MultiLine without Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates).toString();
            assert.equal(stream, MultiLineGeoJSON)
        });
        it('should serialize Geometry MultiLine with Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates, Wgs84).toString();
            assert.equal(stream, MultiLineGeoJSONCrs)
        });
        it('should convertible into a MultiLine', () => {
            const point = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates, Wgs84);
            const p = point.asMultiLine();
            for (let idx = 0; idx < MultiLineCoordinates.length; idx++) {
                assert.deepEqual(p.lines[idx].coordinates, MultiLineCoordinates[idx]);
                assert.equal(p.lines[idx].srId, Wgs84);
                assert.equal(p.srId, Wgs84);
            }
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.MultiLine, MultiLineCoordinates, Wgs84);
            assert.throws(() => point.asPoint());
            assert.throws(() => point.asLine());
            assert.throws(() => point.asPolygon());
            assert.throws(() => point.asMultiPoint());
            assert.throws(() => point.asMultiPolygon());
        });
    });

    describe('MultiPolygon Tests', () => {
        it('should create Geometry MultiPolygon without Crs', () => {
            const point = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates);
            assert.equal(point.type, GeometryTypes.MultiPolygon);
            assert.deepEqual(point.coordinates, MultiPolygonCoordinates);
            assert.isUndefined(point.crs);
        });
        it('should create Geometry MultiPolygon with Crs', () => {
            const point = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates, Wgs84);
            assert.equal(point.type, GeometryTypes.MultiPolygon);
            assert.deepEqual(point.coordinates, MultiPolygonCoordinates);
            assert.isDefined(point.crs);
            assert.equal(point.crs.type, 'name');
            assert.equal(point.crs.properties.name, 'EPSG:' + Wgs84);
        });
        it('should serialize Geometry MultiPolygon without Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates).toString();
            assert.equal(stream, MultiPolygonGeoJSON)
        });
        it('should serialize Geometry MultiPolygon with Crs', () => {
            const stream = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates, Wgs84).toString();
            assert.equal(stream, MultiPolygonGeoJSONCrs)
        });
        it('should convertible into a MultiPolygon', () => {
            const point = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates, Wgs84);
            const p = point.asMultiPolygon();
            for (let idx = 0; idx < MultiPolygonCoordinates.length; idx++) {
                assert.deepEqual(p.polygons[idx].coordinates, MultiPolygonCoordinates[idx]);
                assert.equal(p.polygons[idx].srId, Wgs84);
                assert.equal(p.srId, Wgs84);
            }
        });
        it('should not convert into other Geometry Types', () => {
            const point = new Geometry(GeometryTypes.MultiPolygon, MultiPolygonCoordinates, Wgs84);
            assert.throws(() => point.asPoint());
            assert.throws(() => point.asLine());
            assert.throws(() => point.asPolygon());
            assert.throws(() => point.asMultiPoint());
            assert.throws(() => point.asMultiLine());
        });
    });
});
