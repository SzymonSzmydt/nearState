import './css/dashpanel.css';
import { SearchResultCityBar } from './SearchResultCityBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchBar } from '../../../components/ui/SearchBar';
import { useRef, useEffect } from 'react';
export function Dashpanel() {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=> {
        if (searchResult.length > 0) {
            buttonRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
        }
    }, [searchResult]);
    console.log(searchResult);
    
    return (
        <div ref={buttonRef}>
            <SearchBar/>
           { searchResult ? searchResult.length > 0 ? searchResult
                .filter((e, i) => i < 7 && e["station"]["country"] === "PL")
                .map((e, i) => (
                    <SearchResultCityBar 
                        key={e["uid"]} 
                        cityName={e["station"]["name"]} 
                        aqi={e["aqi"]} 
                        index={i}
                    />
                ) ) 
                : null : null}
        </div>
    )
}