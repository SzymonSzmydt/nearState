import './css/popUp.css';
import { WindowModule } from '../../window/WindowModule';
import { useDispatch } from 'react-redux';
import { rankingPopUp } from '../../../contex/redux/PopUpLogic';


export function PopUpRanking() {
    const dispatch = useDispatch();

    return (
        <section className="popUp-ranking">
            <WindowModule bgcolor={"var(--color-popup)"}>
                <div className="popUp-box">
                    <div className="close" onClick={() => dispatch(rankingPopUp(false))} />
                    <section className="flex">
                        <table className="popUp-box">
                            <tbody>
                                <tr className="popup-box__tr">
                                    <td> Jakość powietrza </td>
                                    <th> </th>
                                </tr>
                                <tr className="popup-box__tr">
                                    <td> AQI </td>
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