import './css/global.css';
import { useDispatch } from 'react-redux';
import { rankingPopup, popupOff, indexRank, region } from '../../../contex/redux/PopupLogic';
import { Glass } from '../../../components/window/Glass';
import { Aqicn } from '../../../contex/types/Aqicn';
import { earthQualityColor } from '../../../contex/hooks/EarthQualityColor';
import { useCallback } from 'react';
type CityBarProps = {
    index: number;
    citys: string[];
    area: "poland" | "europe";
}
export function GlassCityBar({index, citys, area, ...element}: CityBarProps & Aqicn) {
    const dispatch = useDispatch()
    const { aqi, city } = element;
    const handleClick = useCallback(() => {
        dispatch(popUpOff());
        dispatch(indexRank(index));
        dispatch(region(area))
        dispatch(rankingPopUp(true));
    }, [rankingPopup, popupOff, indexRank]);
    return (
        <Glass>
            <section className="flex wrap global" onClick={handleClick}>
                <div className="flex glass-nr" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}> {`${index + 1}.`} </div>              
                <div className="flex global-glass_small" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}>
                        { citys.filter(e => city?.name.includes(e.slice(0, 4))) }
                </div>
                <div className="flex wrap global_city"
                     style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                     }}>
                    <div className={`img global-glass_img ${earthQualityColor(aqi,"aqius")}`}/>
                    <div className="global-aqius">
                        { aqi }
                        <span className="glass-small_font"> US AQI</span>
                    </div>
                </div>
            </section>
        </Glass>
    );
}