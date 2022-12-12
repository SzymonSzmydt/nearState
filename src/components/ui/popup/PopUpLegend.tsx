import './css/popUp.css';
import { WindowModule } from '../../window/WindowModule';
import { useDispatch } from 'react-redux';
import { legendPopUp } from '../../../contex/redux/PopUpLogic';
type PopUpProps = {
    rank: string;
    range: string;
    face: string;
    bgcolor: string;
    description: string;
}
export function PopUpLegend({rank, range, face, bgcolor, description}: PopUpProps) {
    const dispatch = useDispatch();
    return (
        <section className="popUp">
            <WindowModule bgcolor={bgcolor}>
                <div className="popUp-box">
                    <div className="close" onClick={() => dispatch(legendPopUp(false))} />
                    <section className="flex">
                        <div className={`img popUp-img ${face}`}/>
                        <table className="popUp-box">
                            <tbody>
                                <tr className="popup-box__tr">
                                    <td> Jakość powietrza </td>
                                    <th> { rank } </th>
                                </tr>
                                <tr className="popup-box__tr">
                                    <td> AQI </td>
                                    <th> { range } </th>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <article>
                        { description }
                    </article>
                </div>
            </WindowModule>
        </section>
    )
}