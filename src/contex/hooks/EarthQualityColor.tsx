export function earthQualityColor(range:number | undefined, type: "color" | "aqius") { 
    const color:boolean = type === "color";
    if (range && range <= 50) return color ? "var(--legend-good-t)" : "aqi1";
    if (range && range > 50 && range <= 100) return color ? "var(--legend-moderate-t)" : "aqi2";
    if (range && range > 100 && range <= 150) return color ? "var(--legend-semi-unhealthy-t)" : "aqi3";
    if (range && range > 150 && range <= 200) return color ? "var(--legend-unhealthy-t)" : "aqi4";
    if (range && range > 200 && range <= 300) return color ? "var(--legend-very-unhealthy-t)" : "aqi5";
    if (range && range > 300) return color ? "var(--legend-hazardous-t)" : "aqi5";
}