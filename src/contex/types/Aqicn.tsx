
export type Avarge = {              
    avg: number;
    day: string;
}

export interface Daily {
    o3?: {
        avg: number;
        day: string;
    },
    pm10?: {
        avg: number;
        day: string;
    },
    pm25?: {
        avg: number;
        day: string;
    }
}

export interface Aqicn {
    aqi?: number;
    attributions?: {
        url: string;
        name: string;
    }
    city?: {
        name: string;
    },
    dominentpol?: string;
    forecast?: {
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