import React from 'react';

function MovieFilter({
  genres = ['All Genres', 'Action', 'Comedy', 'Drama'],
  selectedGenre = 'All Genres',
  onChange,
}) {
  return (
    <div style={{ padding: '8px' }}>
      <label htmlFor="genre-select">
        <h3>Filter Movies</h3>
      </label>

      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MovieFilter;