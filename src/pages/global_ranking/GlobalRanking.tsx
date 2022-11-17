import { useState } from 'react';
import { Glass } from '../../components/ui/window/Glass';

interface Params {
    search: string;
}

export function GlobalRanking() {
    // const locale = JSON.parse(localStorage.getItem("Global") || ""); /// locale
    
    const [globalData, setGlobalData] = useState([]);

    const params: Params = {
        search: "Wroclaw"
    }

    const handleClick = async () => {

        try {
            const response = await fetch(`https://pl.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${params.search}&format=json`);
            const data = await response.json();
            setGlobalData(data.query); 
            } catch (e) {
            console.log(e);
        }
    };

    console.log("Global ", globalData);
    
    return (
        <Glass>
            <button onClick={handleClick}>API</button>
        </Glass>

    )
}