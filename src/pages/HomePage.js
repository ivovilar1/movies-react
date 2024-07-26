import React, { useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = ( query ) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results));
    };
    return (
        <div>
            <h1>Popular Movies</h1>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={searchResults.length > 0 ? searchResults : null } />
        </div>
    );
};

export default HomePage;