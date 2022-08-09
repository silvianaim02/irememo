import React from "react";
import "./CardList.css";
import CardItem from "../card/cardItem/CardItem";
import emptyNoteImg from "../../images/empty-note.svg";

const CardList = ({ notes, onDelete, onArchive }) => {
  return (
    <>
      <div className="card-list">
        {notes.length >= 1 ? (
          notes.map((note) => (
            <CardItem
              key={note.id}
              {...note}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))
        ) : (
          <div className="empty-notes">
            <img src={emptyNoteImg} alt="empty notes" />
          </div>
        )}
      </div>
    </>
  );
};

export default CardList;
