import './css/information.css';
import { WindowModule } from '../../components/window/WindowModule';
import { Terms } from './Terms';
export function Informations() {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.waqi.info/search/?token=8ae7d64675d0ac69d6da0f356910c51cd5672e26&keyword=opol');
            const data = await response.json();
            localStorage.setItem('state', JSON.stringify(data.data));
            console.log(data.data)
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="container-lg informations">
            <WindowModule>
                <button onClick={fetchData}>API fetch</button>
                <h2>Informacje dotyczące danych na stronie</h2>
                <p>
                    Dane dotyczące jakości powietrza pobierane są ze
                    Światowego Indeksu Jakości Powietrza. Dane te
                    publikowane są w czasie rzeczywistym, dlatego nie mogą być
                    potwierdzone w momencie publikacji. Jednak w celu
                    zapewnienia wysokiego poziomu dokładności dla każdej
                    wartości AQI, stosuje się kilka rozwiązań do przetwarzania
                    uczenia maszynowego. Na przykład weryfikowana jest spójność
                    danych w czasie rzeczywistym z sąsiednimi stacjami, co
                    pozwala automatycznie wykrywać wadliwe stacje monitorujące
                    iw razie potrzeby usuwać je z mapy.
                </p>
            </WindowModule>
            <Terms />
        </div>
    );
}