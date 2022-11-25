import { Window } from './../../components/window/Window';
import { Map } from './Map';
import { urls } from '../../contex/env';
import { useDispatch } from 'react-redux';
import { getAqicn } from '../../contex/redux/AqicnCitySlice';
import { useEffect } from 'react';

export function Home() {
    const dispatch = useDispatch();

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
              dispatch(getAqicn(data));
              localStorage.setItem('aqicn', JSON.stringify(data) || "");
              console.log(data)
            } catch(err) {
                console.log(err);  
            }
        }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('aqicn') || "");
        dispatch(getAqicn(data));
    }, []);

    return (
        <Window>
            <Map/>
        </Window>
    )
}