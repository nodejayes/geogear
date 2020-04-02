import {Polygon} from "./polygon";

export class MultiPolygon {
    polygons: Polygon[];
    srId: number;

    constructor(polygons: Polygon[], srId = 0) {
        this.polygons = polygons;
        this.srId = srId;
    }

    transform(srId: number) {
        const tmp = [];
        for (const p of this.polygons) {
            tmp.Add(p.transform(srId));
        }
        return new MultiPolygon(tmp, srId);
    }
}
