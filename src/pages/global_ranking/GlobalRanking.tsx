import "./css/global.css";
import { useState } from 'react';
import { urls } from '../../contex/env';
import { GlassCityBar } from './GlassCityBar';
import { Aqicn } from '../../contex/types/Aqicn';

const aqicn = JSON.parse(localStorage.getItem('aqcin') || "");

export function GlobalRanking() {
    const [ city, setCity] = useState<string[] | Aqicn>(aqicn);

    const dataFetch = async () => {
        try {
            const result = (
                await Promise.all([
                  fetch(urls.katowice),
                  fetch(urls.poznan),
                  fetch(urls.warszawa),
                  fetch(urls.gdansk),
                  fetch(urls.krakow),
                  fetch(urls.lodz),
                  fetch(urls.szczecin),
                  fetch(urls.wroclaw)
                ])
              ).map((r) => r.json());
              const [katowice, poznan, warszawa, gdansk, krakow, lodz, szczecin, wroclaw] = await Promise.all(
                result
              );
              const data = [
                katowice.data,
                poznan.data, 
                warszawa.data, 
                gdansk.data, 
                krakow.data, 
                lodz.data, 
                szczecin.data, 
                wroclaw.data
                ].sort((a, b) => b.aqi - a.aqi);
              setCity(data);
              localStorage.setItem('aqcin', JSON.stringify(data));  /// locale
            } catch(err) {
                console.log(err);  
            }
        }

    const handleClick = () => {
        dataFetch();
    }

    console.log(city);

    return (
        <>
            { city ? (city as unknown as any[]).map(({idx, city, aqi}, index) => (
                <GlassCityBar
                    key={idx}
                    number={index + 1}
                    city={city.name}
                    aqi={aqi}
                />
            )) : null }
            <button onClick={handleClick}> fetchAt onece </button>
        </>
    );

    // .sort(
    //     (a, b) => b.current.pollution["aqius"] - a.current.pollution["aqius"]);
}