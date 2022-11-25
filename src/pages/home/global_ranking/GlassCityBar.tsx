import { useDispatch } from 'react-redux';
import { rankingPopUp, popUpOff, indexPopUp } from '../../../contex/redux/PopUpLogic';
import { Glass } from '../../../components/window/Glass';
import { Aqicn } from '../../../contex/types/Aqicn';
import { earthQualityColor } from '../../../contex/hooks/EarthQualityColor';

type CityBarProps = {
    index: number;
}

const citys = ["Katowice", "Poznań", "Warszawa", "Gdansk", "Kraków", "Łódź", "Szczecin", "Wrocław"];

export function GlassCityBar({index, ...element}: CityBarProps & Aqicn) {
    const dispatch = useDispatch()
    const { aqi, city } = element;

    const handleClick = () => {
        dispatch(popUpOff());
        dispatch(indexPopUp(index));
        dispatch(rankingPopUp(true));
    }

    return (
        <Glass>
            <section className="flex wrap global" onClick={handleClick}>
                <p className="glass-nr" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}> {`${index + 1}.`} </p>              
                <div className="flex global-glass_small" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}>
                        { citys.filter(e => city?.name.includes(e.slice(0, 4))) }
                </div>
                <div
                    className="flex wrap global_city"
                    style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}>
                    <img
                        src={require(`../../../assets/faces/${earthQualityColor(aqi, "aqius")}.png`)}
                        className="global-glass_img"
                        alt="Twarz odzwierciedlająca zanieczyszczenie powietrza"
                    />
                    <div className="global-aqius">
                        { aqi }
                        <span className="glass-small_font"> US AQI</span>
                    </div>
                </div>
            </section>
        </Glass>
    );
}