import './css/popUp.css';
import { WindowModule } from '../window/WindowModule';

type PopUpProps = {
    handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PopUpRanking({handleClick}: PopUpProps) {

    return (
        <section className="popUp">
            <WindowModule bgcolor={"var(--color-popup)"}>
                <div className="popUp-box">
                    <div className="close" onClick={() => handleClick(false)} />
                    <section className="flex">
                        <table className="popUp-box">
                            <tbody>
                                <tr className="popup-box__tr">
                                    <td> Jakość powietrza </td>
                                    <th>  </th>
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