export type CityProps = {
    city?: string;
    state?: string;
    country?: string;
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