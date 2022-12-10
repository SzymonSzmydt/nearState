import "./css/global.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { PopUpRanking } from '../../../components/ui/popup/PopUpRanking';
import { GlassCityBar } from './GlassCityBar'
export function GlobalRanking() {
    const aqicnData = useSelector((state: RootState) => state.poland.value);
    const ranking = useSelector((state: RootState) => state.popUp.ranking);
    const citys = useSelector((state: RootState) => state.poland.citys);
    return (
        <div className="global-ranking">
            { aqicnData ? aqicnData.map((element, index) => (
                <GlassCityBar
                    key={element.idx}
                    index={index}
                    citys={citys}
                    {...element}
                />
            )) : null }
           { ranking ? <PopUpRanking /> : null}
        </div>
    )
}