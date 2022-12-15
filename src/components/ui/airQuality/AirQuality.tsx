import "./css/ariQuality.css";
import { WindowModule } from "../../../components/window/WindowModule";
import { Chemical } from "../../../components/ui/popup/Chemical";
import { chemicals } from "../../../contex/ChemicalData";
import { legend } from "../../../contex/types/AirLegendDescription";
import { PopupLegend } from "../../../components/ui/popup/PopupLegend";
import { useDispatch, useSelector } from "react-redux";
import {
  popupOff,
  legendPopup,
  chemicalPopup,
  indexPopup,
} from "../../../contex/redux/PopupLogic";
import { RootState } from "../../../contex/redux/store";
type AirQualityProps = {
  title: string;
};
export function AirQuality({ title }: AirQualityProps) {
  const dispatch = useDispatch();
  const chemicalPop = useSelector((state: RootState) => state.popup.chemical);
  const legendPop = useSelector((state: RootState) => state.popup.legend);
  const indexPop = useSelector((state: RootState) => state.popup.index);
  const handleClick = (index: number, fn: "chemical" | "legend") => {
    dispatch(popupOff());
    if (fn && fn === "chemical") dispatch(chemicalPopup(true));
    else if (fn && fn === "legend") dispatch(legendPopup(true));
    dispatch(indexPopup(index));
  };
  return (
    <WindowModule>
      <article>
        <h1 className="h1">
          {title}
          <span className="small-font"> - US AQI </span>
        </h1>
        <section className="flex wrap legend__section">
          {legend.map((element, index) => (
            <div
              key={element.rank}
              className="flex legend"
              style={{ backgroundColor: element.bgcolor }}
              onClick={() => handleClick(index, "legend")}
            >
              <span> {element.rank} </span>
              <span> {element.range} </span>
            </div>
          ))}
          {legendPop ? <PopupLegend {...legend[indexPop]} /> : null}
        </section>
        <>
          <h2>AQI (ang. Air Quality Index)</h2>
          Jest to ocena jakości powietrza, która obejmuje poziom pyłów
          zawieszonych PM2.5 i PM10 oraz niektórych zanieczyszczeń gazowych,
          takich jak:
          <div className="weather_quality-list">
            <ul className="weather_quality-list-ul">
              {chemicals.map((item, index) => (
                <li
                  key={item.name}
                  onClick={() => handleClick(index, "chemical")}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {chemicalPop ? <Chemical compound={chemicals[indexPop]} /> : null}
          </div>
          które często są wynikiem spalania paliw.
        </>
      </article>
    </WindowModule>
  );
}
