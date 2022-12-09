import './css/dashpanel.css';
import { SearchBar } from '../../../components/ui/SearchBar';
import { useRef, useEffect, useState } from 'react';
import { SearchResultBox } from './SearchResultBox';
export function Dashpanel() {
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
            <SearchBar state={setScrollToSearchResult}/>
            <SearchResultBox/>
        </div>
    )
}