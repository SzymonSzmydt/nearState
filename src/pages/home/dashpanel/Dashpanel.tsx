import { SearchResultList } from './SearchResultList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchBar } from '../../../components/ui/SearchBar';
import { useRef, useEffect } from 'react';
export function Dashpanel() {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=> {
        buttonRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [searchResult]);
    return (
        <>
            <SearchBar/>
           { searchResult.length > 0 ? <SearchResultList/> : null }
           <div ref={buttonRef}/>
        </>
    )
}