import 'mocha';
import {assert} from 'chai';
import {FeatureCollection} from '../../../src/io/geojson/feature.collection';
import {Feature} from '../../../src/io/geojson/feature';
import {Geometry} from '../../../src/io/geojson/geometry';
import {GeometryTypes} from '../../../src/io/geojson/types';
import {FeatureCollectionGeoJSONCrs, LineCoordinates, PointCoordinates, Wgs84} from './mock';
import {DeserializeGeoJSON} from "../../../src/io/geojson/reader";

describe('FeatureCollection Tests', () => {
    it('should create FeatureCollection', () => {
        const f1 = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates));
        const f2 = new Feature(new Geometry(GeometryTypes.Line, LineCoordinates));
        const c = new FeatureCollection([f1, f2]);
        assert.equal(c.type, GeometryTypes.FeatureCollection);
        assert.equal(c.features.length, 2);
        assert.isUndefined(c.crs);
    });
    it('should create FeatureCollection with same Crs', () => {
        const f1 = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84));
        const f2 = new Feature(new Geometry(GeometryTypes.Line, LineCoordinates, Wgs84));
        const c = new FeatureCollection([f1, f2]);
        assert.equal(c.type, GeometryTypes.FeatureCollection);
        assert.equal(c.features.length, 2);
        assert.equal(c.crs.getSrId(), Wgs84);
    });
    it('should not create FeatureCollection with multiple Crs', () => {
        const f1 = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84));
        const f2 = new Feature(new Geometry(GeometryTypes.Line, LineCoordinates, 3857));
        assert.throws(() => {
            new FeatureCollection([f1, f2]);
        });
    });
    it('should serialize FeatureCollection', () => {
        const f1 = new Feature(new Geometry(GeometryTypes.Point, PointCoordinates, Wgs84), {hello: 'world'});
        const c = new FeatureCollection([f1]);
        const stream = c.toString();
        const fc = DeserializeGeoJSON<FeatureCollection<{hello: string}>>(stream);
        assert.equal(fc.type, c.type);
        assert.equal(fc.features.length, c.features.length);
        for (let idx = 0; idx < fc.features.length; idx++) {
            assert.equal(fc.features[idx].type, c.features[idx].type);
            assert.equal(fc.features[idx].properties.hello, c.features[idx].properties.hello);
            assert.equal(fc.features[idx].geometry.type, c.features[idx].geometry.type);
            assert.deepEqual(fc.features[idx].geometry.coordinates, c.features[idx].geometry.coordinates);
            assert.equal(fc.features[idx].geometry.crs.type, c.features[idx].geometry.crs.type);
            assert.equal(fc.features[idx].geometry.crs.properties.name, c.features[idx].geometry.crs.properties.name);
        }
        assert.equal(fc.crs.type, c.crs.type);
        assert.equal(fc.crs.properties.name, c.crs.properties.name);
    });
});
