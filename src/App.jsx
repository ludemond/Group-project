import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieForm from "./components/MovieForm";
import { useState } from "react";

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
            <MovieForm onAddMovie={addMovie}/>
            <MovieList moviesList={movies} />
            <Footer />
        </>
    );
}

export default App;