import "./css/global.css";
import { useState } from 'react';
import { urlWarszawa, city } from '../../contex/env';
import { GlassCityBar } from './GlassCityBar';

export function GlobalRanking() {
    const citys = JSON.parse(localStorage.getItem('City') || "");
    const state = JSON.parse(localStorage.getItem('województwa') || "");

    const katowice = JSON.parse(localStorage.getItem('Katowice') || "");
    const poznan = JSON.parse(localStorage.getItem('Poznan') || "");
    const wawa = JSON.parse(localStorage.getItem('Warszawa') || "");



    const [globalData, setGlobalData] = useState([]);

    const handleClick = async () => {

        try {
            const response = await fetch(city);
            const data = await response.json();
            localStorage.setItem('City', JSON.stringify(data.data));  /// locale
            setGlobalData(data.data); 
            } catch (e) {
            console.log(e);
        }
    };

    console.log("Global ", globalData);
    // console.log("City ", citys);
    // console.log("State ", state);
    
    
    
    return (
        <>
            <GlassCityBar city={katowice?.city} pollution={katowice?.current?.pollution} weather={katowice?.current?.weather}/>
            <GlassCityBar city={poznan?.city} pollution={poznan?.current?.pollution} weather={poznan?.current?.weather}/>
            <GlassCityBar city={wawa?.city} pollution={wawa?.current?.pollution} weather={wawa?.current?.weather}/>
            
            <button onClick={handleClick}>API</button>
        </>

    )
}