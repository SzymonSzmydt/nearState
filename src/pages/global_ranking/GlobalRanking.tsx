import "./css/global.css";
import { GlassCityBar } from './GlassCityBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../contex/redux/store';
import { PopUpRanking } from '../../components/ui/PopUpRanking';
import { useState } from 'react';

export function GlobalRanking() {
    const [ popUp, setPopUp ] = useState(false);
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);

    console.log("aqicnData ", aqicnData);
    
    return (
        <>
            { aqicnData ? (aqicnData as any[]).map((element, index) => (
                <GlassCityBar
                    key={element.idx}
                    number={index + 1}
                    {...element}
                    
                />
            )) : null }
            { popUp ? <PopUpRanking handleClick={setPopUp}/> : null }
        </>
    )
}