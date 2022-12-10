import { Dashpanel } from "../../components/ui/dashpanel/Dashpanel";
import { AirQuality } from "../../components/ui/airQuality/AirQuality";
import { AirPollution } from "../../components/ui/airQuality/AirPollution";
import { useSelector } from "react-redux";
import { RootState } from "../../contex/redux/store";
import { GlassCityBar } from "../../components/ui/global_ranking/GlassCityBar";
import { PopUpRanking } from "../../components/ui/popup/PopUpRanking";
export function Map() {
  const aqicnData = useSelector((state: RootState) => state.europe.value);
  const ranking = useSelector((state: RootState) => state.popUp.ranking);
  const citys = useSelector((state: RootState) => state.europe.citys);
  return (
    <section className="map-box wrap container-lg">
      <div className="flex map__box-left">
        <AirQuality
          title={
            "Dane o jakości powietrza i jego zanieczyszczeniu w europejskich miastach"
          }
        />
        <AirPollution />
      </div>
      <div className="map__box-right">
        <div className="map__img global-ranking">
          {aqicnData
            ? aqicnData.map((element, index) => (
                <GlassCityBar
                  key={element.idx}
                  index={index}
                  citys={citys}
                  {...element}
                />
              ))
            : null}
          {ranking ? <PopUpRanking /> : null}
        </div>
        <Dashpanel />
      </div>
    </section>
  );
}
