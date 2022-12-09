import './css/dashpanel.css';
import { SearchResultList } from './SearchResultList';
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
           { searchResult.length > 0 ? <SearchResultList/> : null }
        </div>
    )
}