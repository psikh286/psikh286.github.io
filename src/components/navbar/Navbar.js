import "./navbar.css";
import React from "react";
import { Link } from 'react-scroll';



const Navbar = () => {
  let duration = 200;
  let smoothType = 'easeOutQuad';
  
  return (
      <nav className="navigation-bar">
        <ul className="navigation">
          <li className="navigation__item">
            <Link
                activeClass="navigation__item--active"
                to="header"
                spy={true}
                smooth={smoothType}
                duration={duration}
            >
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
                activeClass="navigation__item--active"
                to="about"
                spy={true}
                smooth={smoothType}
                duration={duration}
            >
              About
            </Link>
          </li>
          <li className="navigation__item">
            <Link
                activeClass="navigation__item--active"
                to="portfolio"
                spy={true}
                smooth={smoothType}
                duration={duration}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
