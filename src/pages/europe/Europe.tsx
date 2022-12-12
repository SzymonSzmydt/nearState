import { Window } from './../../components/window/Window';
import { Map } from './Map';
import { useDispatch, useSelector } from 'react-redux';
import { region } from '../../contex/redux/PopUpLogic';
import { getEuropeAqi, getEuLoaded } from '../../contex/redux/AqicnEuropeSlice';
import { useEffect } from 'react';
import { RootState } from '../../contex/redux/store';
const data = JSON.parse(localStorage.getItem("europe") || "");
export function Europe() {
    const isLoaded = useSelector((state: RootState)=> state.europe.isLoaded);
    const dispatch = useDispatch();
    const dataFetch = async () => {
        try {
            const result = (
                await Promise.all([
                  fetch(process.env.REACT_APP_londyn as string),
                  fetch(process.env.REACT_APP_budapeszt as string),
                  fetch(process.env.REACT_APP_warszawa as string),
                  fetch(process.env.REACT_APP_kopenhaga as string),
                  fetch(process.env.REACT_APP_helsinki as string),
                  fetch(process.env.REACT_APP_paryz as string),
                  fetch(process.env.REACT_APP_madryd as string),
                  fetch(process.env.REACT_APP_berlin as string)
                ])
              ).map((r) => r.json());
              const [londyn, budapeszt, warszawa, kopenhaga, helsinki, paryz, madryd, berlin] = await Promise.all(
                result
              );
              const data = [
                londyn.data,
                budapeszt.data, 
                warszawa.data, 
                kopenhaga.data, 
                helsinki.data, 
                paryz.data, 
                madryd.data, 
                berlin.data
                ].sort((a, b) => b.aqi - a.aqi);
              dispatch(getEuropeAqi(data));
              dispatch(getEuLoaded(true));
              localStorage.setItem('europe', JSON.stringify(data));
            } catch(err) {
                console.log(err);  
            }
        }
    useEffect(() => {
        // if (!isLoaded) {
        //     dataFetch();
        // }
      dispatch(region('europe'));
      dispatch(getEuropeAqi(data));
    }, []);
    return (
        <Window>
            <Map/>
        </Window>
    )
}