import React from 'react';
import MovieCard from './MovieCard.jsx'; 

function MovieList({ moviesList, onDeleteMovie, onChangeStatus }) {
  // Guard clause: If there are no movies, show a friendly message
  if (!moviesList || moviesList.length === 0) {
    return <p style={{ padding: '20px' }}>No movies in your list yet!</p>;
  }

  return (
    <div className="app-container">
      <h2>My Watchlist</h2>
      <div className="movie-grid">
        {moviesList.map((singleMovie) => (
          <MovieCard 
            key={singleMovie.id} 
            movie={singleMovie}
            onDelete={onDeleteMovie}
            onStatusChange={onChangeStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;