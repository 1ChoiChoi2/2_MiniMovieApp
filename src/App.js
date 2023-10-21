import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  const [searchMovieTerm, setSearchMovieTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetch Movie based on search
  const fetchMovies = async (term) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=4715258e&s=${term}`
    );
    setMovies(data.Search)

    // console.log(movies || "Not found any movies");
  };

  // Track the Movie Search Term
  const handleMovieSearch = (movieTerm) => {
    setSearchMovieTerm(movieTerm);
  };

  // Search Movies by clicking and "Enter" key
  const searchMovie = () => {
    fetchMovies(searchMovieTerm);
  };

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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
