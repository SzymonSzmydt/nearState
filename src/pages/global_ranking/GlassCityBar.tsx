import { CityProps } from '../../contex/types/CityProps';
import { Glass } from '../../components/ui/window/Glass';
import { earthQualityColor } from '../../contex/hooks/Functions';

export function GlassCityBar({city, pollution, weather}: CityProps) {
    return (
        <Glass>
            <section className="flex wrap global">              
                <img
                    src={require(`../../assets/weather/${weather?.ic}.png`)}
                    className="global-weather_img"
                    alt="aktualna temperatura"
                />
                <p className="glass-degree">{weather?.tp + "\u00b0"}</p>
                <div className="flex global-glass_small">
                        {city}
                </div>
                <div
                    className="flex wrap global_city"
                    style={{
                        backgroundColor: pollution
                            ? earthQualityColor(pollution?.aqius, "color")
                            : "",
                    }}>
                    <img
                        src={require(`../../assets/faces/${earthQualityColor(pollution?.aqius, "aqius")}.png`)}
                        className="global-glass_img"
                        alt="Twarz odzwierciedlająca zanieczyszczenie powietrza"
                    />
                    <div className="global-aqius">
                        {pollution?.aqius }
                        <span className="glass-small_font"> US AQI</span>
                    </div>
                </div>
            </section>
        </Glass>
    );
}