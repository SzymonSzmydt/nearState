import "./css/global.css";
import { useState } from 'react';
import { urlSzczecin } from '../../contex/env';
import { GlassCityBar } from './GlassCityBar';

export function GlobalRanking() {
    const citys = JSON.parse(localStorage.getItem('City') || "");
    const state = JSON.parse(localStorage.getItem('województwa') || "");

    const katowice = JSON.parse(localStorage.getItem('Katowice') || "");
    const poznan = JSON.parse(localStorage.getItem('Poznan') || "");
    const wawa = JSON.parse(localStorage.getItem('Warszawa') || "");
    const torun = JSON.parse(localStorage.getItem('Torun') || "");
    const gdansk = JSON.parse(localStorage.getItem('Gdansk') || "");
    const krakow = JSON.parse(localStorage.getItem('Krakow') || "");
    const lodz = JSON.parse(localStorage.getItem('Lodz') || "");
    const szczecin = JSON.parse(localStorage.getItem('Szczecin') || "");

    const [globalData, setGlobalData] = useState([]);

    const handleClick = async () => {

        try {
            const response = await fetch(urlSzczecin);
            const data = await response.json();
            localStorage.setItem('Szczecin', JSON.stringify(data.data));  /// locale
            setGlobalData(data.data); 
            } catch (e) {
            console.log(e);
        }
    };

    console.log("Global ", globalData);
    console.log("City ", citys);
    console.log("State ", state);
    
    return (
        <>
            <GlassCityBar city={katowice?.city} pollution={katowice?.current?.pollution} weather={katowice?.current?.weather}/>
            <GlassCityBar city={poznan?.city} pollution={poznan?.current?.pollution} weather={poznan?.current?.weather}/>
            <GlassCityBar city={wawa?.city} pollution={wawa?.current?.pollution} weather={wawa?.current?.weather}/>
            <GlassCityBar city={torun?.city} pollution={torun?.current?.pollution} weather={torun?.current?.weather}/>
            <GlassCityBar city={gdansk?.city} pollution={gdansk?.current?.pollution} weather={gdansk?.current?.weather}/>
            <GlassCityBar city={krakow?.city} pollution={krakow?.current?.pollution} weather={krakow?.current?.weather}/>
            <GlassCityBar city={lodz?.city} pollution={lodz?.current?.pollution} weather={lodz?.current?.weather}/>
            <GlassCityBar city={szczecin?.city} pollution={szczecin?.current?.pollution} weather={szczecin?.current?.weather}/>
            
            <button onClick={handleClick}>API</button>
        </>

    )
}