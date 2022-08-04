import React from "react";
import "./CardItemButton.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegFileArchive } from "react-icons/fa";

const CardItemButton = () => {
  return (
    <>
      <div className="list-button-card-item">
        <button className="delete-button">
          <i>
            <AiOutlineDelete />{" "}
          </i>
          <p>Delete</p>
        </button>
        <button className="archieve-button">
          <i>
            <FaRegFileArchive />{" "}
          </i>
          <p>Archive</p>
        </button>
      </div>
    </>
  );
};

export default CardItemButton;
