import './css/map.css';
import { AirQuality } from '../weather/AirQuality';
import { Weather } from '../weather/Weather';
import { GlobalRanking } from '../global_ranking/GlobalRanking';

export function Map() {
    return (
            <section className="map-box wrap container-lg">
                <div  className="flex map__box-left">
                    <AirQuality/>
                </div>
                <div className="map__box-right">
                    <Weather /> 
                    <div className="map__img">
                        <GlobalRanking/>
                    </div> 
                </div>
            </section>
    )
}