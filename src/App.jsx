import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', year: '2010', rating: '8.8', status: 'Watched' },
    { id: 2, title: 'Interstellar', year: '2014', rating: '8.6', status: 'Plan to Watch' },
    { id: 3, title: 'The Dark Knight', year: '2008', rating: '9.0', status: 'Watched' }
  ]);

  const addMovie=(newMovie)=>{
    setMovies((prev)=>[
        ...prev,
        {...newMovie, id: Date.now()},
    ]);
  };

return (
        <>
            <Navbar />
            <Home />
            <MovieList moviesList={movies} />
            <Footer />
        </>
    );
}

export default App;