import "./css/information.css";
import { WindowModule } from '../../components/window/WindowModule';
import { Terms } from "./Terms";
import { Window } from "../../components/window/Window";
import { AirQualityLegend } from '../../components/ui/airQuality/AirQualityLegend';
export function Informations() {
  return (
    <Window>
      <div className="informations container-lg">
        <WindowModule>
            <AirQualityLegend/>
        </WindowModule>
        <WindowModule>
          <h2>Informacje dotyczące danych na stronie</h2>
          <p>
            Dane dotyczące jakości powietrza pobierane są ze&nbsp;Światowego Indeksu
            Jakości Powietrza. Dane te publikowane są w&nbsp;czasie rzeczywistym,
            dlatego nie mogą być potwierdzone w&nbsp;momencie publikacji. Jednak 
            w&nbsp;celu zapewnienia wysokiego poziomu dokładności dla każdej wartości
            AQI, stosuje się&nbsp;kilka rozwiązań do&nbsp;przetwarzania uczenia
            maszynowego. Na&nbsp;przykład weryfikowana jest spójność danych w&nbsp;czasie
            rzeczywistym z&nbsp;sąsiednimi stacjami, co&nbsp;pozwala automatycznie
            wykrywać wadliwe stacje monitorujące i&nbsp;w&nbsp;razie potrzeby
            usuwać je&nbsp;z&nbsp;mapy.
          </p>
        </WindowModule>
      </div>
      <Terms />
    </Window>
  );
}
