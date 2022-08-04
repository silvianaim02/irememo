import React from "react";
import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input className="input-bar" type="text" placeholder="Find Notes" />
      <i>
        <BiSearchAlt2 />
      </i>
    </div>
  );
};

export default SearchBar;
