import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PageTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results));
  };

  return (
    <PageContainer>
      <PageTitle>Popular Movies</PageTitle>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults.length > 0 ? searchResults : null} />
    </PageContainer>
  );
};

export default HomePage;