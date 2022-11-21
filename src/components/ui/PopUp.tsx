import './css/popUp.css';
import { WindowModule } from '../window/WindowModule';

type PopUpProps = {
    rank: string;
    range: string;
    face: string;
    bgcolor: string;
    description: string;
    handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PopUp({rank, range, face, bgcolor, description, handleClick}: PopUpProps) {
    return (
        <section className="popUp">
            <WindowModule bgcolor={bgcolor}>
                <div className="popUp-box">
                    <div className="close" onClick={() => handleClick(false)} />
                    <section className="flex">
                        <img src={require(`../../assets/faces/${face}.png`)} alt="Jakość powietrza" className="popUp-img"/>
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