import { API_KEY } from '../../contex/env';
import { useState } from "react";
import { TCountryInfo } from "./TCountryInfo";
import { WeatherQuality } from '../../components/ui/window/WeatherQuality';

export function FormInterFace() {
    const [dataFromApi, setCountryDataFromApi] = useState<string[] | any>([]);

    const handleClick = async () => {
        try {
            const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`);
            const data = await response.json();
            setCountryDataFromApi(data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <WeatherQuality/>
            <TCountryInfo {...dataFromApi} />
            <button onClick={handleClick}>get API</button>
        </>
    );
}