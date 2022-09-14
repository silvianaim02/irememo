import React from "react";
import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

const SearchBar = ({ setSearchField, onSearch, onTyping, setOnTyping }) => {
  const onChange = (e) => {
    setOnTyping(e.target.value);
    onSearch(e.target.value);
    setSearchField(e.target.value);
  };

  const resetSearchState = (e) => {
    e.preventDefault();
    setOnTyping("");
    onSearch("");
    setSearchField("");
  };

  return (
    <>
      <div className="search-bar">
        <input
          onChange={onChange}
          className="input-bar"
          value={onTyping}
          type="text"
          placeholder="Search..."
        />
        <div className="search-icon">
          <i>
            <BiSearchAlt2 />
          </i>
        </div>
        {onTyping === "" ? null : (
          <div onClick={resetSearchState} className="reset-button">
            <IoIosCloseCircle />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
