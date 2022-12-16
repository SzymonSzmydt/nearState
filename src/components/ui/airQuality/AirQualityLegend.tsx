import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { PopupLegend } from "../../../components/ui/popup/PopupLegend";
import { legend } from "../../../contex/types/AirLegendDescription";
import {
    popupOff,
    legendPopup,
    indexPopup,
  } from "../../../contex/redux/PopupLogic";
export function AirQualityLegend() {
    const dispatch = useDispatch();
    const indexPop = useSelector((state: RootState) => state.popup.index);
    const legendPop = useSelector((state: RootState) => state.popup.legend);
    const handleClick = (index: number) => {
        dispatch(popupOff());
        dispatch(legendPopup(true));
        dispatch(indexPopup(index));
      };
    return (
        <section className="flex wrap legend__section">
        {legend.map((element, index) => (
          <div
            key={element.rank}
            className="flex legend"
            style={{ backgroundColor: element.bgcolor }}
            onClick={() => handleClick(index)}
          >
            <span> {element.rank} </span>
            <span> {element.range} </span>
          </div>
        ))}
        {legendPop ? <PopupLegend {...legend[indexPop]} /> : null}
      </section>
    )
}