import { WindowModule } from '../../components/ui/window/WindowModule';
import { Legend } from '../home/Legend';
import { Chemical } from '../chemical/Chemical';
import { chemicals } from '../../contex/types/ChemicalData';
import { useState } from 'react';

export function AirQuality() {
    const [ popUpWindow, setPopUpWindow ] = useState(false);
    const [ chemicalsIndex, setChemicalsIndex ] = useState(0);
    const handleClick = (indexOfChemical: number) => {
        setPopUpWindow( true);
        setChemicalsIndex(indexOfChemical);
    }
    return (
        <WindowModule>
            <div>
                <h1 className="h1">Ranking miast jakości powietrza i zanieczyszczenia
                    <span className="small-font"> - US AQI </span>
                </h1>
                <section className="flex wrap weather_quality-box-a">
                    <Legend
                        rank={"Dobre"}
                        range={"0-50"}
                        bgcolor={"var(--legend-good)"}
                    />
                    <Legend
                        rank={"Umiarkowane"}
                        range={"51-100"}
                        bgcolor={"var(--legend-moderate)"}
                    />
                    <Legend
                        rank={"Dostateczne"}
                        range={"101-150"}
                        bgcolor={"var(--legend-semi-unhealthy)"}
                    />
                    <Legend
                        rank={"Niezdrowe"}
                        range={"151-200"}
                        bgcolor={"var(--legend-unhealthy)"}
                    />
                    <Legend
                        rank={"Bardzo niezdrowe"}
                        range={"201-300"}
                        bgcolor={"var(--legend-very-unhealthy)"}
                    />
                    <Legend
                        rank={"Toksyczne"}
                        range={"301+"}
                        bgcolor={"var(--legend-hazardous)"}
                    />
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
                                <li key={item.name} onClick={()=> handleClick(index)}>
                                    { item.name}
                                </li>
                                ))}
                            </ul>
                            { popUpWindow ? 
                                <Chemical handleClick={setPopUpWindow} compound={chemicals[chemicalsIndex]}/> : null }
                        </div>
                        które często są wynikiem spalania paliw.
                    </article>
                </section>
            </div>
        </WindowModule>
    );
}