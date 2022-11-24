import "./css/global.css";
import { GlassCityBar } from './GlassCityBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../contex/redux/store';
import { PopUpRanking } from '../../components/ui/popup/PopUpRanking';

export function GlobalRanking() {
    const aqicnData = useSelector((state: RootState) => state.aqicn.value);
    const ranking = useSelector((state: RootState) => state.popUp.ranking);
    return (
        <div className="global-ranking">
            { aqicnData ? aqicnData.map((element, index) => (
                <GlassCityBar
                    key={element.idx}
                    index={index}
                    {...element}
                />
            )) : null }
           { ranking ? <PopUpRanking /> : null}
        </div>
    )
}