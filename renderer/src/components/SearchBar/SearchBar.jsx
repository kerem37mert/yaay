import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className={ "search-bar" }>
            <input
                type="text"
                className={ "search-box" }
                placeholder={ "Find the package" }
            />
            <input
                type="button"
                className={ "search-button" }
                value={ "Search" }
            />
        </div>
    );
}

export default SearchBar;