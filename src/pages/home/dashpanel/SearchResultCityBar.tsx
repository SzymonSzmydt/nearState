import { Glass } from "../../../components/window/Glass";
import { earthQualityColor } from '../../../contex/hooks/EarthQualityColor';
type SearchBarProps = {
    aqi: number;
    cityName: string;
    index: number;
}
export function SearchResultCityBar({ aqi, cityName, index }: SearchBarProps) {

  return (
          <Glass>
            <section className="flex wrap">
              <span className="small-font search__nr"> {`${index + 1}.`} </span>
              <span className="search__city-name"> { cityName } </span>
              <div className="flex search__aqi bold search__nr" style={{
                        backgroundColor: aqi
                            ? earthQualityColor(aqi, "color")
                            : "",
                    }}>
                { aqi }
                <span className="search__mini-font"> US AQI</span>
              </div>
            </section>
          </Glass>
  )
}
