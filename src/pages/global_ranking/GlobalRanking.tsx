import "./global.css";
import { useState } from 'react';
import { apiKey_airVisual } from '../../contex/env';
import { AirVisualApi } from '../../contex/types/AirVisualApi';
import { GlassCityBar } from './GlassCityBar';

export function GlobalRanking() {
    const data = JSON.parse(localStorage.getItem('Katowice') || "");
    const [globalData, setGlobalData] = useState(data);
    const { city, current } = globalData as [] as AirVisualApi;


    const handleClick = async () => {

        try {
            const response = await fetch(`http://api.airvisual.com/v2/city?city=Katowice&state=Silesia&country=POLAND&key=${apiKey_airVisual}`);
            const data = await response.json();
            localStorage.setItem('Katowice', JSON.stringify(data.data));  /// locale
            setGlobalData(data.data); 
            } catch (e) {
            console.log(e);
        }
    };

    console.log("Global ", globalData);
    
    return (
        <>
            <GlassCityBar city={city} pollution={current?.pollution} weather={current?.weather}/>
            <button onClick={handleClick}>API</button>
        </>

    )
}