import "./css/weather.css";
import { AirVisualApi } from '../../contex/types/AirVisualApi';
import { WindowModule } from '../../components/ui/window/WindowModule';
import { WeatherData } from '../../components/ui/window/WeatherData';
import { apiKey_airVisual } from '../../contex/env';
import { CityBar } from './CityBar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../contex/redux/store';
import { getAirCityData } from '../../contex/redux/AirCitySlice';
import { useEffect } from 'react';


export function Weather() {
    const airData = useSelector((state: RootState) => state.airCity.data);
    const dispatch = useDispatch();
    const { city, state, country, location, current } = airData as [] as AirVisualApi;

    const handleClick = async () => {
        try {
            const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${apiKey_airVisual}`,
            {method: 'GET',
                redirect: "follow"});
            const data = await response.json();
            localStorage.setItem('AirApi', JSON.stringify(data.data));  /// locale
            dispatch(getAirCityData(data.data))
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=> {
        const data = JSON.parse(localStorage.getItem('AirApi') || "");
        dispatch(getAirCityData(data))
    }, [])

    console.log("AirData ", airData);
    
    
    return (
        <section className="flex wrap">
            {current ? (
                <CityBar city={city} pollution={current.pollution} weather={current.weather}/>
            ) : null}
            <WindowModule>
                <WeatherData
                    name={"Wilgotność"}
                    value={current?.weather?.hu}
                    symbol={"%"}
                    bgcolor={"var(--weather-hu)"}
                />
                <WeatherData
                    name={"Ciśnienie"}
                    value={current?.weather?.pr}
                    symbol={"hPa"}
                    bgcolor={"var(--weather-pr)"}
                />
                <WeatherData
                    name={"Wiatr"}
                    fSize={"1.15rem"}
                    value={
                        current?.weather
                            ? (current.weather.ws * 0.001 * 3600).toFixed(1)
                            : 0
                    }
                    symbol={"km/h"}
                    bgcolor={"var(--weather-ws)"}
                />
                <WeatherData
                    name={"Kierunek"}
                    value={current?.weather ? windDirection(current.weather.wd) : "-"}
                    bgcolor={"var(--weather-wd)"}
                />
                <div className="flex weather_img weather-arrow">
                    <div className="wind_img" style={{transform: `rotate(${current?.weather?.wd}deg)`}}/>
                    <span className="weather_box-b">Kierunek</span>
                </div>
            </WindowModule>
            <button onClick={handleClick}>API</button>
        </section>
    );
}
function windDirection(wind:number):string {
    if (wind >= 345 && wind <= 15) return "N";
    if (wind > 15 && wind < 75) return "NE";
    if (wind >= 75 && wind <= 105) return "E";
    if (wind > 105 && wind <= 165) return "ES";
    if (wind > 165 && wind < 195) return "S";
    if (wind >= 195 && wind <= 255) return "SW";
    if (wind > 255 && wind < 285) return "W";
    if (wind >= 285 && wind < 345) return "NW";
    else return "--"
}