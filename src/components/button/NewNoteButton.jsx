import React, { useContext } from "react";
import "./NewNoteButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";

const NewNoteButton = ({ visibleModal, onModalHandler, setActiveNotes }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={onModalHandler}
        className={
          theme === "dark"
            ? "add-new-button light-theme dark-text"
            : "add-new-button dark-blue-bg-theme light-text"
        }
      >
        <i>
          <AiOutlinePlusCircle />
        </i>
        <p>{locale === "id" ? "Tambah catatan" : "Add New Notes"}</p>
      </button>
      <Modal
        visibleModal={visibleModal}
        onModalHandler={onModalHandler}
        setActiveNotes={setActiveNotes}
      />
    </>
  );
};

NewNoteButton.propTypes = {
  setActiveNotes: PropTypes.func,
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default NewNoteButton;
