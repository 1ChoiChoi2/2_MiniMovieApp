import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  const [searchMovieTerm, setSearchMovieTerm] = useState("");

  // Fetch Movie based on search
  const fetchMovies = async (term) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=4715258e&s=${term}`
    );
    const moviesData = data.Search;
    
    console.log(moviesData || "Not found any movies");
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
      </Routes>
    </div>
  );
}

export default App;
