import './css/airPollution.css'
import { WindowModule } from '../../../components/window/WindowModule';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import parse from 'html-react-parser';

export const jm = '<span className="thin-font"> &mu;</span>g/m<sup>3</sup>';
export function AirPollution() {
    const airData = useSelector((state: RootState) => state.aqicn.value);
    const index = useSelector((state: RootState)=> state.popUp.indexR);
    return (
        airData ?
        <WindowModule>
            <section className="flex air__pollution">
                <h4> { airData ? airData[index]?.city?.name: null } </h4>
                <table className="air__pollution-table">
                    <tbody>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td td-border-tl"> CO </td>
                            <th className="air__pollution-th td-border-tr"> { airData[index]?.iaqi?.co?.v } 
                            { airData[index]?.iaqi?.co?.v ? parse(jm) : 'brak pomiaru' } 
                            </th>
                        </tr>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td"> NO<sub>2</sub> </td>
                            <th className="air__pollution-th"> { airData[index]?.iaqi?.no2?.v } 
                            { airData[index]?.iaqi?.no2?.v ? parse(jm) : 'brak pomiaru' } 
                            </th>
                        </tr>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td  td-border-bl"> O<sub>3</sub> </td>
                            <th className="air__pollution-th td-border-br"> { airData[index]?.iaqi?.o3?.v } 
                            { airData[index]?.iaqi?.o3?.v ? parse(jm) : 'brak pomiaru' }
                            </th>
                        </tr>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td  td-border-bl"> SO<sub>2</sub> </td>
                            <th className="air__pollution-th td-border-br"> { airData[index]?.iaqi?.so2?.v } 
                            { airData[index]?.iaqi?.so2?.v ? parse(jm) : 'brak pomiaru' }
                            </th>
                        </tr>
                    </tbody>
                </table>
                Ilość zanieczyszczeń występująca w powietrzu { airData[index]?.time?.s }
            </section>
        </WindowModule> : null
    );
}