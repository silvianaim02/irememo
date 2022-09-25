import React, { useContext } from "react";
import { enFormattedDate, idFormattedDate } from "../../utils";
import CardItemButton from "../card/cardItem/CardItemButton";
import "./Detail.css";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

const Detail = ({ detailNote}) => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <div className="content-wrapper">
        <div className="delete-archive-button">
          <CardItemButton
            id={detailNote.id}
            archived={detailNote.archived}
          />
        </div>
        <div className="detail-text-wrapper">
          <h1 className="line-gap">{detailNote.title}</h1>
          <p className="line-gap dates-text">
            {locale === "id"
              ? idFormattedDate(detailNote.createdAt)
              : enFormattedDate(detailNote.createdAt)}
          </p>
          <p className="line-gap">{detailNote.body}</p>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {
  detailNote: PropTypes.object.isRequired,
};

export default Detail;
