import { Window } from './../../components/window/Window';
import { Map } from './Map';
import { useDispatch } from 'react-redux';
import { getAqicn } from '../../contex/redux/AqicnCitySlice';
import { useEffect } from 'react';

export function Home() {
    const dispatch = useDispatch();
    const dataFetch = async () => {
        try {
            const result = (
                await Promise.all([
                  fetch(process.env.REACT_APP_katowice),
                  fetch(process.env.REACT_APP_poznan),
                  fetch(process.env.REACT_APP_warszawa),
                  fetch(process.env.REACT_APP_gdansk),
                  fetch(process.env.REACT_APP_krakow),
                  fetch(process.env.REACT_APP_lodz),
                  fetch(process.env.REACT_APP_szczecin),
                  fetch(process.env.REACT_APP_wroclaw)
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
            } catch(err) {
                console.log(err);  
            }
        }
    // useEffect(() => {
    //   dataFetch();
    // }, []);
    return (
        <Window>
            <Map/>
        </Window>
    )
}