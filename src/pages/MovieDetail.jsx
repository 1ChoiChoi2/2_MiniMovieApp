import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  // Fetch Single Movie
  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=4715258e&i=${id}`
    );
    setMovie(data);
  };

  //
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section id="movieDetail">
      <div className="container">
        <div className="row">
          <div className="movieDetail__container">
            <Link to="/movies" className="movieDetail__back">
              <FontAwesomeIcon icon="fa-arrow-left" />
              <span className="purple">Back</span>
            </Link>
            <div className="movieDetail__movie">
              <figure className="movieDetail__movie--figure">
                <img src={movie.Poster} alt="" />
              </figure>
              <div className="movieDetail__movie--detail">
                <h3>{movie.Title}</h3>
                <div className="movieDetail__movie--information">
                  <span className="purple">Released Date: </span>
                  <p>{movie.Released}</p>
                </div>
                <div className="movieDetail__movie--information">
                  <span className="purple">Plot: </span>
                  <p>{movie.Plot}</p>
                </div>
                <div className="movieDetail__movie--information">
                  <span className="purple">Language: </span>
                  <p>{movie.Language}</p>
                </div>
                <p className="purple movie__run-time">{movie.Runtime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
