import React, { useContext } from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
import ReadMoreButton from "../../button/ReadMoreButton";
import { enFormattedDate, idFormattedDate } from "../../../utils";
import PropTypes from "prop-types";
import LocaleContext from "../../../contexts/LocaleContext";
import ThemeContext from "../../../contexts/ThemeContext";

const CardItem = ({ id, title, body, createdAt }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`card-item-wrapper ${
          theme === "dark" ? "mid-dark-theme" : "light-theme"
        }`}
      >
        <div className="card-item-header">
          <p
            className={
              theme === "dark"
                ? "low-dark-text dates-item"
                : "soft-blue-text dates-item"
            }
          >
            {locale === "id"
              ? idFormattedDate(createdAt)
              : enFormattedDate(createdAt)}
          </p>
          <Link to={`/notes/${id}`} className="dec-none">
            <h4 className={theme === "dark" ? "low-dark-text title-item" : "soft-blue-text title-item"}>
              {title}
            </h4>
          </Link>
        </div>
        <div className={theme === "dark" ? "light-text card-item-body" : "dark-text card-item-body"}>
          <p>{body}</p>
        </div>
        <Link to={`/notes/${id}`}>
          <ReadMoreButton />
        </Link>
      </div>
    </>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default CardItem;
