import "./css/map.css";
import { Weather } from "./weather/Weather";
import { AirQuality } from "../../components/ui/airQuality/AirQuality";
import { AirPollution } from "../../components/ui/airQuality/AirPollution";
import { Dashpanel } from "../../components/ui/dashpanel/Dashpanel";
import { GlassCityBar } from '../../components/ui/global_ranking/GlassCityBar';
import { PopUpRanking } from '../../components/ui/popup/PopUpRanking';
import { useSelector } from 'react-redux';
import { RootState } from '../../contex/redux/store';
export function Map() {
    const aqicnData = useSelector((state: RootState) => state.poland.value);
    const ranking = useSelector((state: RootState) => state.popUp.ranking);
    const citys = useSelector((state: RootState) => state.poland.citys);
  return (
    <section className="map-box wrap container-lg">
      <div className="flex map__box-left">
        <AirQuality
          title={
            "Dane o jakości powietrza i jego zanieczyszczeniu w polskich miastach"
          }
        />
        <AirPollution />
      </div>
      <div className="map__box-right">
        <Weather />
        <div className="map__img global-ranking">
            {aqicnData
              ? aqicnData.map((element, index) => (
                  <GlassCityBar key={element.idx} index={index} citys={citys} {...element} />
                ))
              : null}
            {ranking ? <PopUpRanking /> : null}
        </div>
        <Dashpanel />
      </div>
    </section>
  );
}
