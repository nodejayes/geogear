import 'mocha';
import {assert} from 'chai';
import {Point} from '../../src/geometry/point';
import {
    LineCoordinates,
    LineCoordinatesWebMercator,
    PointCoordinates,
    PointCoordinatesWebMercator, PolygonCoordinates, PolygonCoordinatesWebMercator,
    WebMercator,
    Wgs84
} from '../io/geojson/mock';
import {Line} from '../../src/geometry/line';
import {Polygon} from '../../src/geometry/polygon';
import {MultiPoint} from '../../src/geometry/multi.point';
import {MultiLine} from '../../src/geometry/multi.line';
import {MultiPolygon} from '../../src/geometry/multi.polygon';

describe('Transformation Tests', () => {
    describe('Point Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const point = new Point(PointCoordinates, Wgs84);
            const transformed = point.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            assert.deepEqual(transformed.coordinates, PointCoordinatesWebMercator);
        });
    });
    describe('Line Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const line = new Line(LineCoordinates, Wgs84);
            const transformed = line.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            assert.deepEqual(transformed.coordinates, LineCoordinatesWebMercator);
        });
    });
    describe('Polygon Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const polygon = new Polygon(PolygonCoordinates, Wgs84);
            const transformed = polygon.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            assert.deepEqual(transformed.coordinates, PolygonCoordinatesWebMercator);
        });
    });
    describe('MultiPoint Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const point = new Point(PointCoordinates, Wgs84);
            const multiPoint = new MultiPoint([point], Wgs84);
            const transformed = multiPoint.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            for (const p of transformed.points) {
                assert.deepEqual(p.coordinates, PointCoordinatesWebMercator);
            }
        });
    });
    describe('MultiLine Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const line = new Line(LineCoordinates, Wgs84);
            const multiLine = new MultiLine([line], Wgs84);
            const transformed = multiLine.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            for (const l of transformed.lines) {
                assert.deepEqual(l.coordinates, LineCoordinatesWebMercator);
            }
        });
    });
    describe('MultiPolygon Transformation', () => {
        it('should transform wgs84 to web mercator', () => {
            const polygon = new Polygon(PolygonCoordinates, Wgs84);
            const multiPolygon = new MultiPolygon([polygon], Wgs84);
            const transformed = multiPolygon.transform(WebMercator);
            assert.equal(transformed.srId, WebMercator);
            for (const p of transformed.polygons) {
                assert.deepEqual(p.coordinates, PolygonCoordinatesWebMercator);
            }
        });
    });
});
