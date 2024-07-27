import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const MovieImage = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const MovieRating = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;

const MovieDescription = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

const MovieReleaseDate = styled.p`
  font-size: 1em;
  margin: 10px 0;
  color: #888;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <DetailContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <MovieRating>Rating: {movie.vote_average}</MovieRating>
      <MovieDescription>{movie.overview}</MovieDescription>
      <MovieReleaseDate>Release Date: {movie.release_date}</MovieReleaseDate>
    </DetailContainer>
  );
};

export default MovieDetail;