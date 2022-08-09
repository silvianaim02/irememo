import React from "react";
import CardItemButton from "./CardItemButton";
import "./CardItem.css";

const CardItem = (props) => {
  const { id, title, body, createdAt, archived, onDelete, onArchive } = props;

  return (
    <>
      <div className="card-item-wrapper">
        <div className="card-item-header">
          <p className="dates-item">
            {new Date(createdAt).toLocaleString("id-ID")}
          </p>
          <h4 className="title-item">{title}</h4>
        </div>
        <div className="card-item-body">
          <p>{body}</p>
        </div>
        <CardItemButton
          id={id}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={archived}
        />
      </div>
    </>
  );
};

export default CardItem;
