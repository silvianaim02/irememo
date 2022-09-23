import React, { useContext } from "react";
import "./NewNoteButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";

const NewNoteButton = ({ visibleModal, onModalHandler }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <button onClick={onModalHandler} className="add-new-button">
        <i>
          <AiOutlinePlusCircle />
        </i>
        <p>{locale === "id" ? "Tambah catatan" : "Add New Notes"}</p>
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
