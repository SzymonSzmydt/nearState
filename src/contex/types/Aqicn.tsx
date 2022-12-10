export type AqicnType = {
  value: Array<Aqicn>
}
export type Avarge = {              
    avg: number;
    day: string;
}
export interface Daily {
    o3: Avarge[],
    pm10: Avarge[],
    pm25: Avarge[]
}
type Attributions = {
    url: string;
    name: string;
}
export interface Aqicn {
    aqi?: number;
    attributions: Attributions[]
    city?: {
        name: string;
    },
    dominentpol?: string;
    forecast: {
        daily?: Daily;
    },
    iaqi?: {
        co: { v: number };
        no2: { v: number };
        o3: { v: number };
        so2: { v: number };
        pm10: { v: number };
        pm25: { v: number };
    },
    idx?: number;
    time?: {
        s: string;
    }
}