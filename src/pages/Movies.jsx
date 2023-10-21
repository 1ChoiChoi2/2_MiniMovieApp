import React from "react";
import Movie from "./Movie";
import UndrawNotFound from "../assets/notFoundUndraw.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Movies.css";

const Movies = ({
  searchMovie,
  handleMovieSearch,
  searchMovieTerm,
  movies,
}) => {
  // Uppercase first letter of each word
  const uppercaseFirstLetter = (str) => {
    if (str) {
      let result = str[0].toUpperCase();
      for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
          result += str[i].toUpperCase();
        } else {
          result += str[i];
        }
      }
      return result;
    }
  };

  // console.log(movies)

  return (
    <section id="movies">
      <div className="container">
        <div className="row">
          <div className="movies__container">
            <h2>Browse our movies</h2>
            <div className="movies__movie--search">
              <input
                onChange={(e) => handleMovieSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchMovie()}
                type="text"
                placeholder="Search by Movie's Title..."
              />
              <button
                onClick={searchMovie}
                className="movies__movie--search__icon"
              >
                <FontAwesomeIcon icon="fa-magnifying-glass" />
              </button>
            </div>
            <div className="movies__search--options">
              <span>
                Search Result for
                <span className="purple">
                  "{uppercaseFirstLetter(searchMovieTerm)}"
                </span>
              </span>
              <div className="movies__search--dual__range">
                <h5>
                  Year Production: <span className="purple">2000 to 2023</span>
                </h5>
                <input
                  type="range"
                  className="movies__search--range-1"
                  defaultValue={0}
                />
                <input
                  type="range"
                  className="movies__search--range-2"
                  defaultValue={100}
                />
              </div>
            </div>
          </div>
          {!movies ? (
            <div className="movie__not-found--container">
              <figure className="movie__not-found--img">
                <img src={UndrawNotFound} alt="" />
              </figure>
              <h4>Could not find any matches related to your search</h4>
              <p>Please change the filter or reset it below</p>
              <button>Reset Filter</button>
            </div>
          ) : movies.length === 0 ? (
            <></>
          ) : (
            <div className="movies__list">
              {movies &&
                movies.map((movie) => (
                  <Movie key={movie.imdbID} movie={movie} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
