import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [searchMovieTerm, setSearchMovieTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Movie based on search
  const fetchMovies = async (term) => {
    setLoading(false);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=4715258e&s=${term}`
    );
    setMovies(data.Search);
    setLoading(true);

    // console.log(movies);
  };

  // Track the Movie Search Term
  const handleMovieSearch = (movieTerm) => {
    setSearchMovieTerm(movieTerm);
  };

  // Search Movies by clicking and "Enter" key
  const searchMovie = () => {
    fetchMovies(searchMovieTerm);
  };

  // Reset Filter
  const resetFilterMovie = () => {
    setMovies([]);
    setSearchMovieTerm("");
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchMovie={searchMovie}
              handleMovieSearch={handleMovieSearch}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              searchMovie={searchMovie}
              handleMovieSearch={handleMovieSearch}
              searchMovieTerm={searchMovieTerm}
              movies={movies}
              loading={loading}
              resetFilterMovie={resetFilterMovie}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
