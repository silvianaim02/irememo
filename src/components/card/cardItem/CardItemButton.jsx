import React from "react";
import "./CardItemButton.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegFileArchive } from "react-icons/fa";
import PropTypes from "prop-types";

const CardItemButton = ({ id, onDelete, onArchive, archived }) => {
  
  return (
    <>
      <div className="list-button-card-item">
        <button
          className="delete-button"
          type="submit"
          onClick={() => onDelete(id)}
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

CardItemButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default CardItemButton;
