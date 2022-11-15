import './css/tCountry.css';
import { AirVisualApi } from '../../contex/types/AirVisualApi';
import { WindowModule } from '../../components/ui/window/WindowModule';
import { WeatherData } from '../../components/ui/window/WeatherData';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../contex/env';

export function TCountryInfo() {
    const [dataFromApi, setCountryDataFromApi] = useState<AirVisualApi | any>([]);
    const {city, country, state, location, current} = dataFromApi;

    console.log(current?.pollution);

    const handleClick = async () => {
        try {
            const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`);
            const data = await response.json();
            setCountryDataFromApi(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=> {
        handleClick();
    }, [])
    
    return (
        <section className="flex wrap">
            {current ? <WindowModule>
                <section className="flex weather_box-city">
                    <img src={require(`../../assets/${current.weather.ic}.png`)}
                         className="weather_img"
                         alt='aktualna temperatura'
                    />
                    <span className="celcius"> {current.weather.tp} </span>
                    <span className="celcius-symbol"> {'\u00b0'} </span>
                    <span className="celcius weather_city">{city}</span>
                </section>
            </WindowModule> : null}
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
                    value={current ? (current.weather.ws * 0.001 * 3600).toFixed(1) : 0}
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