import React from "react";
import UndrawMovie from '../assets/movieUndraw.jpg';
import '../styles/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section id="home">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="purple">Vietnam's most awarded online movies watching platform</h1>
            <h2>
              Find your favorite movie with <span className="purple">Choi</span>
            </h2>
            <div className="header__movie--search">
              <input type="text" placeholder="Search by Movie's Title..."/>
              <button className="header__movie--search__icon">
                <FontAwesomeIcon icon='fa-magnifying-glass'/>
              </button>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawMovie} alt="movie watching"/>
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Home;
