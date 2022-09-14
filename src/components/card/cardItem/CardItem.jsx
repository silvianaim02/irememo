import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
import ReadMoreButton from "../../button/ReadMoreButton";
import { showFormattedDate } from "../../../utils";
import PropTypes from 'prop-types'

const CardItem = ({ id, title, body, createdAt }) => {

  return (
    <>
      <div className="card-item-wrapper">
        <div className="card-item-header">
          <p className="dates-item">
            {showFormattedDate(createdAt)}
          </p>
          <Link to={`/notes/${id}`} className="dec-none">
            <h4 className="title-item">{title}</h4>
          </Link>
        </div>
        <div className="card-item-body">
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
}

export default CardItem;
