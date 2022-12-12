import { useSelector } from 'react-redux';
import { RootState } from '../../../contex/redux/store';
import { SearchResultCityBar } from '../dashpanel/search/SearchResultCityBar';
import { TypeOfMapProps } from './Dashpanel';
export function SearchResultBox( { map }: TypeOfMapProps) {
    const searchResult = useSelector((state: RootState)=> state.searchResult.result);
    return (
        <div className={`search__resultbox ${map}`}>
             { searchResult ? searchResult.length > 0 ? searchResult
                .filter((e, i) => i < 7)
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