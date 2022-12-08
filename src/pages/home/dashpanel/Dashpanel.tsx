import { SearchBar } from './SearchBar';
import { SearchResultList } from './SearchResultList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
export function Dashpanel() {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    return (
        <>
            <SearchBar/>
           { searchResult.length > 0 ? <SearchResultList/> : null }
        </>
    )
}