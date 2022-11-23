import './css/popUp.css';
import { WindowModule } from '../../window/WindowModule';
import { useSelector, useDispatch } from 'react-redux';
import { rankingPopUp } from '../../../contex/redux/PopUpLogic';
import { RootState } from '../../../contex/redux/store';

export function PopUpRanking() {
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);
    const index = useSelector((state: RootState) => state.popUp.index);
    const dispatch = useDispatch();
    const { aqi, city, dominentpol, forecast, iaqi, time } = aqicnData[index];

    console.log(index);
    

    return (
        <section className="popUp-ranking">
            <WindowModule bgcolor={"var(--color-popup)"}>
                <div className="popUp-box">
                    <div className="close" onClick={() => dispatch(rankingPopUp(false))} />
                    <section className="flex">
                        <table className="popUp-box">
                            <thead>
                                <tr className="popup-box__tr">
                                    <th>Monitoring</th>
                                    <td> { city.name } </td>
                                </tr>
                                <tr>
                                    <th>AQI</th>
                                    <td> { aqi } </td>
                                </tr>
                                <tr>
                                    <th>Dane z dnia</th>
                                    <td> { time.s } </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="popup-box__tr">
                                    <td> </td>
                                    <th> </th>
                                </tr>
                                <tr className="popup-box__tr">
                                    <td>  </td>
                                    <th>  </th>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <article>
                      
                    </article>
                </div>
            </WindowModule>
        </section>
    )
}