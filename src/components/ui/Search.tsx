import "./css/search.css";
import { useRef, useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from 'react-redux';
import { resultList } from '../../contex/redux/SearchSlice';
import { WindowModule } from '../window/WindowModule';
type SearchProps = {
    state: Dispatch<SetStateAction<boolean>>
}
export function Search({ state }: SearchProps ) {
  const [ error, setError ] = useState('');
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement | null>(null);
  const validation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (ref.current && ref.current.value.length < 3) {
        return setError(`Za mało liter. Samo "${ref.current?.value}" nie wystarczy`)
    }
    searchFetch();
  }
  const searchFetch = async () => {
    try {
      const response = await fetch(
        (process.env.REACT_APP_search as string) + ref.current?.value
      );
      const data = await response.json();
        if (data.data.length < 1) {
          return setError(`Nie znaleziono podanej frazy "${ref.current?.value}"`);
        }
        dispatch( resultList(data.data) );
        state(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <WindowModule>
        <div className="flex column">
            <h3>Sprawdź zanieczyszczenie w różnych miastach Polski </h3>
            <form className="flex wrap" onSubmit={validation}>
                <input
                    type="text"
                    className="search__input"
                    placeholder="Znajdź miasto"
                    ref={ref}
                />
            <button className="search__btn">Szukaj</button>
            </form>
            <span className="small-font search__error"> 
                { error ? `${error}` : null } 
            </span>
            <span className="small-font search__text-color">
                Weź pod uwagę tylko większe miasta, właśnie w takich może znajdować się
                stacja pomiarowa.
            </span>
        </div>
    </WindowModule>
  );
}
