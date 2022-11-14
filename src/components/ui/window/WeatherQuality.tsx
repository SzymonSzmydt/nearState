import { Legend } from '../../../pages/home/Legend';
import { WindowModule } from './WindowModule';

export function WeatherQuality() {

    return (
        <WindowModule>
            <div>
                <h1>Ranking miast jakości powietrza i zanieczyszczenia</h1>
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
                        Jest to ocena jakości powietrza, która obejmuje poziom pyłów zawieszonych
                        PM2.5 i PM10 oraz niektórych zanieczyszczeń gazowych, takich jak:
                        <ul>
                            <li>dwutlenku siarki (S0<sub>2</sub>)</li>
                            <li>ozonu (O<sub>3</sub>)</li>
                            <li>tlenku azotu (NO)</li>
                            <li>tlenku węgla (CO)</li>
                            <li>benzen (C<sub>6</sub>H<sub>6</sub>)</li>
                        </ul>
                        które najcz esciej są wynikiem spalania paliw.
                    </article>
                </section>
            </div>
        </WindowModule>
    );
}