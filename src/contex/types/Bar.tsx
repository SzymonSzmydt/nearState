export type Data = {
    readonly day: string;
    readonly avg: number;
}
export type barProps = {
    o3: Data[];
    pm10: Data[];
    pm25: Data[];
}
export type fnReturn = {
  O3: number[];
  pm10: number[];
  pm25: number[];
  day: string[];
}