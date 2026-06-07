import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieForm from "./components/MovieForm";
// import MovieDetails from "./pages/MovieDetails";
import MovieFilter from "./components/MovieFilter";
function App() {
    const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', year: '2010', rating: '8.8', status: 'Watched',genre:"comedy" },
    { id: 2, title: 'Interstellar', year: '2014', rating: '8.6', status: 'Plan to Watch',genre:"drama" },
    { id: 3, title: 'The Dark Knight', year: '2008', rating: '9.0', status: 'Watched',genre:"action" }
  ]);

    const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const addMovie=(newMovie)=>{
    setMovies((prev)=>[
        ...prev,
        {...newMovie, id: Date.now()},
    ]);
  };

  const updateMovieStatus = (id, newStatus) => {
    setMovies((prev) => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter(m => m.id !== id));
  };

return (
        <>
            <Navbar />
            <Home />
            <MovieForm onAddMovie={addMovie} />
            <MovieFilter selectedGenre={selectedGenre} onChange={setSelectedGenre} /> 
            <MovieList moviesList={
              selectedGenre && selectedGenre !== 'All Genres'
                ? movies.filter(m => (m.genre || '').toLowerCase() === selectedGenre.toLowerCase())
                : movies
            } onDeleteMovie={deleteMovie} onChangeStatus={updateMovieStatus} />
            {/* <MovieDetails movie={movies[0]} /> */}
            <Footer />
        </>
    );
}

export default App;