import React, { useState } from "react";
import "./MainContent.css";
import CardList from "../CardList/CardList";
import NewNoteButton from "../button/NewNoteButton";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const MainContent = ({
  titleTop,
  loading,
  initializing,
  filteredActive,
  activeNotes,
  setActiveNotes,
  filteredArchive,
  archiveNotes,
  setSearchField,
  onSearch,
  visibleModal,
  onModalHandler,
}) => {
  const [onTyping, setOnTyping] = useState("");

  return (
    <>
      <div className="main-content">
        <h2 className="light-text">{titleTop}</h2>

        <div className="flexbox">
          <div className="leftside">
            <NewNoteButton
              visibleModal={visibleModal}
              onModalHandler={onModalHandler}
              setActiveNotes={setActiveNotes}
            />
          </div>
          <div className="rightside">
            <SearchBar
              onSearch={onSearch}
              setSearchField={setSearchField}
              onTyping={onTyping}
              setOnTyping={setOnTyping}
            />
          </div>
        </div>
        <section className="active-section">
          {initializing ? null : loading ? (
            <LoadingSpinner />
          ) : (
            <CardList
              notes={
                filteredActive || activeNotes || filteredArchive || archiveNotes
              }
            />
          )}
        </section>
      </div>
    </>
  );
};

MainContent.propTypes = {
  titleTop: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  initializing: PropTypes.bool,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  filteredActive: PropTypes.arrayOf(PropTypes.object),
  activeNotes: PropTypes.arrayOf(PropTypes.object),
  setActiveNotes: PropTypes.func,
  filteredArchive: PropTypes.arrayOf(PropTypes.object),
  archiveNotes: PropTypes.arrayOf(PropTypes.object),
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default MainContent;
