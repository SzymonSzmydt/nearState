import { WindowModule } from '../../window/WindowModule';
import { useDispatch } from 'react-redux';
import { legendPopup } from '../../../contex/redux/PopupLogic';
type PopUpProps = {
    rank: string;
    range: string;
    face: string;
    bgcolor: string;
    description: string;
}
export function PopupLegend({rank, range, face, bgcolor, description}: PopUpProps) {
    const dispatch = useDispatch();
    return (
        <section className="popup">
            <WindowModule bgcolor={bgcolor}>
                <div className="popup-box">
                    <div className="close" onClick={() => dispatch(legendPopup(false))} />
                    <section className="flex">
                        <div className={`img popup-img ${face}`}/>
                        <table className="popup-box">
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