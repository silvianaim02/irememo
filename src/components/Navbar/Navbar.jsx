import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";

const Navbar = ({ setSearchField, onSearch, logout, name }) => {
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
        <button onClick={handleNavigateHome} className="logo">
          <img src={logo} alt="logo" />
        </button>
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
        <div className="nav-list">
          <ul className="nav-items">
            <button
              onClick={handleNavigateHome}
              style={{ backgroundColor: "#75c3ff" }}
            >
              <NavLink
                to="/"
                className="nav-item"
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
                className="nav-item"
                to="archive"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Archive
              </NavLink>
            </button>
            <button onClick={logout}>
              {name}
              <FiLogOut />
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navbar;
