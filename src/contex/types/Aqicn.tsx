
export interface Avarge {
        avg: number;
        day: string;
        max: number;
        min: number;
}

export interface Aqicn {
    aqi: number;
    city: {
        name: string;
    },
    dominentpol: string;
    forecast: {
        daily: {
            o3: Avarge;
            pm10: Avarge;
            pm25: Avarge;
        }
    },
    iaqi: {
        co: { v: number };
        no2: { v: number };
        o3: { v: number };
        pm10: { v: number };
        pm25: { v: number };
    },
    idx: number;
    time: {
        s: string;
    }
}