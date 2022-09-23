import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import LocaleContext from "../../contexts/LocaleContext";

const Navbar = ({ setSearchField, logout, name, authedUser }) => {
  const navigate = useNavigate();
  const { locale, toggleLocale } = useContext(LocaleContext);

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
        <div>
          <button onClick={handleNavigateHome} className="logo">
            <img src={logo} alt="logo" />
          </button>
          <button onClick={toggleLocale}>
            {locale === "id" ? "English" : "Indonesia"}
          </button>
        </div>
        <div className="nav-list">
          {authedUser !== null ? (
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
                  {locale === "id" ? "Beranda" : "Home"}
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
                  {locale === "id" ? "Arsip" : "Archive"}
                </NavLink>
              </button>
              <button onClick={logout}>
                {name}
                <FiLogOut />
              </button>
            </ul>
          ) : null}
        </div>
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
