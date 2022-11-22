import "./css/global.css";
import { GlassCityBar } from './GlassCityBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../contex/redux/store';

export function GlobalRanking() {
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);

    console.log("aqicnData ", aqicnData);
    
    return (
        <>
            { aqicnData ? (aqicnData as any[]).map((e, index) => (
                <GlassCityBar
                    key={e.idx}
                    number={index + 1}
                    city={e.city.name}
                    aqi={e.aqi}
                />
            )) : null }
        </>
    )
}