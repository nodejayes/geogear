import {EPSG} from './codes';
import * as proj4 from 'proj4';

export class Transformer {
    static transform(source: number, target: number, coordinates: number[]): number[] {
        const sourceSystem = EPSG[`EPSG:${source}`];
        const targetSystem = EPSG[`EPSG:${target}`];
        if (!sourceSystem) {
            throw new Error(`unknown source EPSG Code ${source}`);
        }
        if (!targetSystem) {
            throw new Error(`unknown target EPSG Code ${target}`);
        }
        return proj4(sourceSystem, targetSystem, coordinates);
    }
}
