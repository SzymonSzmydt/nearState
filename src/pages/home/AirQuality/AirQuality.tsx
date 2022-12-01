import './css/ariQuality.css';
import { WindowModule } from '../../../components/window/WindowModule';
import { Chemical } from '../../../components/ui/popup/Chemical';
import { chemicals } from '../../../contex/ChemicalData';
import { legend } from '../../../contex/types/AirLegendDescription';
import { PopUpLegend } from '../../../components/ui/popup/PopUpLegend';
import { useDispatch, useSelector } from 'react-redux';
import { popUpOff, legendPopUp, chemicalPopUp, indexPopUp } from '../../../contex/redux/PopUpLogic';
import { RootState } from '../../../contex/redux/store';
export function AirQuality() {
    const dispatch = useDispatch();
    const chemicalPop = useSelector((state: RootState) => state.popUp.chemical);
    const legendPop = useSelector((state: RootState) => state.popUp.legend);
    const indexPop = useSelector((state: RootState) => state.popUp.index);
    const handleClick = (index: number, fn: 'chemical' | 'legend') => {
        dispatch(popUpOff());
        if (fn && fn === 'chemical') dispatch(chemicalPopUp(true));
        else if (fn && fn === 'legend') dispatch(legendPopUp(true))
        dispatch(indexPopUp(index));
    }
    return (
        <WindowModule>
            <>
                <h1 className="h1">Dane o jakości powietrza i jego zanieczyszczeniu w miastach
                    <span className="small-font"> - US AQI </span>
                </h1>
                <section className="flex wrap legend__section">
                    { legend.map( (element, index) => 
                    <div 
                        key={ element.rank } 
                        className="flex legend" 
                        style={{ backgroundColor: element.bgcolor }}
                        onClick={ ()=> handleClick(index, 'legend') }>
                        <span> { element.rank } </span>
                        <span> { element.range } </span>
                    </div> )}
                    { legendPop ? 
                    <PopUpLegend {...legend[indexPop]} /> 
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
                                <li key={item.name} onClick={()=> handleClick(index, 'chemical')}>
                                    { item.name}
                                </li>
                                ))}
                            </ul>
                            { chemicalPop ? 
                                <Chemical compound={chemicals[indexPop]}/> : null }
                        </div>
                        które często są wynikiem spalania paliw.
                    </article>
                </section>
            </>
        </WindowModule>
    );
}