

  ReferenceSystem Tests
    √ should create a Reference System
    √ should serialize a Reference System
    √ should create Reference System Properties
    √ should serialize Reference System Properties
    √ should throw error on invalid Wgs84

  Deserialize Test
    √ should deserialize point
    √ should deserialize point with crs
    √ should deserialize point list
    √ should deserialize line
    √ should deserialize line with crs
    √ should deserialize line list
    √ should deserialize polygon
    √ should deserialize polygon with crs
    √ should deserialize polygon list
    √ should deserialize multipoint
    √ should deserialize multipoint with crs
    √ should deserialize multipoint list
    √ should deserialize multiline
    √ should deserialize multiline with crs
    √ should deserialize multiline list
    √ should deserialize multipolygon
    √ should deserialize multipolygon with crs
    √ should deserialize multipolygon list

  FeatureCollection Tests
    √ should create FeatureCollection
    √ should create FeatureCollection with same Crs
    √ should not create FeatureCollection with multiple Crs
    √ should serialize FeatureCollection

  Feature Tests
    √ should create a new Feature without Properties or Crs
    √ should create a new Feature with Properties and Crs
    √ should serialize Feature without Property and Crs
    √ should serialize Feature with Property and Crs

  Geometry Tests
    Point Tests
      √ should create Geometry Point without Crs
      √ should create Geometry Point with Crs
      √ should serialize Geometry Point without Crs
      √ should serialize Geometry Point with Crs
      √ should convertible into a Point
      √ should not convert into other Geometry Types
    Line Tests
      √ should create Geometry Line without Crs
      √ should create Geometry Line with Crs
      √ should serialize Geometry Line without Crs
      √ should serialize Geometry Line with Crs
      √ should convertible into a Line
      √ should not convert into other Geometry Types
    Polygon Tests
      √ should create Geometry Polygon without Crs
      √ should create Geometry Polygon with Crs
      √ should serialize Geometry Polygon without Crs
      √ should serialize Geometry Polygon with Crs
      √ should convertible into a Polygon
      √ should not convert into other Geometry Types
    MultiPoint Tests
      √ should create Geometry MultiPoint without Crs
      √ should create Geometry MultiPoint with Crs
      √ should serialize Geometry MultiPoint without Crs
      √ should serialize Geometry MultiPoint with Crs
      √ should convertible into a MultiPoint
      √ should not convert into other Geometry Types
    MultiLine Tests
      √ should create Geometry MultiLine without Crs
      √ should create Geometry MultiLine with Crs
      √ should serialize Geometry MultiLine without Crs
      √ should serialize Geometry MultiLine with Crs
      √ should convertible into a MultiLine
      √ should not convert into other Geometry Types
    MultiPolygon Tests
      √ should create Geometry MultiPolygon without Crs
      √ should create Geometry MultiPolygon with Crs
      √ should serialize Geometry MultiPolygon without Crs
      √ should serialize Geometry MultiPolygon with Crs
      √ should convertible into a MultiPolygon
      √ should not convert into other Geometry Types

  Transformation Tests
    Point Transformation
      √ should transform wgs84 to web mercator
    Line Transformation
      √ should transform wgs84 to web mercator
    Polygon Transformation
      √ should transform wgs84 to web mercator
    MultiPoint Transformation
      √ should transform wgs84 to web mercator
    MultiLine Transformation
      √ should transform wgs84 to web mercator
    MultiPolygon Transformation
      √ should transform wgs84 to web mercator


  73 passing (31ms)

-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |   99.73 |    77.42 |     100 |    99.7 |                   
 spec/io/geojson             |     100 |      100 |     100 |     100 |                   
  crs.spec.ts                |     100 |      100 |     100 |     100 |                   
  deserialize.spec.ts        |     100 |      100 |     100 |     100 |                   
  feature.collection.spec.ts |     100 |      100 |     100 |     100 |                   
  feature.spec.ts            |     100 |      100 |     100 |     100 |                   
  geometry.spec.ts           |     100 |      100 |     100 |     100 |                   
  mock.ts                    |     100 |      100 |     100 |     100 |                   
 spec/transformation         |     100 |      100 |     100 |     100 |                   
  transformation.spec.ts     |     100 |      100 |     100 |     100 |                   
 src/geometry                |     100 |       50 |     100 |     100 |                   
  line.ts                    |     100 |       50 |     100 |     100 | 7                 
  multi.line.ts              |     100 |       50 |     100 |     100 | 7                 
  multi.point.ts             |     100 |       50 |     100 |     100 | 7                 
  multi.polygon.ts           |     100 |       50 |     100 |     100 | 7                 
  point.ts                   |     100 |       50 |     100 |     100 | 7                 
  polygon.ts                 |     100 |       50 |     100 |     100 | 7                 
 src/io/geojson              |     100 |    86.96 |     100 |     100 |                   
  feature.collection.ts      |     100 |    72.22 |     100 |     100 | 18,37,39,43       
  feature.ts                 |     100 |    83.33 |     100 |     100 | 24                
  geometry.ts                |     100 |      100 |     100 |     100 |                   
  reader.ts                  |     100 |      100 |     100 |     100 |                   
  reference.system.ts        |     100 |      100 |     100 |     100 |                   
  types.ts                   |     100 |      100 |     100 |     100 |                   
 src/transformation          |   85.71 |       50 |     100 |   84.62 |                   
  codes.ts                   |     100 |      100 |     100 |     100 |                   
  transformer.ts             |   84.62 |       50 |     100 |   83.33 | 9,12              
-----------------------------|---------|----------|---------|---------|-------------------
