import "./css/form_interface.css";
import { WindowModule } from "./../../components/ui/window/WindowModule";
import { URL, API_KEY } from "../../contex/env";
import { useState } from "react";
import { TCountryInfo } from "./TCountryInfo";

interface RoadInfo {
    drive_on: string;
    speed_in: string;
}

interface FetchedData {
    annotations: string[];
    [key: number]: any;
}

export function FormInterface() {
    const [country, setCountry] = useState<FetchedData | []>([]);

    const handleClick = async () => {
        try {
            const response = await fetch(`${URL}de&key=${API_KEY}&pretty=1`);
            const data = await response.json();
            setCountry(data.results);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <WindowModule>
            <TCountryInfo
                continent={country[0]?.components.continent}
                country={country[0]?.components.country}
                country_code={country[0]?.components.country_code}
                political_union={country[0]?.components.political_union}
                iso_code={country[0]?.annotations['currency'].iso_code}
            />
            <button onClick={handleClick}>get API</button>
        </WindowModule>
    );
}
