import React from "react";
import { showFormattedDate } from "../../utils";
import CardItemButton from "../card/cardItem/CardItemButton";
import "./Detail.css";
import PropTypes from "prop-types";

const Detail = ({ detailNote, onArchive }) => {
  return (
    <>
      <div className="content-wrapper">
        <div className="delete-archive-button">
          <CardItemButton
            id={detailNote.id}
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

Detail.propTypes = {
  detailNote: PropTypes.object.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default Detail;
