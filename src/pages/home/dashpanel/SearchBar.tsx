import "./css/search.css";
import { useRef } from "react";
import { WindowModule } from '../../../components/window/WindowModule';
import { useDispatch } from 'react-redux';
import { resultList, error } from '../../../contex/redux/SearchSlice';
export function SearchBar() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement | null>(null);
  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        (process.env.REACT_APP_search as string) + ref.current?.value
      );
      const data = await response.json();

      dispatch( resultList(data.data) );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <WindowModule>
        <h3>Sprawdź zanieczyszczenie w różnych miastach Polski </h3>
        <form className="flex wrap search__form" onSubmit={handleClick}>
            <input
                type="text"
                className="search__input"
                placeholder="Znajdź miasto"
                ref={ref}
            />
        <button className="search__btn">Szukaj</button>
        </form>
            Weź pod uwagę tylko większe miasta, właśnie w takich może znajdować się
            stacja pomiarowa.
    </WindowModule>
  );
}
