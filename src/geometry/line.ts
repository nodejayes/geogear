import {Transformer} from '../transformation/transformer';

export class Line {
    coordinates: number[][];
    srId: number;

    constructor(coordinates: number[][], srId = 0) {
        this.coordinates = coordinates;
        this.srId = srId;
    }

    transform(srId: number) {
        const tmp = [];
        for (const c of this.coordinates) {
            tmp.Add(Transformer.transform(this.srId, srId, c));
        }
        return new Line(tmp, srId);
    }
}
