import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import NotFound from "./NotFound";
import { getNote } from "../utils/api";
import { useState } from "react";

const DetailPage = () => {
  let { noteId } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailNote, setDetailNote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getNote(noteId);
      setDetailNote(data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };
    fetchData();
  }, [noteId]);

  if (detailNote.length === 0) {
    return null;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : detailNote === null ? (
        <NotFound />
      ) : (
        <Detail detailNote={detailNote} />
      )}
    </>
  );
};

export default DetailPage;
