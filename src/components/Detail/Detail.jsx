import React from "react";
import { showFormattedDate } from "../../utils";
import CardItemButton from "../card/cardItem/CardItemButton";
import "./Detail.css";

const Detail = ({ detailNote, onDelete, onArchive }) => {
  return (
    <>
      <div className="content-wrapper">
        <div className="delete-archive-button">
          <CardItemButton
            id={detailNote.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archived={detailNote.archived}
          />
        </div>
        <div className="detail-text-wrapper">
          <h1 className="line-gap">{detailNote.title}</h1>
          <p className="line-gap dates-text">
            {showFormattedDate(detailNote.createdAt)}
          </p>
          <p className="line-gap">{detailNote.body}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
