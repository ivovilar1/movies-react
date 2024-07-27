import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const MovieTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const MovieRating = styled.p`
  font-size: 1em;
  color: #888;
`;

const MovieItem = ({ movie }) => {
  return (
    <MovieCard>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieRating>Rating: {movie.vote_average}</MovieRating>
    </MovieCard>
  );
};

export default MovieItem;
