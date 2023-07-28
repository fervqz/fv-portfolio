import { BusPosition, RawBusPosition } from "./map.types";

export const positionParser = (rawData: RawBusPosition[]): BusPosition[] => {
    return rawData.map((resource: RawBusPosition): BusPosition => ({
        lon: +resource["wgs84_pos:long"],
        lat: +resource["wgs84_pos:lat"],
        speed: +resource["ayto:velocidad"],
        status: +resource["ayto:estado"],
        line: +resource["ayto:linea"],
    }));
};
