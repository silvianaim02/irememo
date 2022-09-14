import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import NotFound from "./NotFound";
import PropTypes from 'prop-types'

function getNotes(noteId, notes) {
  if (!noteId) {
    return null;
  }
  const filteredNotesById = notes.filter((note) => note.id === noteId);
  if (!filteredNotesById.length) {
    return null;
  }
  return filteredNotesById[0];
}

const DetailPage = ({ notes, onDelete, onArchive }) => {
  let { noteId } = useParams();
  const detailNote = getNotes(noteId, notes);

  return (
    <>
      <div>
        {detailNote === null ? (
          <NotFound />
        ) : (
          <Detail
            detailNote={detailNote}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        )}
      </div>
    </>
  );
};

DetailPage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default DetailPage;
