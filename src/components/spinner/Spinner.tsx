import './spiner.css';
import { Glass } from '../window/Glass';
export function Spinner() {
    return (
        <div className="flex spinner">
            <div className="lds-ripple"><div/><div/></div>
        </div>
    )
}