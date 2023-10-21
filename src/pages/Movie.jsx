import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <figure className="movie__figure">
        <img src={movie.Poster} />
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
    </div>
  );
};

export default Movie;
