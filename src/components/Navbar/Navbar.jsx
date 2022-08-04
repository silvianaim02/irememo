import React from "react";
import "./Navbar.css"
import logo from  "../../images/logo.png"
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <SearchBar />
      </nav>
    </>
  );
};

export default Navbar;
