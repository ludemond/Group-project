import React from 'react';

function MovieFilter({
  genres = ['All Genres', 'Action', 'Comedy', 'Drama'],
  selectedGenre = 'All Genres',
  onChange,
}) {
  return (
    <div className="filter-bar">
      <h3 style={{ margin: 0 }}>Filter</h3>
      <select
        id="genre-select"
        className="filter-select"
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