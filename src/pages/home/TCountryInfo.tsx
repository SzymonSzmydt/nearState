import './css/tCountry.css';
import { AirVisualApi } from '../../contex/types/AirVisualApi';
import { WindowModule } from '../../components/ui/window/WindowModule';
import { WeatherData } from '../../components/ui/window/WeatherData';

export function TCountryInfo( {city, country, state, location, current} : AirVisualApi) {
    console.log(current?.weather);
      
    return (
        <section className="flex wrap">
            <WindowModule>
                <div className="flex">
                    {current ? (
                        <img
                            src={require(`../../assets/${current.weather.ic}.png`)}
                            className="weather_img"
                            alt='aktualna temperatura'
                        />
                    ) : null}
                    <span className="celcius"> {current?.weather.tp} </span>
                    <span className="weather_box_b"> {current ? '\u00b0' : null} </span>
                    <span className="celcius">{city}</span>
                </div>
            </WindowModule>
            <WindowModule>
                <WeatherData
                    name={"Wilgotność"}
                    value={current?.weather.hu}
                    symbol={"%"}
                    bgcolor={"var(--weather-hu)"}
                />
                <WeatherData
                    name={"Ciśnienie"}
                    value={current?.weather.pr}
                    symbol={"hPa"}
                    bgcolor={"var(--weather-pr)"}
                />
                <WeatherData
                    name={"Wiatr"}
                    value={current ? current.weather.ws * 10 : 0}
                    symbol={"km/h"}
                    bgcolor={"var(--weather-ws)"}
                />
                <WeatherData
                    name={"Kierunek"}
                    value={current ? windDirection(current.weather.wd) : '-'}
                    bgcolor={"var(--weather-wd)"}
                />               
            </WindowModule>
        </section>
    );
}


function windDirection(wind: number) {
    if (wind >= 345 || wind <= 15) return "N";
    if (wind > 15 || wind < 75) return "NE";
    if (wind >= 75 || wind <= 105) return "E";
    if (wind > 105 || wind <= 165) return "ES"
    if (wind > 165 && wind < 195) return "S";
    if (wind >= 195 && wind <= 255) return "SW";
    if (wind > 255 && wind < 285) return "W";
    if (wind >= 285 && wind < 345) return "NW";
}