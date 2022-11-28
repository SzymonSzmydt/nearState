import { WindowModule } from '../../../components/window/WindowModule';
import './css/chemical.css'
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import { chemicalPopUp } from '../../../contex/redux/PopUpLogic';

interface ChemicalProps {
    compound?: {
        name?: string;
        pattern: string;
        mass?: string;
        tempTop?: number;
        tempWrz?: number;
        link?: string;
        solvent: string;
        description?: string;
    },
}
export function Chemical({ compound }: ChemicalProps) {
    const dispatch = useDispatch();
    return (
        compound ?
        <section className="chemical">
            <WindowModule bgcolor={"var(--color-popup)"}>
                <div className="chemical-box">
                    <div className="close" onClick={() => dispatch(chemicalPopUp(false))} />
                    <div>
                        <p className="chemical-box_p">
                            <b> {compound.name} </b> - {parse(compound.pattern)}
                        </p>
                        <table className="popUp-box">
                            <tbody>
                                <tr>
                                    <th> Masa molowa</th>
                                    <td> {compound.mass} </td>
                                </tr>
                                <tr>
                                    <th>Temperatura topnienia</th>
                                    <td> {compound.tempTop + "\u00b0 C"} </td>
                                </tr>
                                <tr>
                                    <th>Temperatura wrzenia</th>
                                    <td>{compound.tempWrz + "\u00b0 C"}</td>
                                </tr>
                                <tr>
                                    <th>Rozpuszczlnik</th>
                                    <td>{compound.solvent}</td>
                                </tr>
                            </tbody>
                        </table>
                        <article>
                            {compound?.description} 
                            <br/>
                            <br/>
                            <em> źródło: </em>
                            <a
                                href={compound.link}
                                target="_blank"
                                rel="noreferrer">
                                <em> Wikipedia </em>
                            </a>
                        </article>
                    </div>
                </div>
            </WindowModule>
        </section> : null
    );
}