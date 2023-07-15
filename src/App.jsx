import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Sidebar from './components/Sidebar';
import moviesData from './data/moviesData'; // Archivo de ejemplo con datos de películas

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
      <h1 className="title">YourMovie</h1>
        <MovieList movies={moviesData} onMovieClick={handleMovieClick} />
        <Sidebar selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default App;


