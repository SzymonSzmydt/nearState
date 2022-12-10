import { Dashpanel } from '../../components/ui/dashpanel/Dashpanel';
import { AirQuality } from '../../components/ui/airQuality/AirQuality';
import { AirPollution } from '../../components/ui/airQuality/AirPollution';
import { GlobalRanking } from '../../components/ui/global_ranking/GlobalRanking';
export function Map() {
    return (
            <section className="map-box wrap container-lg">
                <div  className="flex map__box-left">
                    <AirQuality 
                        title={'Dane o jakości powietrza i jego zanieczyszczeniu w polskich miastach'}
                    />
                    <AirPollution/>
                </div>
                <div className="map__box-right">
                    <div className="map__img">
                        <GlobalRanking/>
                    </div> 
                    <Dashpanel/>
                </div>
            </section>
    )
}