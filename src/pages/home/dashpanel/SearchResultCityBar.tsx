import { Glass } from "../../../components/window/Glass";
type SearchBarProps = {
    aqi: number | "-";
    cityName: string;
    index: number;
}
export function SearchResultCityBar({ aqi, cityName, index }: SearchBarProps) {

  return (
          <Glass>
            <section className="flex wrap">
              <span className="glass-nr search__nr">{`${index + 1}.`}</span>
              <div className="flex search__city-name">
                { cityName }
              </div>
              <div className="search__nr">
                { aqi }
                <span className="glass-small_font"> US AQI</span>
              </div>
            </section>
          </Glass>
  )
}
