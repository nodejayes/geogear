import 'mocha';
import {assert} from 'chai';
import {DeserializeGeoJSON} from '../../../src/io/geojson/reader';
import {Geometry} from '../../../src/io/geojson/geometry';
import {
    LineCoordinates,
    LineGeoJSON,
    LineGeoJSONArray,
    LineGeoJSONCrs, MultiLineCoordinates, MultiLineGeoJSON, MultiLineGeoJSONArray, MultiLineGeoJSONCrs,
    MultiPointCoordinates,
    MultiPointGeoJSON,
    MultiPointGeoJSONArray,
    MultiPointGeoJSONCrs,
    MultiPolygonCoordinates,
    MultiPolygonGeoJSON,
    MultiPolygonGeoJSONArray,
    MultiPolygonGeoJSONCrs,
    PointCoordinates,
    PointGeoJSON,
    PointGeoJSONArray,
    PointGeoJSONCrs,
    PolygonCoordinates,
    PolygonGeoJSON,
    PolygonGeoJSONArray,
    PolygonGeoJSONCrs,
    Wgs84
} from './mock';
import {GeometryTypes} from '../../../src/io/geojson/types';

describe('Deserialize Test', () => {
    it('should deserialize point', () => {
        const val = DeserializeGeoJSON<Geometry>(PointGeoJSON);
        assert.equal(val.type, GeometryTypes.Point);
        assert.deepEqual(val.coordinates, PointCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize point with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(PointGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.Point);
        assert.deepEqual(val.coordinates, PointCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize point list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(PointGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.Point);
        assert.deepEqual(val[0].coordinates, PointCoordinates);
    });
    it('should deserialize line', () => {
        const val = DeserializeGeoJSON<Geometry>(LineGeoJSON);
        assert.equal(val.type, GeometryTypes.Line);
        assert.deepEqual(val.coordinates, LineCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize line with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(LineGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.Line);
        assert.deepEqual(val.coordinates, LineCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize line list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(LineGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.Line);
        assert.deepEqual(val[0].coordinates, LineCoordinates);
    });
    it('should deserialize polygon', () => {
        const val = DeserializeGeoJSON<Geometry>(PolygonGeoJSON);
        assert.equal(val.type, GeometryTypes.Polygon);
        assert.deepEqual(val.coordinates, PolygonCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize polygon with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(PolygonGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.Polygon);
        assert.deepEqual(val.coordinates, PolygonCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize polygon list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(PolygonGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.Polygon);
        assert.deepEqual(val[0].coordinates, PolygonCoordinates);
    });
    it('should deserialize multipoint', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiPointGeoJSON);
        assert.equal(val.type, GeometryTypes.MultiPoint);
        assert.deepEqual(val.coordinates, MultiPointCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize multipoint with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiPointGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.MultiPoint);
        assert.deepEqual(val.coordinates, MultiPointCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize multipoint list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(MultiPointGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.MultiPoint);
        assert.deepEqual(val[0].coordinates, MultiPointCoordinates);
    });
    it('should deserialize multiline', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiLineGeoJSON);
        assert.equal(val.type, GeometryTypes.MultiLine);
        assert.deepEqual(val.coordinates, MultiLineCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize multiline with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiLineGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.MultiLine);
        assert.deepEqual(val.coordinates, MultiLineCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize multiline list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(MultiLineGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.MultiLine);
        assert.deepEqual(val[0].coordinates, MultiLineCoordinates);
    });
    it('should deserialize multipolygon', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiPolygonGeoJSON);
        assert.equal(val.type, GeometryTypes.MultiPolygon);
        assert.deepEqual(val.coordinates, MultiPolygonCoordinates);
        assert.isUndefined(val.crs);
    });
    it('should deserialize multipolygon with crs', () => {
        const val = DeserializeGeoJSON<Geometry>(MultiPolygonGeoJSONCrs);
        assert.equal(val.type, GeometryTypes.MultiPolygon);
        assert.deepEqual(val.coordinates, MultiPolygonCoordinates);
        assert.equal(val.crs.type, 'name');
        assert.equal(val.crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should deserialize multipolygon list', () => {
        const val = DeserializeGeoJSON<Geometry[]>(MultiPolygonGeoJSONArray);
        assert.equal(val.length, 1);
        assert.equal(val[0].type, GeometryTypes.MultiPolygon);
        assert.deepEqual(val[0].coordinates, MultiPolygonCoordinates);
    });
});
