import "./css/ariQuality.css";
import { WindowModule } from "../../../components/window/WindowModule";
import { Chemical } from "../../../components/ui/popup/Chemical";
import { chemicals } from "../../../contex/ChemicalData";
import { useDispatch, useSelector } from "react-redux";
import {
  popupOff,
  chemicalPopup,
  indexPopup,
} from "../../../contex/redux/PopupLogic";
import { RootState } from "../../../contex/redux/store";
import { AirQualityLegend } from './AirQualityLegend';
type AirQualityProps = {
  title: string;
};
export function AirQuality({ title }: AirQualityProps) {
  const dispatch = useDispatch();
  const chemicalPop = useSelector((state: RootState) => state.popup.chemical);
  const indexPop = useSelector((state: RootState) => state.popup.index);
  const handleClick = (index: number) => {
    dispatch(popupOff());
    dispatch(chemicalPopup(true));
    dispatch(indexPopup(index));
  };
  return (
    <WindowModule>
      <article>
        <h1 className="h1">
          {title}
        </h1>
        <AirQualityLegend />
          <h2>AQI (ang. Air Quality Index)</h2>
          Jest to ocena jakości powietrza, która obejmuje poziom pyłów
          zawieszonych PM2.5 i PM10 oraz niektórych zanieczyszczeń gazowych,
          takich jak:
          <div className="weather_quality-list">
            <ul className="weather_quality-list-ul">
              {chemicals.map((item, index) => (
                <li
                  key={item.name}
                  onClick={() => handleClick(index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {chemicalPop ? <Chemical compound={chemicals[indexPop]} /> : null}
          </div>
          które często są wynikiem spalania paliw.
      </article>
    </WindowModule>
  );
}
