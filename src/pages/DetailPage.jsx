import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
import {
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
} from "../utils/api";
import { useState } from "react";

// function getNotes(noteId, notes) {
//   if (!noteId) {
//     return null;
//   }
//   const filteredNotesById = notes.filter((note) => note.id === noteId);
//   if (!filteredNotesById.length) {
//     return null;
//   }
//   return filteredNotesById[0];
// }

const DetailPage = ({ onArchive, setActiveNotes, setArchiveNotes }) => {
  let { noteId } = useParams();
  const [detailNote, setDetailNote] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNote(noteId);
      setDetailNote(data);
    };
    fetchData();
  }, [noteId]);

  // delet api
  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    alert("terhapus");
    const resFetchActiveNotes = await getActiveNotes();
    const resFetchArchiveNotes = await getArchivedNotes();
    setActiveNotes(resFetchActiveNotes.data);
    setArchiveNotes(resFetchArchiveNotes.data);
    navigate("/");
  };

  if (detailNote.length === 0) {
    return null;
  }
  console.log(detailNote);

  return (
    <>
      {detailNote === null ? (
        <NotFound />
      ) : (
        <Detail
          detailNote={detailNote}
          onDelete={onDeleteHandler}
          onArchive={onArchive}
        />
      )}
    </>
  );
};

DetailPage.propTypes = {
  // notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  setActiveNotes: PropTypes.func.isRequired,
  setArchiveNotes: PropTypes.func.isRequired,
};

export default DetailPage;
