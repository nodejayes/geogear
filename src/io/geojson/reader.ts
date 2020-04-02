export function DeserializeGeoJSON<T>(data: string): T {
    return JSON.parse(data) as T;
}
