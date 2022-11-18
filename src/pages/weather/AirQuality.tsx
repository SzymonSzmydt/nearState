import './css/ariQuality.css';
import { WindowModule } from '../../components/ui/window/WindowModule';
import { Chemical } from '../chemical/Chemical';
import { chemicals } from '../../contex/ChemicalData';
import { useState } from 'react';
import { legend } from '../../contex/types/AirLegendDescription';
import { PopUp } from '../../components/ui/window/PopUp';

export function AirQuality() {
    const [ chemicalPopUp, setChemicalPopUp ] = useState(false);
    const [ popUpIndex, setPopUpIndex ] = useState(0);
    const [ legendPopUp, setLegendPopUp ] = useState(false);

    const handleClick = (index: number, fn: (e:boolean)=> void) => {
        if (chemicalPopUp) setChemicalPopUp(false);
        if (legendPopUp) setLegendPopUp(false);
        fn( true );
        setPopUpIndex(index);
    }
    return (
        <WindowModule>
            <div>
                <h1 className="h1">Dane o jakości powietrza i jego zanieczyszczeniu w miastach
                    <span className="small-font"> - US AQI </span>
                </h1>
                <section className="flex wrap legend__section">
                    { legend.map( (element, index) => 
                    <div 
                        key={ element.rank } 
                        className="flex legend" 
                        style={{ backgroundColor: element.bgcolor }}
                        onClick={ ()=> handleClick(index, setLegendPopUp) }>
                        <span> { element.rank } </span>
                        <span> { element.range } </span>
                    </div> )}
                    { legendPopUp ? 
                    <PopUp {...legend[popUpIndex]} handleClick={setLegendPopUp}/> 
                    : null }
                </section>
                <section>
                    <h3>AQI (ang. Air Quality Index)</h3>
                    <article>
                        Jest to ocena jakości powietrza, która obejmuje poziom
                        pyłów zawieszonych PM2.5 i PM10 oraz niektórych
                        zanieczyszczeń gazowych, takich jak:
                        <div className="weather_quality-list">
                            <ul className="weather_quality-list-ul">
                              { chemicals.map((item, index) => (
                                <li key={item.name} onClick={()=> handleClick(index, setChemicalPopUp)}>
                                    { item.name}
                                </li>
                                ))}
                            </ul>
                            { chemicalPopUp ? 
                                <Chemical handleClick={setChemicalPopUp} compound={chemicals[popUpIndex]}/> : null }
                        </div>
                        które często są wynikiem spalania paliw.
                    </article>
                </section>
            </div>
        </WindowModule>
    );
}