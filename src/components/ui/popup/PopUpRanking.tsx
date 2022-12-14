import "./css/popup.css";
import { WindowModule } from "../../window/WindowModule";
import { useSelector, useDispatch } from "react-redux";
import { rankingPopup } from "../../../contex/redux/PopupLogic";
import { RootState } from "../../../contex/redux/store";
import { earthQualityColor } from "../../../contex/hooks/EarthQualityColor";
import { Bar } from "../../charts/Bar";
import { jm } from "../airQuality/AirPollution";
import parse from "html-react-parser";
export function PopupRanking() {
  const region = useSelector((state: RootState) => state.popup.region);
  const aqicnData = useSelector((state: RootState) => state[`${region}`].value);
  const index = useSelector((state: RootState) => state.popup.indexR);
  const dispatch = useDispatch();
  const { aqi, city, dominentpol, forecast, iaqi, time } = aqicnData[index];
  const date = time?.s;
  return (
    <section className="popup-ranking">
      <WindowModule>
        <div className="popup-box">
          <div
            className="close"
            onClick={() => dispatch(rankingPopup(false))}
          />
          <h3>Informacje dotyczące wybranego miasta</h3>
          <table className="popup-box align-tr">
            <tbody className="popup-box_tbody">
              <tr>
                <td className="popup-box__td">Monitoring</td>
                <th className="popup-box__th"> {city?.name} </th>
                <td className="rowspan" rowSpan={5}>
                  <div
                    style={{ backgroundColor: earthQualityColor(aqi, "color") }}
                    className="flex popup-box__img"
                  >
                    <div className={`img popup-img ${earthQualityColor(aqi,"aqius")}`}/>
                    <span className="popup-box-p margin-up">{aqi} </span>
                    <span className="small-font">
                      <b>US AQI</b>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="popup-box__td">AQI</td>
                <th className="popup-box__th"> {aqi} </th>
              </tr>
              <tr>
                <td className="popup-box__td">Dane z dnia</td>
                <th className="popup-box__th">
                  {" "}
                  {`${date?.slice(11, 16)} | ${date?.slice(0, 10)}`}{" "}
                </th>
              </tr>
              <tr>
                <td className="popup-box__td"> Pył zawieszony dominujący </td>
                <th className="popup-box__th"> {dominentpol} </th>
              </tr>
              <tr>
                <td className="popup-box__td"> pm2.5 </td>
                <th className="popup-box__th">
                  {" "}
                  {iaqi?.pm25?.v}
                  {iaqi?.pm25?.v ? parse(jm) : "brak pomiaru"}
                </th>
              </tr>
              <tr>
                <td className="popup-box__td"> pm10 </td>
                <th className="popup-box__th">
                  {" "}
                  {iaqi?.pm10?.v}
                  {iaqi?.pm10?.v ? parse(jm) : "brak pomiaru"}
                </th>
              </tr>
            </tbody>
          </table>
          { forecast.daily ? <Bar {...forecast.daily} /> : null }
        </div>
      </WindowModule>
    </section>
  );
}