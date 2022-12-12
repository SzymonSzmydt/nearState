import './css/dashpanel.css';
import { useRef, useEffect, useState } from 'react';
import { SearchResultBox } from './SearchResultBox';
import { Search } from './search/Search'
export type TypeOfMapProps = {
    map: string;
}
export function Dashpanel({ map }: TypeOfMapProps) {
    const [ scrollToSearchResult, setScrollToSearchResult ] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=> {
        if (scrollToSearchResult) {
            buttonRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
            setScrollToSearchResult(false);
        }
    }, [scrollToSearchResult]);
    return (
        <div ref={buttonRef}>
            <Search state={setScrollToSearchResult}/>
            <SearchResultBox map={map}/>
        </div>
    )
}