import { WindowModule } from '../../../components/window/WindowModule';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';

export function SearchResultList() {
    const searchResult = useSelector((state: RootState) => state.searchResult.result )
    return (
        searchResult ?       
        <WindowModule>
            <ul>
                {
                    searchResult.filter((e, i) => i < 5 && e["station"]["country"] === "PL")
                        .map((e) => <li key={e["uid"]}> {e["station"]["name"]} </li> )
                }
            </ul>
        </WindowModule> 
        : null
    );
}