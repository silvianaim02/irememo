import React from "react";
import "./CardList.css";
import CardItem from "../card/cardItem/CardItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import LocaleContext from "../../contexts/LocaleContext";

const CardList = ({ notes }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  if (notes.length === 0) {
    return (
      <div className="card-list">
        <div className="empty-notes">
          <h1 className={theme === "dark" ? "light-text" : "dark-blue-text"}>
            {locale === "id" ? "Catatan Kosong :(" : "Empty Notes :("}
          </h1>
        </div>
      </div>
    );
  }

  return (
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
  );
};

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
