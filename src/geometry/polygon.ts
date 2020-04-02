import {Transformer} from '../transformation/transformer';

export class Polygon {
    coordinates: number[][][];
    srId: number;

    constructor(coordinates: number[][][], srId = 0) {
        this.coordinates = coordinates;
        this.srId = srId;
    }

    transform(srId: number) {
        const tmp = [];
        for (const l of this.coordinates) {
            const tmpL = [];
            for (const c of l) {
                tmpL.Add(Transformer.transform(this.srId, srId, c));
            }
            tmp.Add(tmpL);
        }
        return new Polygon(tmp, srId);
    }
}
