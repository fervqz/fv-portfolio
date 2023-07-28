/**
 * 1 - No asignado
 * 2 - Asignado
 * 3 - Incorporación
 * 4 - Retirada
 * 5 - En línea
 * 6 - Fuera de línea
 * 7 - Deslocalizado
 * 8 - En vacío
 * 9 - Desvío
*/

export enum BusStatus {
    NOT_ASIGNED = 1,
    ASIGNED = 2,
    INCORPORATION = 3,
    REMOVED = 4,
    RUNNING = 5,
    OUT_OF_LINE = 6,
    UNLOCATED = 7,
    EMPTY = 8,
    DETOUR = 9,
}

export interface BusPosition {
    lon: number;
    lat: number;
    speed: number;
    status: BusStatus;
    line: number;
}

export interface RawBusPosition {
    "wgs84_pos:long": string;
    "ayto:instante": string;
    "gn:coordY": string;
    "gn:coordX": string;
    "ayto:indice": string;
    "ayto:linea": string;
    "ayto:velocidad": string;
    "dc:modified": string;
    "ayto:coche": string;
    "ayto:vehiculo": string;
    "wgs84_pos:lat": string;
    "ayto:servicio": string;
    "ayto:estado": BusStatus;
    "uri": string;
}