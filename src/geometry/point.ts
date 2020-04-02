import {Transformer} from '../transformation/transformer';

export class Point {
    coordinates: number[];
    srId: number;

    constructor(coordinates: number[], srId = 0) {
        this.coordinates = coordinates;
        this.srId = srId;
    }

    transform(srId: number) {
        return new Point(Transformer.transform(this.srId, srId, this.coordinates), srId);
    }
}
