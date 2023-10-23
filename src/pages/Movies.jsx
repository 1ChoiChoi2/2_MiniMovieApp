import React, { useState } from "react";
import Movie from "./Movie";
import UndrawNotFound from "../assets/notFoundUndraw.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Movies.css";

const Movies = ({
  searchMovie,
  handleMovieSearch,
  searchMovieTerm,
  movies,
  loading,
  resetFilterMovie,
}) => {
  const [newstartYear, setNewStartYear] = useState(1800);
  const startYear = 1800;
  const endYear = 2023;

  // Change start Year
  const startYearPointValue = (singlePointValue) => {
    const singleYearPointValue = Math.floor((endYear - startYear) / 100);
    const updateStartYear = startYear + singleYearPointValue * singlePointValue;
    setNewStartYear(updateStartYear);
  };

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
                value={searchMovieTerm}
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
                  Year Production:{" "}
                  <span className="purple">{newstartYear} to 2023</span>
                </h5>
                <input
                  type="range"
                  className="movies__search--range"
                  defaultValue={0}
                  onChange={(e) => startYearPointValue(e.target.value)}
                />
                <div className="movies__search--start-end__range">
                  <span className="starting__range">{newstartYear}</span>
                  <span className="ending__range">{endYear}</span>
                </div>
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
              <button onClick={resetFilterMovie}>Reset Filter</button>
            </div>
          ) : movies.length === 0 ? (
            <></>
          ) : (
            <div className="movies__list">
              {loading === false
                ? new Array(9).fill(0).map((_, i) => (
                    <div className="movie" key={i}>
                      <figure className="movie__figure--skeleton"></figure>
                      <div className="movie__detail--skeleton">
                        <p className="movie__detail--title__skeleton"></p>
                        <p className="movie__detail--year-released__skeleton"></p>
                        <p className="movie__detail--genre__skeleton"></p>
                      </div>
                    </div>
                  ))
                : movies &&
                  movies
                    .map((movie) => {
                      const yearInt = parseInt(movie.Year, 10);
                      return {
                        ...movie,
                        Year: yearInt,
                      };
                    })
                    .filter((movie) => movie.Year >= newstartYear)
                    .map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Movies;
