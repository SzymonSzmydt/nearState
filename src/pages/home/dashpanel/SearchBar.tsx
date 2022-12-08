import './css/search.css';

export function SearchBar() {
    return (
            <form className="flex wrap search__form">
                <input type="text" className="search__input" placeholder="Znajdź miasto"/>
                <button className="search__btn">Szukaj</button>
            </form>
    )
}