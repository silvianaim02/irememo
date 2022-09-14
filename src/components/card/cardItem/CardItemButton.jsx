import React from "react";
import "./CardItemButton.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegFileArchive } from "react-icons/fa";

const CardItemButton = ({ id, onDelete, onArchive, archived }) => {
  return (
    <>
      <div className="list-button-card-item">
        <button
          className="delete-button"
          type="submit"
          onClick={(e) => onDelete(id)}
        >
          <i>
            <AiOutlineDelete />{" "}
          </i>
          <p>Delete</p>
        </button>
        <button
          className="archive-button"
          type="submit"
          onClick={() => onArchive(id)}
        >
          <i>
            <FaRegFileArchive />{" "}
          </i>
          {archived ? <p>Unarchived</p> : <p>Archive</p>}
        </button>
      </div>
    </>
  );
};

export default CardItemButton;
