import { useSelector } from "react-redux";
import { RootState } from "../../../contex/redux/store";
import { Glass } from "../../../components/window/Glass";
export function SearchResultList() {
  const searchResult = useSelector(
    (state: RootState) => state.searchResult.result
  );
  return searchResult ? (
    <>
      {searchResult
        .filter((e, i) => i < 7 && e["station"]["country"] === "PL")
        .map((e, i) => (
          <Glass key={e["uid"]}>
            <section className="flex wrap global search__result">
              <span className="glass-nr search__nr">{`${i + 1}.`}</span>
              <div className="flex search__city-name">
                 {e["station"]["name"]}
              </div>
            </section>
          </Glass>
        ))}
    </>
  ) : null;
}
