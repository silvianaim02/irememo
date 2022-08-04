import React from "react";
import "./button.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const NewNoteButton = () => {
  return (
    <>
      <button className="add-new-button">
        <i><AiOutlinePlusCircle /></i>
        <p>Add New Notes</p>
      </button>
    </>
  );
};

export default NewNoteButton;
