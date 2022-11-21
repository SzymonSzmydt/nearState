import { WeatherData } from '../../components/ui/WeatherData';
import { WindowModule } from '../../components/window/WindowModule';
import { CityProps } from '../../contex/types/CityProps';
import { earthQualityColor } from '../../contex/hooks/EarthQualityColor';

export function CityBar({city, pollution, weather}: CityProps) {
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