import "./css/global.css";
import { GlassCityBar } from './GlassCityBar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../contex/redux/store';
import { PopUpRanking } from '../../components/ui/popup/PopUpRanking';
import { rankingPopUp, popUpOff, indexPopUp  } from '../../contex/redux/PopUpLogic';

export function GlobalRanking() {
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);
    const ranking = useSelector((state: RootState) => state.popUp.ranking);
    const dispatch = useDispatch();

    console.log("aqicnData ", aqicnData);
    const handleClick = (index: number) => {
        dispatch(popUpOff());
        dispatch(indexPopUp(index));
        dispatch(rankingPopUp(true));
    }
    return (
        <div className="global-ranking">
            { aqicnData ? (aqicnData as any[]).map((element, index) => (
                <GlassCityBar
                    key={element.idx}
                    number={index + 1}
                    {...element}
                    handleClick={()=> handleClick(index)}
                />
            )) : null }
           { ranking ? <PopUpRanking /> : null}
        </div>
    )
}