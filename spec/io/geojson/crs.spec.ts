import 'mocha';
import {assert} from 'chai';
import {ReferenceSystem, ReferenceSystemProperties} from "../../../src/io/geojson/reference.system";
import {Wgs84} from "./mock";

describe("ReferenceSystem Tests", () => {
    it('should create a Reference System', () => {
        const crs = new ReferenceSystem(Wgs84);
        assert.equal(crs.type, 'name');
        assert.equal(crs.properties.name, 'EPSG:' + Wgs84);
    });
    it('should serialize a Reference System', () => {
        const crs = new ReferenceSystem(Wgs84);
        const stream = crs.toString();
        assert.equal(stream, `{"type":"name","properties":{"name":"EPSG:${Wgs84}"}}`);
    });
    it('should create Reference System Properties', () => {
        const props = new ReferenceSystemProperties(Wgs84);
        assert.equal(props.name, 'EPSG:' + Wgs84);
    });
    it('should serialize Reference System Properties', () => {
        const props = new ReferenceSystemProperties(Wgs84);
        const stream = props.toString();
        assert.equal(stream, `{"name":"EPSG:${Wgs84}"}`);
    });
    it('should throw error on invalid Wgs84', () => {
        assert.throws(() => {
            new ReferenceSystem(-1);
        });
    });
});
