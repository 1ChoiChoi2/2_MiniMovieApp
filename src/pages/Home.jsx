import React, { useState, useEffect } from "react";
import UndrawMovie from "../assets/movieUndraw.jpg";
import "../styles/Home.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ searchMovie, handleMovieSearch, loading, movies, setMovies }) => {
  const navigate = useNavigate();
  const location = useLocation()

  const handleSearch = async () => {
    await searchMovie();
    setTimeout(() => {
      navigate("/movies");
    }, 1000);
  };

  //
  useEffect(() => {
    if (location.pathname === '/') {
      setMovies([])
    }
  }, [location, setMovies])

  return (
    <section id="home">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="purple">
              Vietnam's most awarded online movies watching platform
            </h1>
            <h2>
              Find your favorite movie with <span className="purple">Choi</span>
            </h2>
            <div className="header__movie--search">
              <input
                onChange={(e) => handleMovieSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                type="text"
                placeholder="Search by Movie's Title..."
              />
              <button
                onClick={searchMovie}
                className="header__movie--search__icon"
              >
                {!movies ? (
                  <FontAwesomeIcon
                    className="header__spinner"
                    icon="fa-spinner"
                  />
                ) : movies.length === 0 ? (
                  <FontAwesomeIcon icon="fa-magnifying-glass" />
                ) : (
                  <FontAwesomeIcon
                    className="header__spinner"
                    icon="fa-spinner"
                  />
                )}
              </button>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawMovie} alt="movie watching" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Home;
