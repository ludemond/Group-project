import React from 'react';

// We destructure 'movie' from props
function MovieCard({ movie }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
        
      {/* 1. Title */}
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{movie.title}</h3>
      
      {/* 2. Year */}
      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        <strong>Year:</strong> {movie.year || 'N/A'}
      </p>
      
      {/* 3. Rating */}
      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        <strong>Rating:</strong> ⭐ {movie.rating || 'Unrated'}
      </p>
      
      {/* 4. Status (e.g., "Plan to Watch", "Watched", etc.) */}
      <p style={{ 
        margin: '8px 0 0 0', 
        fontSize: '13px', 
        fontWeight: 'bold',
        color: movie.status === 'Watched' ? '#2ecc71' : '#f39c12' 
      }}>
        <span>Status: {movie.status}</span>
      </p>
    </div>
  );
}

export default MovieCard;