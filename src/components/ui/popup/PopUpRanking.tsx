import './css/popUp.css';
import { WindowModule } from '../../window/WindowModule';
import { useSelector, useDispatch } from 'react-redux';
import { rankingPopUp } from '../../../contex/redux/PopUpLogic';
import { RootState } from '../../../contex/redux/store';
import { earthQualityColor } from '../../../contex/hooks/EarthQualityColor';
import { Bar } from '../../Charts/Bar';

export function PopUpRanking() {
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);
    const index = useSelector((state: RootState) => state.popUp.index);
    const dispatch = useDispatch();
    const { aqi, city, dominentpol, forecast, iaqi, time } = aqicnData[index];
    
    return (
        <section className="popUp-ranking">
            <WindowModule>
                <div className="popUp-box">
                    <div className="close" onClick={() => dispatch(rankingPopUp(false))} />
                    <section>
                        <h3>Dokładne dane dla wybranego miasta</h3>
                        <table className="popUp-box align-tr">
                            <tbody className="popup-box_tbody">
                                <tr>
                                    <td className="popup-box__td">Monitoring</td>
                                    <th className="popup-box__th"> { city?.name } </th>
                                    <td rowSpan={5}> 
                                        <div style={{backgroundColor: earthQualityColor(aqi, 'color')}} className="flex popup-box__img">
                                            <img src={require(`../../../assets/faces/${earthQualityColor(aqi, 'aqius')}.png`)}
                                            className="popUp-img"
                                            />
                                            <span className="popUp-box-p margin-up">{ aqi } </span>
                                            <span className="small-font"><b>US AQI</b></span>
                                        </div>                                      
                                    </td>
                                </tr>
                                <tr>
                                    <td>AQI</td>
                                    <th> { aqi } </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Dane z dnia</td>
                                    <th> { time?.s } </th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td> Pył zawieszony dominujący </td>
                                    <th> { dominentpol } </th>
                                </tr>
                                <tr>
                                    <td> pm2.5 </td>
                                    <th> { iaqi?.pm25?.v } </th>
                                </tr>
                                <tr>
                                    <td> pm10 </td>
                                    <th> { iaqi?.pm10?.v } </th>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <div className="popup-box__chart">
                        <Bar {...forecast?.daily}/>
                    </div>
                </div>
            </WindowModule>
        </section>
    )
}