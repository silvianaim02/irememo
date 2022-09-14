import React from "react";
import "./CardList.css";
import CardItem from "../card/cardItem/CardItem";
import emptyNoteImg from "../../images/empty-note.svg";
import PropTypes from 'prop-types'

const CardList = ({ notes }) => {
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

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
}

export default CardList;
