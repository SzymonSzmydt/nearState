import { WindowModule } from '../../components/ui/window/WindowModule';
import './chemical.css'

interface ChemicalProps {
    compound?: {
        name?: string;
        pattern?: string;
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
                    <div className="close" onClick={()=> handleClick(false)}/>
                    <div className="chemical-box-description">
                        <p> <b> {compound?.name} </b> - {compound?.pattern}</p>
                        <strong>Masa:</strong> {compound?.mass} <br />
                        <strong>Temperatura topnienia:</strong> {compound?.tempTop + '\u00b0 C'} <br />
                        <strong>Temperatura wrzenia:</strong> {compound?.tempWrz + '\u00b0 C'} <br />
                        <strong>Rozpuszczlnik:</strong> {compound?.solvent} <br />
                        <p>
                            {compound?.description}
                            <a href={compound?.link} target="_blank" rel="noreferrer"> Wikipedia</a>
                        </p>
                    </div>
                </div>
            </WindowModule>
        </section>
    );
}