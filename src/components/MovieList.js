import React, { useState, useEffect} from "react";
import MovieItem from './MovieItem';


const MovieList = () => {
    const [ movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => setMovies(data.results));
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;