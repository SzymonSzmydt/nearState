import './css/map.css';
import { AirPollution } from './airQuality/AirPollution';
import { Weather } from './weather/Weather';
import { AirQuality } from './airQuality/AirQuality';
import { GlobalRanking } from './global_ranking/GlobalRanking';
import { Dashpanel } from './dashpanel/Dashpanel';
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
                    <Dashpanel/>
                </div>
            </section>
    )
}