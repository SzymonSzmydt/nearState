import './css/airPollution.css'
import { WindowModule } from '../../components/window/WindowModule';
import { useSelector } from 'react-redux';
import { RootState } from '../../contex/redux/store';

export function AirPollution() {
    const airData = useSelector((state: RootState) => state.aqicn.value);
    const index = useSelector((state: RootState)=> state.popUp.index);
    
    return (
        <WindowModule>
            <section className="flex air__pollution">
                <h4> { airData ? airData[index]?.city?.name: null } </h4>
                <table className="air__pollution-table">
                    <tbody>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td"> CO </td>
                            <th className="air__pollution-th"> { airData ? airData[index]?.iaqi?.co?.v : null } 
                            <span className="thin-font"> &mu;</span>g/m<sup>3</sup> </th>
                        </tr>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td"> NO<sub>2</sub> </td>
                            <th className="air__pollution-th"> { airData ? airData[index]?.iaqi?.no2?.v : null } 
                            <span className="thin-font"> &mu;</span>g/m<sup>3</sup> </th>
                        </tr>
                        <tr className="air__pollution-tr">
                            <td className="air__pollution-td"> O<sub>3</sub> </td>
                            <th className="air__pollution-th"> { airData ? airData[index]?.iaqi?.no2?.v : null } 
                            <span className="thin-font"> &mu;</span>g/m<sup>3</sup> </th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </WindowModule>
    );
}