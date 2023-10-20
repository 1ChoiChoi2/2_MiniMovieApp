import React from "react";
import MovieLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={MovieLogo} alt="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="#" className="nav__link">
              Find your car
            </Link>
          </li>
          <li className="nav__list">
            <Link to="#" className="nav__link nav__link--primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
