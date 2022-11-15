import './css/map.css';
import { WeatherQuality } from './WeatherQuality';
import { WeatherMainCity } from './WeatherMainCity';

export function Map() {
    return (
            <section className="map-box wrap container-lg">
                <div  className="flex map__box-left">
                    <WeatherQuality/>
                </div>
                <div className="map__box-right">
                    <WeatherMainCity /> 
                    <div className="map__img"/> 
                </div>
            </section>
    )
}