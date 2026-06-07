import React from 'react';

function MovieCard({ movie, onDelete, onStatusChange }) {
  const handleStatus = (e) => {
    onStatusChange && onStatusChange(movie.id, e.target.value);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      {movie.poster && (
        <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }} />
      )}

      <h3 style={{ margin: '8px 0 6px 0', color: '#333' }}>{movie.title}</h3>

      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        <strong>Year:</strong> {movie.year || 'N/A'}
      </p>

      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        <strong>Genre:</strong> {movie.genre || '—'}
      </p>

      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        <strong>Rating:</strong> ⭐ {movie.rating || 'Unrated'}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
        <select value={movie.status} onChange={handleStatus} style={{ padding: '6px', borderRadius: '6px' }}>
          <option>Plan to Watch</option>
          <option>Watching</option>
          <option>Watched</option>
        </select>

        <button onClick={() => onDelete && onDelete(movie.id)} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: '6px', cursor: 'pointer' }}>
          Delete
        </button>
      </div>

      {movie.description && (
        <p style={{ marginTop: '8px', fontSize: '13px', color: '#555' }}>{movie.description}</p>
      )}
    </div>
  );
}

export default MovieCard;