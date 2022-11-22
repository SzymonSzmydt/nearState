import { Glass } from '../../components/window/Glass';
import { earthQualityColor } from '../../contex/hooks/EarthQualityColor';
import { Aqicn } from '../../contex/types/Aqicn';
import { useDispatch } from 'react-redux';
import { rankingPopUp } from '../../contex/redux/PopUpLogic';

type CityBarProps = {
    number: number;
}

const citys = ["Katowice", "Poznań", "Warszawa", "Gdansk", "Kraków", "Łódź", "Szczecin", "Wrocław"];

export function GlassCityBar({number, ...element}: CityBarProps & Aqicn) {
    const dispatch = useDispatch()
    const { aqi, city } = element;

    return (
        <Glass>
            <section className="flex wrap global" onClick={()=> dispatch(rankingPopUp(true))}>
                <p className="glass-nr" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}> {`${number}.`} </p>              
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
                        src={require(`../../assets/faces/${earthQualityColor(aqi, "aqius")}.png`)}
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