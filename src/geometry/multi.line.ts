import {Line} from './line';

export class MultiLine {
    lines: Line[];
    srId: number;

    constructor(points: Line[], srId = 0) {
        this.lines = points;
        this.srId = srId;
    }

    transform(srId: number) {
        const tmp = [];
        for (const l of this.lines) {
            tmp.Add(l.transform(srId));
        }
        return new MultiLine(tmp, srId);
    }
}
