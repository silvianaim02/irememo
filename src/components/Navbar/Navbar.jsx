import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ setSearchField, logout, name, authedUser }) => {
  const navigate = useNavigate();
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleNavigateHome = (e) => {
    e.preventDefault();
    setSearchField("");
    navigate("/");
  };

  const handleNavigateArchive = (e) => {
    e.preventDefault();
    setSearchField("");
    navigate("/archive");
  };

  let defaultStyle = {
    textDecoration: "none",
    cursor: "pointer",
  };

  let activeStyle = {
    textDecoration: "none",
    cursor: "pointer",
    borderBottom: "solid 3px #75c3ff",
  };

  return (
    <>
      <nav className={theme === "dark" ? "mid-dark-theme" : "light-theme"}>
        <div className="logo-wrapper">
          <button onClick={handleNavigateHome} className="logo">
            <img src={logo} alt="logo" />
          </button>
          <div className="toggle-wrapper">
            <button
              onClick={toggleTheme}
              className={theme === "dark" ? "light-text" : "dark-text"}
            >
              <span>{theme === "light" ? <FaMoon /> : <FaSun />}</span>
            </button>
            <button
              onClick={toggleLocale}
              className={
                theme === "dark"
                  ? "light-text bold-text"
                  : "dark-text bold-text"
              }
            >
              <span>{locale === "id" ? "EN" : "ID"}</span>
            </button>
          </div>
        </div>

        {authedUser !== null ? (
          <div className="nav-list">
            <ul className="nav-items">
              <button className="light-text" onClick={handleNavigateHome}>
                <NavLink
                  to="/"
                  className="nav-item"
                  style={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                  }
                >
                  <span
                    className={theme === "dark" ? "light-text" : "dark-text"}
                  >
                    {locale === "id" ? "Beranda" : "Home"}
                  </span>
                </NavLink>
              </button>
              <button onClick={handleNavigateArchive}>
                <NavLink
                  className="nav-item"
                  to="archive"
                  style={({ isActive }) =>
                    isActive ? activeStyle : defaultStyle
                  }
                >
                  <span
                    className={theme === "dark" ? "light-text" : "dark-text"}
                  >
                    {locale === "id" ? "Arsip" : "Archive"}
                  </span>
                </NavLink>
              </button>
            </ul>
            <div className="logout-section">
              <p className="username">{name}</p>
              <button onClick={logout}>
                <span className={theme === "dark" ? "light-text" : "dark-text"}>
                  <FiLogOut />
                </span>
              </button>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  setSearchField: PropTypes.func.isRequired,
  logout: PropTypes.func,
  name: PropTypes.string,
  authedUser: PropTypes.object,
};

export default Navbar;
