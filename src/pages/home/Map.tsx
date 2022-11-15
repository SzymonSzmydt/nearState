import './css/map.css';
import { WeatherQuality } from './WeatherQuality';
import { TCountryInfo } from './TCountryInfo';

export function Map() {
    return (
            <section className="map-box wrap container-lg">
                <div  className="flex map__box-left">
                    <WeatherQuality/>
                </div>
                <div className="map__box-right">
                    <TCountryInfo /> 
                    <div className="map__img"/> 
                </div>
            </section>
    )
}