import './css/search.css';

export function SearchBar() {
    return (
        <>
            <form>
                <input type="text" className="search__input" placeholder="Znajdź miasto"/>
            </form>
        </>
    )
}