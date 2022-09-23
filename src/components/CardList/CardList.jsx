import React from "react";
import "./CardList.css";
import CardItem from "../card/cardItem/CardItem";
import emptyNoteImg from "../../images/empty-note.svg";
import PropTypes from "prop-types";

const CardList = ({ notes }) => {
  
  if (notes.length === 0) {
    return (
      <div className="card-list">
        <div className="empty-notes">
          <img src={emptyNoteImg} alt="empty notes" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="card-list">
        {notes.map((note) => (
          <CardItem
            key={note.id}
            {...note}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        ))}
      </div>
    </>
  );
};

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
