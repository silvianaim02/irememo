import React, { useState } from "react";
import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

const SearchBar = ({ setSearchField }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
    setSearchField(e.target.value);
  };

  const resetSearchState = (e) => {
    e.preventDefault();
    setInput("");
    setSearchField("");
  };

  return (
    <>
      <div className="search-bar">
        <input
          onChange={onChange}
          className="input-bar"
          value={input}
          type="text"
          placeholder="Search..."
        />
        <div className="search-icon">
          <i>
            <BiSearchAlt2 />
          </i>
        </div>
        {input === "" ? null : (
          <div onClick={resetSearchState} className="reset-button">
            <IoIosCloseCircle />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
