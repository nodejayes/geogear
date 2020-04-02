import 'mocha';
import {assert} from 'chai';
import {Feature} from '../../../src/io/geojson/feature';
import {Geometry} from '../../../src/io/geojson/geometry';
import {GeometryTypes} from '../../../src/io/geojson/types';
import {FeatureGeoJSON, FeatureGeoJSONCrs, PointCoordinates, Wgs84} from './mock';

describe('Feature Tests', () => {
    it('should create a new Feature without Properties or Crs', () => {
        const f = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates));
        assert.equal(f.type, GeometryTypes.Feature);
        assert.equal(f.geometry.type, GeometryTypes.Point);
        assert.deepEqual(f.geometry.coordinates, PointCoordinates);
        assert.isUndefined(f.geometry.crs);
        assert.deepEqual(f.properties, {});
    });
    it('should create a new Feature with Properties and Crs', () => {
        const f = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84), {hello: 'world'});
        assert.equal(f.type, GeometryTypes.Feature);
        assert.equal(f.geometry.type, GeometryTypes.Point);
        assert.deepEqual(f.geometry.coordinates, PointCoordinates);
        assert.isDefined(f.geometry.crs);
        assert.equal(f.geometry.crs.type, 'name');
        assert.equal(f.geometry.crs.properties.name, 'EPSG:' + Wgs84);
        assert.deepEqual(f.properties, {hello: 'world'});
    });
    it('should serialize Feature without Property and Crs', () => {
        const f = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates));
        const stream = f.toString();
        assert.equal(stream, FeatureGeoJSON);
    });
    it('should serialize Feature with Property and Crs', () => {
        const f = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84), {hello: 'world'});
        const stream = f.toString();
        assert.equal(stream, FeatureGeoJSONCrs);
    });
});
