import React, { useContext } from "react";
import "./CardItemButton.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegFileArchive } from "react-icons/fa";
import PropTypes from "prop-types";
import { archiveNote, deleteNote, unarchiveNote } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../../../contexts/LocaleContext";
import { toast } from "react-toastify";

const CardItemButton = ({ id, archived }) => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const onDeleteHandler = async (e) => {
    e.preventDefault();
    const { error } = await deleteNote(id);
    if (!error) {
      toast.success("Berhasil hapus catatan", {
        theme: "colored",
        icon: "🚀",
      });
      navigate("/");
    }
  };

  const onArchive = async (e) => {
    e.preventDefault();
    if (archived === false) {
      await archiveNote(id);
      toast.info("Catatan berhasil diarsipkan", {
        theme: "colored",
      });
      navigate("/");
    } else {
      await unarchiveNote(id);
      toast.info("Catatan batal diarsipkan", {
        theme: "colored",
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="list-button-card-item">
        <button
          className="delete-button"
          type="submit"
          onClick={onDeleteHandler}
        >
          <i>
            <AiOutlineDelete />{" "}
          </i>
          <p>{locale === "id" ? "Hapus" : "Delete"}</p>
        </button>
        <button className="archive-button" type="submit" onClick={onArchive}>
          <i>
            <FaRegFileArchive />{" "}
          </i>
          {archived ? (
            <p>{locale === "id" ? "Batal archive" : "Unarchive"}</p>
          ) : (
            <p>{locale === "id" ? "Arsip" : "Archive"}</p>
          )}
        </button>
      </div>
    </>
  );
};

CardItemButton.propTypes = {
  id: PropTypes.string,
  archived: PropTypes.bool,
};

export default CardItemButton;
