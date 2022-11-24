import './css/map.css';
import { Weather } from '../weather/Weather';
import { GlobalRanking } from '../global_ranking/GlobalRanking';
import { AirQuality } from '../AirQuality/AirQuality';
import { AirPollution } from '../AirQuality/AirPollution';

export function Map() {
    return (
            <section className="map-box wrap container-lg">
                <div  className="flex map__box-left">
                    <AirQuality/>
                    <AirPollution/>
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