import React from "react";
import "./MainContent.css";
import CardList from "../CardList/CardList";
import NewNoteButton from "../button/NewNoteButton";
import PropTypes from 'prop-types'

const MainContent = ({
  titleTop,
  filteredActive,
  activeNotes,
  filteredArchive,
  archiveNotes,
  onDelete,
  onArchive,
  visibleModal,
  addNotes,
  onModalHandler
}) => {

  return (
    <>
      <div className="main-content">
        <section className="top-main-content">
          <NewNoteButton
            addNotes={addNotes}
            visibleModal={visibleModal}
            onModalHandler={onModalHandler}
          />
        </section>
        <section className="active-section">
          <h2>{titleTop}</h2>
          <CardList
            notes={
              filteredActive || activeNotes || filteredArchive || archiveNotes
            }
            onDelete={onDelete}
            onArchive={onArchive}
          />
        </section>
      </div>
    </>
  );
};

MainContent.propTypes = {
  titleTop: PropTypes.string.isRequired,
  filteredActive: PropTypes.arrayOf(PropTypes.object),
  activeNotes: PropTypes.arrayOf(PropTypes.object),
  filteredArchive: PropTypes.arrayOf(PropTypes.object),
  archiveNotes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  addNotes: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
}

export default MainContent;
