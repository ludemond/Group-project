import React from 'react';
import MovieCard from './MovieCard.jsx'; 

function MovieList({ moviesList }) {
  // Guard clause: If there are no movies, show a friendly message
  if (!moviesList || moviesList.length === 0) {
    return <p style={{ padding: '20px' }}>No movies in your list yet!</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>
      
      {/* Layout grid to arrange cards nicely */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
        gap: '15px' 
      }}>
        {/* Using .map() to display movies */}
        {moviesList.map((singleMovie) => (
          <MovieCard 
            key={singleMovie.id} 
            movie={singleMovie} 
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;