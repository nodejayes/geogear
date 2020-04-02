import {Point} from './point';

export class MultiPoint {
    points: Point[];
    srId: number;

    constructor(points: Point[], srId = 0) {
        this.points = points;
        this.srId = srId;
    }

    transform(srId: number) {
        const tmp = [];
        for (const p of this.points) {
            tmp.Add(p.transform(srId));
        }
        return new MultiPoint(tmp, srId);
    }
}
