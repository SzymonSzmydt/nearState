import { Dashpanel } from "../../components/ui/dashpanel/Dashpanel";
import { AirPollution } from "../../components/ui/airQuality/AirPollution";
import { useSelector } from "react-redux";
import { RootState } from "../../contex/redux/store";
import { GlassCityBar } from "../../components/ui/global_ranking/GlassCityBar";
import { PopupRanking } from "../../components/ui/popup/PopupRanking";
import { Weather } from '../../components/ui/weather/Weather';
import { WindowModule } from '../../components/window/WindowModule';
import { AirQualityLegend } from '../../components/ui/airQuality/AirQualityLegend';
export function Map() {
  const aqicnData = useSelector((state: RootState) => state.europe.value);
  const ranking = useSelector((state: RootState) => state.popup.ranking);
  const citys = useSelector((state: RootState) => state.europe.citys);
  return (
    <section className="map-box wrap container-lg">
      <div className="flex map__box-left">
        <WindowModule>
            <AirQualityLegend/>
        </WindowModule>
        <AirPollution />
      </div>
      <div className="map__box-right">
        <Weather />
        <div className="map__img global-ranking">
          {aqicnData
            ? aqicnData.map((element, index) => (
                <GlassCityBar
                  key={element.idx}
                  index={index}
                  citys={citys}
                  area={'europe'}
                  {...element}
                />
              ))
            : null}
          {ranking ? <PopupRanking /> : null}
        </div>
        <Dashpanel map={"eu"}/>
      </div>
    </section>
  );
}
