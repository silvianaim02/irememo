import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import PropTypes from "prop-types";
import { addNote, getActiveNotes } from "../../utils/api";
import LocaleContext from "../../contexts/LocaleContext";
import { addContent } from "../../utils/content";
import ThemeContext from "../../contexts/ThemeContext";

const Modal = ({ visibleModal, onModalHandler, setActiveNotes }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [requiredErr, setRequiredErr] = useState(false);
  const charLimit = 50;
  const currentChar = charLimit - title.length;
  const navigate = useNavigate();

  const resetInputState = () => {
    setTitle("");
    setBody("");
    setRequiredErr(false);
    onModalHandler();
  };

  const onAddNotes = async (e) => {
    e.preventDefault();
    if (body.length < 1) {
      setRequiredErr(true);
    } else {
      await addNote({ title, body });
      if (setActiveNotes) {
        const { data } = await getActiveNotes();
        setActiveNotes(data);
      }
      resetInputState();
      navigate("/");
    }
  };

  if (!visibleModal) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <form
          onSubmit={onAddNotes}
          className={
            theme === "dark"
              ? "modal-content mid-dark-theme"
              : "modal-content light-theme"
          }
        >
          <div className="modal-body">
            <h4 className="modal-title">{addContent[locale].header}</h4>
            <div className="remaining-text">
              {currentChar === 0 ? (
                <p className="red-text">
                  {addContent[locale].remainingText} : {currentChar}
                </p>
              ) : (
                <p>
                  {addContent[locale].remainingText} : {currentChar}
                </p>
              )}
            </div>
            <input
              type="text"
              placeholder={addContent[locale].titlePlaceholder}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value.slice(0, charLimit));
              }}
            />
            <textarea
              name="content"
              cols="30"
              rows="10"
              placeholder={addContent[locale].bodyPlaceholder}
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                if (body.length >= 1) {
                  setRequiredErr(false);
                }
              }}
            ></textarea>
            {requiredErr ? (
              <p className="red-text">{addContent[locale].redText}</p>
            ) : null}
          </div>
          <div className={theme === "dark" ? "modal-footer low-dark-theme" : "modal-footer blue-bg-theme"}>
            <button onClick={resetInputState} className="button-cancel">
              {locale === "id" ? "Batal" : "Cancel"}
            </button>
            <button type="submit" className="button-create">
              {locale === "id" ? "Buat catatan" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Modal.propTypes = {
  setActiveNotes: PropTypes.func,
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default Modal;
