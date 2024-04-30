import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './index.css';

const NavBar = () => {
      const [showMenu, setShowMenu] = useState(false);

      const toggleMenu = () => {
            setShowMenu(!showMenu);
      };

      return (
            <div className="header">
                  <div className="container">
                        <NavLink to="/" className="ak_rathi text">Dr.Amit Kumar Rathi</NavLink>
                        <button className={`hamburger ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
                              <div className="bar"></div>
                              <div className="bar"></div>
                              <div className="bar"></div>
                        </button>
                        <ul className={`part2 ${showMenu ? "show" : ""}`}>
                              <li>
                                    <NavLink to="/" id="one">Home</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/courses" id="two">Courses</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/rnw" id="three">Research</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/publications" id="four">Publications</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/opportunities" id="five">Opportunities</NavLink>
                              </li>
                              <li>
                                    <NavLink to="/Maps" id="six">Maps</NavLink>
                              </li>
                        </ul>
                  </div>
            </div >
      );
}

export default NavBar;
