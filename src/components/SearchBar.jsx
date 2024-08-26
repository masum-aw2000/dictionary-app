/* eslint-disable react/prop-types */
// src/components/SearchBar.jsx

const SearchBar = ({query, setQuery, handleSearch}) => {
    return (
        <form className='search' onSubmit={handleSearch}>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Enter a word'
                className='searchBar'
                required
            />
            <button className='searchButton' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>

        </form>
    )
}

export default SearchBar;