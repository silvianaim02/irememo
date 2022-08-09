import React, { useState } from "react";
import CardList from "../CardList/CardList";
import "./MainContent.css";
import NewNoteButton from "../button/NewNoteButton";
import { getInitialData } from "../../utils";

const MainContent = ({ searchField }) => {
  const [notes, setNotes] = useState(getInitialData());
  const [visibleModal, setVisibleModal] = useState(false);
  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

  // Active Search
  const filteredActive = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(searchField.toLowerCase());
  });

  // Archive Search
  const filteredArchive = archiveNotes.filter((note) => {
    return note.title.toLowerCase().includes(searchField.toLowerCase());
  });

  // Modal Handler
  const onModalHandler = () => {
    setVisibleModal(!visibleModal);
  };

  // Delete Note Handler
  const onDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // Create Note Handler
  const onAddNotesHandler = ({ title, body }) => {
    const newNotes = [
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ];
    setNotes(newNotes);
  };

  // Archive Note Handler
  const onArchiveNotesHandler = (id) => {
    const newNotes = notes.map((note) => {
      if (id === note.id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <>
      <div className="main-content">
        <section className="top-main-content">
          <NewNoteButton
            addNotes={onAddNotesHandler}
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal}
            onModalHandler={onModalHandler}
          />
        </section>
        <section className="active-section">
          <h2>Active Note</h2>
          <CardList
            notes={filteredActive || activeNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveNotesHandler}
          />
        </section>
        <section className="archive-section">
          <h2>Archive Note</h2>
          <CardList
            notes={filteredArchive || archiveNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveNotesHandler}
          />
        </section>
      </div>
    </>
  );
};

export default MainContent;
