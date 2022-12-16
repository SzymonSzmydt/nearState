import "./css/weather.css";
import { AirVisualApi } from '../../../contex/types/AirVisualApi';
import { WindowModule } from '../../../components/window/WindowModule';
import { WeatherData } from '../../../components/ui/WeatherData';
import { CityBar } from './CityBar';
import { useSelector, useDispatch } from 'react-redux';
import { getAirCityData } from '../../../contex/redux/AirCitySlice';
import { useEffect, useCallback } from 'react';
import { RootState } from '../../../contex/redux/store';
const data = JSON.parse(localStorage.getItem('wroclaw') || "");
export function Weather() {
    const airData = useSelector((state: RootState) => state.airCity.data);
    const dispatch = useDispatch();
    const { city, current } = airData as [] as AirVisualApi;
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(process.env.REACT_APP_urlNearest as string);
            const data = await response.json();
            dispatch(getAirCityData(data.data));
            localStorage.setItem('wroclaw', JSON.stringify(data));
        } catch (err) {
            console.error(err);
        }
    }, [process.env.REACT_APP_urlNearest]);
    useEffect(()=> {
    //     if (city !== 'Wroclaw') {
    //         fetchData();
    //     }
    dispatch(getAirCityData(data));
    }, []);
    return (
        <>
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
        </>
    );
}
function windDirection(wind:number) {
    if (wind >= 345 && wind <= 15) return "N";
    if (wind > 15 && wind < 75) return "NE";
    if (wind >= 75 && wind <= 105) return "E";
    if (wind > 105 && wind <= 165) return "ES";
    if (wind > 165 && wind < 195) return "S";
    if (wind >= 195 && wind <= 255) return "SW";
    if (wind > 255 && wind < 285) return "W";
    if (wind >= 285 && wind < 345) return "NW";
}