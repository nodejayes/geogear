import 'ts-tooling/src/types/string';
import {NumberFactory} from "ts-tooling";

export interface IReferenceSystemProperties {
    name: string;
}

export class ReferenceSystemProperties implements IReferenceSystemProperties {
    name: string;

    constructor(srId: number) {
        this.name = `EPSG:${srId}`;
    }

    toString() {
        return JSON.stringify({
            name: this.name,
        });
    }
}

export interface IReferenceSystem {
    type: string;
    properties: IReferenceSystemProperties;
}

export class ReferenceSystem implements IReferenceSystem {
    type = 'name';
    properties: ReferenceSystemProperties;

    constructor(srId: number) {
        if (srId < 1) {
            throw new Error(`invalid SrId ${srId}`);
        }
        this.properties = new ReferenceSystemProperties(srId);
    }

    getSrId(): number {
        const splitted = this.properties.name.Split(':');
        return NumberFactory.NewInteger(splitted[1]);
    }

    toString() {
        return JSON.stringify({
            type: this.type,
            properties: this.properties,
        });
    }
}
