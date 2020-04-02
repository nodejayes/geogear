export type Coordinates = number[] | number[][] | number[][][] | number[][][][];

export enum GeometryTypes {
    Point = 'Point',
    Line = 'LineString',
    Polygon = 'Polygon',
    MultiPoint = 'MultiPoint',
    MultiLine = 'MultiLineString',
    MultiPolygon = 'MultiPolygon',
    Feature = 'Feature',
    FeatureCollection = 'FeatureCollection',
}
