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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = query 
        ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}&page=${currentPage}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${currentPage}`;

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchMovies();
  }, [currentPage, query]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <CardContainer>
        {movies.map(movie => (
          <StyledLink to={`/movie/${movie.id}`} key={movie.id}>
            <MovieItem movie={movie} />
          </StyledLink>
        ))}
      </CardContainer>
      <PaginationContainer>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </PaginationContainer>
    </div>
  );
};

export default MovieList;