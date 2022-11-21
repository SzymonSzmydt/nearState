import { Glass } from '../../components/window/Glass';
import { earthQualityColor } from '../../contex/hooks/EarthQualityColor';

type CityBarProps = {
    number: number;
    city: string;
    aqi: number
}

const citys = ["Katowice", "Poznań", "Warszawa", "Gdansk", "Kraków", "Łódź", "Szczecin", "Wrocław"];

export function GlassCityBar({number, city, aqi}: CityBarProps) {
    return (
        <Glass>
            <section className="flex wrap global">
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
                        { citys.filter(e => city.includes(e.slice(0, 4))) }
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