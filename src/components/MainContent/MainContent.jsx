import React from "react";
import "./MainContent.css";
import CardList from "../CardList/CardList";
import NewNoteButton from "../button/NewNoteButton";

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

export default MainContent;
