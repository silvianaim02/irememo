import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
import ReadMoreButton from "../../button/ReadMoreButton";
import { showFormattedDate } from "../../../utils";

const CardItem = (props) => {
  const { id, title, body, createdAt } = props;

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

export default CardItem;
