import React, { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
    const [localMovies, setLocalMovies] = useState([
        { id: 1, title: 'Inception', year: '2010', rating: '8.8', status: 'Watched' },
        { id: 2, title: 'Interstellar', year: '2014', rating: '8.6', status: 'Plan to Watch' },
        { id: 3, title: 'The Dark Knight', year: '2008', rating: '9.0', status: 'Watched' }
    ]);
    return (
        <>
            <Navbar />
            <Home />
            <MovieList moviesList={localMovies} />
            <Footer />
        </>
    );
}

export default App;