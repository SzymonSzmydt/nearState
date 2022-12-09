import './css/dashpanel.css';
import { SearchResultCityBar } from './SearchResultCityBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchBar } from '../../../components/ui/SearchBar';
import { useRef, useEffect, useState } from 'react';
export function Dashpanel() {
    const [ scrollToSearchResult, setScrollToSearchResult ] = useState(false);
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=> {
        if (scrollToSearchResult) {
            buttonRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
            setScrollToSearchResult(false);
        }
    }, [scrollToSearchResult]);
    return (
        <div ref={buttonRef}>
            <SearchBar state={setScrollToSearchResult}/>
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