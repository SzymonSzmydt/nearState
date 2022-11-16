import { API_KEY } from '../../contex/env';
import { useState } from 'react';
import { Glass } from '../../components/ui/window/Glass';

export function GlobalRanking() {
    // const locale = JSON.parse(localStorage.getItem("Global") || ""); /// locale
    
    const [globalData, setGlobalData] = useState<string[] | any>([]);

    const handleClick = async () => {
        try {
            const response = await fetch(`http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${API_KEY}`);
            const data = await response.json();
            localStorage.setItem('Global', JSON.stringify(data.data));  /// locale
            setGlobalData(data.data); 
        } catch (err) {
            console.error(err);
        }
    };

    // console.log("Global ", locale);
    
    return (
        <Glass>
            <button onClick={handleClick}>API</button>
        </Glass>

    )
}