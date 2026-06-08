import React, { useState, useMemo } from 'react';
import MovieList from '../components/MovieList';

function Search({ movies = [], onDelete, onStatusChange }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return movies.filter(m => (m.title || '').toLowerCase().includes(q) || (m.genre || '').toLowerCase().includes(q));
  }, [movies, query]);

  return (
    <div className="app-container">
      <h2>Search Movies</h2>
      <div style={{ margin: '12px 0' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or genre"
          className="form-input"
        />
      </div>

      {query ? (
        results.length > 0 ? (
          <MovieList moviesList={results} onDeleteMovie={onDelete} onChangeStatus={onStatusChange} />
        ) : (
          <p className="muted">No results for "{query}"</p>
        )
      ) : (
        <p className="muted">Type to search by title or genre</p>
      )}
    </div>
  );
}

export default Search;
