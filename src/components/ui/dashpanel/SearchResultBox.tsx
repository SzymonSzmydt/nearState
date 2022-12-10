import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchResultCityBar } from '../dashpanel/search/SearchResultCityBar';

export function SearchResultBox() {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    return (
        <div className="search__resultbox">
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