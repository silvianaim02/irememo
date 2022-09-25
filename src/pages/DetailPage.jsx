import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import NotFound from "./NotFound";
import { getNote } from "../utils/api";
import { useState } from "react";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const DetailPage = () => {
  let { noteId } = useParams();
  const [loading, setLoading] = useState(false);
  const [detailNote, setDetailNote] = useState({});
  const [nothingId, setNothingId] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getNote(noteId);
      if (response.error) {
        setNothingId(true);
      } else {
        setDetailNote(response.data);
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };
    fetchData();
  }, [noteId]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : nothingId ? (
        <NotFound />
      ) : (
        <Detail detailNote={detailNote} />
      )}
    </>
  );
};

export default DetailPage;
