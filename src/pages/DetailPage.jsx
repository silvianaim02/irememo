import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
import {
  getNote,
} from "../utils/api";
import { useState } from "react";

const DetailPage = ({ onArchive }) => {
  let { noteId } = useParams();
  const [detailNote, setDetailNote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNote(noteId);
      setDetailNote(data);
    };
    fetchData();
  }, [noteId]);

  if (detailNote.length === 0) {
    return null;
  }

  return (
    <>
      {detailNote === null ? (
        <NotFound />
      ) : (
        <Detail
          detailNote={detailNote}
          onArchive={onArchive}
        />
      )}
    </>
  );
};

DetailPage.propTypes = {
  onArchive: PropTypes.func.isRequired,
};

export default DetailPage;
