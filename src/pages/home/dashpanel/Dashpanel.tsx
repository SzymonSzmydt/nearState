import { SearchResultList } from './SearchResultList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchBar } from '../../../components/ui/SearchBar';
export function Dashpanel() {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    return (
        <>
            <SearchBar/>
           { searchResult.length > 0 ? <SearchResultList/> : null }
        </>
    )
}