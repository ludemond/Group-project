import React from 'react';

function MovieCard({ movie, onDelete, onStatusChange }) {
  const handleStatus = (e) => {
    onStatusChange && onStatusChange(movie.id, e.target.value);
  };

  return (
    <div className="movie-card">
      {movie.poster && (
        <img src={movie.poster} alt={movie.title} />
      )}

      <h3>{movie.title}</h3>

      <p className="muted"><strong>Year:</strong> {movie.year || 'N/A'}</p>
      <p className="muted"><strong>Genre:</strong> {movie.genre || '—'}</p>
      <p className="muted"><strong>Rating:</strong> ⭐ {movie.rating || 'Unrated'}</p>

      <div className="card-actions">
        <select value={movie.status} onChange={handleStatus} className="filter-select">
          <option>Plan to Watch</option>
          <option>Watching</option>
          <option>Watched</option>
        </select>

        <button onClick={() => onDelete && onDelete(movie.id)} className="danger-btn">
          Delete
        </button>
      </div>

      {movie.description && (
        <p className="muted" style={{ marginTop: 8 }}>{movie.description}</p>
      )}
    </div>
  );
}

export default MovieCard;