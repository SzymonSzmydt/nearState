export interface AirVisualApi {
    city?: string;
    state?: string;
    country?: string;
    location?: {
        coordinates: number[];
    }
    current?: {
        pollution?: {
            aqicn: number;
            aqius: number;
            mainus: string;
            ts: string;
        }
        weather?: {
            hu: number;
            ic: string;
            pr: number;
            tp: number;
            wd: number;
            ws: number;
        }
    }
}