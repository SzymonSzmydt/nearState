import { Window } from './../../components/window/Window';
import { Map } from './Map';
import { useDispatch } from 'react-redux';
import { getEuropeAqi } from '../../contex/redux/AqicnEuropeSlice';
import { useEffect } from 'react';
const data = JSON.parse(localStorage.getItem("europe") || "");
export function Europe() {
    const dispatch = useDispatch();
    const dataFetch = async () => {
        try {
            const result = (
                await Promise.all([
                  fetch(process.env.REACT_APP_londyn as string),
                  fetch(process.env.REACT_APP_wieden as string),
                  fetch(process.env.REACT_APP_warszawa as string),
                  fetch(process.env.REACT_APP_kopenhaga as string),
                  fetch(process.env.REACT_APP_helsinki as string),
                  fetch(process.env.REACT_APP_paryz as string),
                  fetch(process.env.REACT_APP_madryd as string),
                  fetch(process.env.REACT_APP_berlin as string)
                ])
              ).map((r) => r.json());
              const [londyn, wieden, warszawa, kopenhaga, helsinki, paryz, madryd, berlin] = await Promise.all(
                result
              );
              const data = [
                londyn.data,
                wieden.data, 
                warszawa.data, 
                kopenhaga.data, 
                helsinki.data, 
                paryz.data, 
                madryd.data, 
                berlin.data
                ].sort((a, b) => b.aqi - a.aqi);
              dispatch(getEuropeAqi(data));
              localStorage.setItem('europe', JSON.stringify(data));
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