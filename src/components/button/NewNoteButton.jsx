import React from "react";
import "./NewNoteButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";

const NewNoteButton = ({ visibleModal, onModalHandler, addNotes }) => {
  return (
    <>
      <button onClick={onModalHandler} className="add-new-button">
        <i>
          <AiOutlinePlusCircle />
        </i>
        <p>Add New Notes</p>
      </button>
      <Modal
        visibleModal={visibleModal}
        onModalHandler={onModalHandler}
        addNotes={addNotes}
      />
    </>
  );
};

export default NewNoteButton;
