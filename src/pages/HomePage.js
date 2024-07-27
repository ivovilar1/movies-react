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
  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <PageContainer>
      <PageTitle>Popular Movies</PageTitle>
      <SearchBar onSearch={handleSearch} />
      <MovieList query={query} />
    </PageContainer>
  );
};

export default HomePage;