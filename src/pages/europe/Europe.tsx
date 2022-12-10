import { Window } from './../../components/window/Window';
import { Map } from './Map';
import { useDispatch } from 'react-redux';
import { getEuropeAqi } from '../../contex/redux/AqicnEuropeSlice';
import { useEffect } from 'react';
const data = JSON.parse(localStorage.getItem("allPromise") || "");
export function Europe() {
    const dispatch = useDispatch();
    const dataFetch = async () => {
        try {
            const result = (
                await Promise.all([
                  fetch(process.env.REACT_APP_katowice as string),
                  fetch(process.env.REACT_APP_poznan as string),
                  fetch(process.env.REACT_APP_warszawa as string),
                  fetch(process.env.REACT_APP_gdansk as string),
                  fetch(process.env.REACT_APP_krakow as string),
                  fetch(process.env.REACT_APP_lodz as string),
                  fetch(process.env.REACT_APP_szczecin as string),
                  fetch(process.env.REACT_APP_wroclaw as string)
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
              dispatch(getEuropeAqi(data));
              localStorage.setItem('allPromise', JSON.stringify(data));
            } catch(err) {
                console.log(err);  
            }
        }
    useEffect(() => {
      // dataFetch();
      dispatch(getEuropeAqi(data));
    }, [data]);
    return (
        <Window>
            <Map/>
        </Window>
    )
}