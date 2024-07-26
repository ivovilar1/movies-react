import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    if (!movies) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => setPopularMovies(data.results));
    }
  }, [movies]);

  const movieList = movies || popularMovies;

  return (
    <div>
      {movieList.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;