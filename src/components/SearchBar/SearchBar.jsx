import React, { useContext } from "react";
import "./SearchBar.css";
import { IoIosCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";

const SearchBar = ({ setSearchField, onSearch, onTyping, setOnTyping }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

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
          className={theme === "dark" ? "low-dark-theme input-bar " : "input-bar light-theme"}
          value={onTyping}
          type="text"
          placeholder={locale === "id" ? "Cari..." : "Search..."}
        />
        {onTyping === "" ? null : (
          <div onClick={resetSearchState} className="reset-button">
            <IoIosCloseCircle />
          </div>
        )}
      </div>
    </>
  );
};

SearchBar.propTypes = {
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onTyping: PropTypes.string.isRequired,
  setOnTyping: PropTypes.func.isRequired,
};

export default SearchBar;
