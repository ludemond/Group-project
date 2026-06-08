import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieForm from "./components/MovieForm";
// import MovieDetails from "./pages/MovieDetails";
import MovieFilter from "./components/MovieFilter";

function App() {
  const [movies, setMovies] = useState(() => {
    try {
      const raw = localStorage.getItem('movies');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore parse errors
    }
    return [
      { id: 1, title: 'Inception', year: '2010', rating: '8.8', status: 'Watched', genre: 'comedy' },
      { id: 2, title: 'Interstellar', year: '2014', rating: '8.6', status: 'Plan to Watch', genre: 'drama' },
      { id: 3, title: 'The Dark Knight', year: '2008', rating: '9.0', status: 'Watched', genre: 'action' }
    ];
  });

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  useEffect(() => {
    try {
      localStorage.setItem('movies', JSON.stringify(movies));
    } catch (e) {
      // ignore storage errors
    }
  }, [movies]);

  useEffect(() => {
    try {
      const g = localStorage.getItem('selectedGenre');
      if (g) setSelectedGenre(g);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('selectedGenre', selectedGenre);
    } catch (e) {}
  }, [selectedGenre]);

  const addMovie = (newMovie) => {
    setMovies((prev) => [
      ...prev,
      { ...newMovie, id: Date.now() },
    ]);
  };

  const updateMovieStatus = (id, newStatus) => {
    setMovies((prev) => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter(m => m.id !== id));
  };

  const filteredMovies = selectedGenre && selectedGenre !== 'All Genres'
    ? movies.filter(m => (m.genre || '').toLowerCase() === selectedGenre.toLowerCase())
    : movies;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={(
          <>
            <Home />
            <div className="app-container">
              <MovieForm onAddMovie={addMovie} />
              <MovieFilter selectedGenre={selectedGenre} onChange={setSelectedGenre} />
              <MovieList moviesList={filteredMovies} onDeleteMovie={deleteMovie} onChangeStatus={updateMovieStatus} />
            </div>
          </>
        )} />

        <Route path="/search" element={<Search movies={movies} onDelete={deleteMovie} onStatusChange={updateMovieStatus} />} />

        <Route path="/watchlist" element={(
          <div className="app-container">
            <h2>Your Watchlist</h2>
            <MovieList moviesList={movies} onDeleteMovie={deleteMovie} onChangeStatus={updateMovieStatus} />
          </div>
        )} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;