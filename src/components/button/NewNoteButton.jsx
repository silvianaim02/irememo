import React from "react";
import "./NewNoteButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

const NewNoteButton = ({ visibleModal, onModalHandler }) => {
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
      />
    </>
  );
};

NewNoteButton.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default NewNoteButton;
