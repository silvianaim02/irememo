import React, { useState } from "react";
import "./MainContent.css";
import CardList from "../CardList/CardList";
import NewNoteButton from "../button/NewNoteButton";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

const MainContent = ({
  titleTop,
  filteredActive,
  activeNotes,
  filteredArchive,
  archiveNotes,
  setSearchField,
  onSearch,
  onArchive,
  visibleModal,
  onModalHandler,
}) => {
  const [onTyping, setOnTyping] = useState("");
  return (
    <>
      <div className="main-content">
        <section className="top-main-content">
          <NewNoteButton
            visibleModal={visibleModal}
            onModalHandler={onModalHandler}
          />
          <SearchBar
            onSearch={onSearch}
            setSearchField={setSearchField}
            onTyping={onTyping}
            setOnTyping={setOnTyping}
          />
        </section>
        <section className="active-section">
          <h2>{titleTop}</h2>
          <CardList
            notes={
              filteredActive || activeNotes || filteredArchive || archiveNotes
            }
            onArchive={onArchive}
          />
        </section>
      </div>
    </>
  );
};

MainContent.propTypes = {
  titleTop: PropTypes.string.isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  filteredActive: PropTypes.arrayOf(PropTypes.object),
  activeNotes: PropTypes.arrayOf(PropTypes.object),
  filteredArchive: PropTypes.arrayOf(PropTypes.object),
  archiveNotes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default MainContent;
