import './css/dashpanel.css';
import { Search } from '../../../components/ui/Search';
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
            <Search state={setScrollToSearchResult}/>
            <SearchResultBox/>
        </div>
    )
}