import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Link className="movie" to={`/movies/${movie.imdbID}`}>
      <figure className="movie__figure">
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="movie__details">
        <h3 className="purple">{movie.Title}</h3>
        <div className="movie__details--year__released">
          <FontAwesomeIcon
            className="movie__detail--icon"
            icon="fa-calendar-day"
          />
          <span>{movie.Year}</span>
        </div>
        <div className="movie__details--genre">
          <FontAwesomeIcon className="movie__detail--icon" icon="fa-film" />
          <span>{movie.Type}</span>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
