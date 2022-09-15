import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";

const Navbar = ({ setSearchField, onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [onTyping, setOnTyping] = useState("");

  const handleNavigateHome = (e) => {
    e.preventDefault();
    setSearchField("");
    setOnTyping("");
    navigate("/");
  };

  const handleNavigateArchive = (e) => {
    e.preventDefault();
    setSearchField("");
    setOnTyping("");
    navigate("/archive");
  };

  let defaultStyle = {
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#75c3ff",
  };

  let activeStyle = {
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    borderBottom: "solid 3px #e9e125",
  };

  return (
    <>
      <nav>
        <div className="nav-list">
          <button onClick={handleNavigateHome} className="logo">
            <img src={logo} alt="logo" />
          </button>
          <ul className="nav-items">
            <button
              onClick={handleNavigateHome}
              style={{ backgroundColor: "#75c3ff" }}
            >
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Home
              </NavLink>
            </button>
            <button
              onClick={handleNavigateArchive}
              style={{ backgroundColor: "#75c3ff" }}
            >
              <NavLink
                to="archive"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Archive
              </NavLink>
            </button>
          </ul>
        </div>
        {location === "/" && (
          <SearchBar
            onSearch={onSearch}
            setSearchField={setSearchField}
            onTyping={onTyping}
            setOnTyping={setOnTyping}
          />
        )}
        {location === "/archive" && (
          <SearchBar
            onSearch={onSearch}
            setSearchField={setSearchField}
            onTyping={onTyping}
            setOnTyping={setOnTyping}
          />
        )}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
