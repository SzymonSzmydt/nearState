import { WindowModule } from '../../components/ui/window/WindowModule';
import './chemical.css'
import parse from 'html-react-parser';

interface ChemicalProps {
    compound?: {
        name?: string;
        pattern?: any;
        mass?: string;
        tempTop?: number;
        tempWrz?: number;
        link?: string;
        solvent: string;
        description?: string;
    },
    handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Chemical({ compound, handleClick }: ChemicalProps) {
    return (
        <section className="chemical">
            <WindowModule bgcolor={"var(--color-popup)"}>
                <div className="chemical-box">
                    <div className="close" onClick={() => handleClick(false)} />
                    <div className="chemical-box-description">
                        <p>
                            <b> {compound?.name} </b> - {parse(compound?.pattern)}
                        </p>
                        <table className="chemical-box">
                            <tbody>
                                <tr>
                                    <th> Masa molowa</th>
                                    <td> {compound?.mass} </td>
                                </tr>
                                <tr>
                                    <th>Temperatura topnienia</th>
                                    <td> {compound?.tempTop + "\u00b0 C"} </td>
                                </tr>
                                <tr>
                                    <th>Temperatura wrzenia</th>
                                    <td>{compound?.tempWrz + "\u00b0 C"}</td>
                                </tr>
                                <tr>
                                    <th>Rozpuszczlnik</th>
                                    <td>{compound?.solvent}</td>
                                </tr>
                            </tbody>
                        </table>
                        <article>
                            {compound?.description}
                            <a
                                href={compound?.link}
                                target="_blank"
                                rel="noreferrer">
                                {" "}
                                Wikipedia
                            </a>
                        </article>
                    </div>
                </div>
            </WindowModule>
        </section>
    );
}