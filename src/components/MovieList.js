import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const StyledLink = styled(Link)`
 text-decoration: none;
  color: inherit;
  flex: 1 1 18%;
  max-width: 18%;
  margin: 10px;
`;

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
      <CardContainer>
        {movieList.map(movie => (
          <StyledLink to={`/movie/${movie.id}`} key={movie.id}>
            <MovieItem movie={movie} />
          </StyledLink>
        ))}
      </CardContainer>
    </div>
  );
};

export default MovieList;