import { WeatherData } from '../../components/ui/window/WeatherData';
import { WindowModule } from '../../components/ui/window/WindowModule';
import { CityProps } from '../../contex/types/CityProps';

function earthQualityColor(range:any, type:string) { 
    const color:boolean = type === "color";
    if (range <= 50) return color ? "var(--legend-good)" : "aqi1";
    if (range > 50 && range <= 100) return color ? "var(--legend-moderate)" : "aqi2";
    if (range > 100 && range <= 150) return color ? "var(--legend-semi-unhealthy)" : "aqi3";
    if (range > 150 && range <= 200) return color ? "var(--legend-unhealthy)" : "aqi4";
    if (range > 200 && range <= 300) return color ? "var(--legend-very-unhealthy)" : "aqi5";
    if (range > 300) return color ? "var(--legend-hazardous)" : "aqi5";
}

export function CityBar({city, country, state, pollution, weather}: CityProps) {
    const date:string = pollution ? (pollution.ts).slice(0, 10) : '-';
    const hour:string = pollution ? (pollution.ts).slice(11, 16) : '-';
    
    return (
        <WindowModule>
            <section className="flex wrap weather_box-city">              
                <img
                    src={require(`../../assets/weather/${weather?.ic}.png`)}
                    className="weather_img"
                    alt="aktualna temperatura"
                />
                <WeatherData
                    fSize={"1.75rem"}
                    value={weather?.tp + "\u00b0"}
                    bgcolor={"var(--weather-img"}
                />
                <div
                    className="flex wrap weather_city"
                    style={{
                        backgroundColor: pollution
                            ? earthQualityColor(pollution?.aqius, "color")
                            : "",
                    }}>
                    <div className="flex celcius weather_city-small">
                        {city}
                        <span className="small-font">
                            Dane z dnia
                            {` ${date}  ${hour}`}
                        </span>
                    </div>
                    <img
                        src={require(`../../assets/faces/${earthQualityColor(pollution?.aqius, "aqius")}.png`)}
                        className="city-aqius_img"
                        alt="Twarz odzwierciedlająca zanieczyszczenie powietrza"
                    />
                    <div className="flex city-aqius">
                        {pollution?.aqius}
                        <span className="small-font">US AQI</span>
                    </div>
                </div>
            </section>
        </WindowModule>
    );
}