import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import PropTypes from "prop-types";
import { addNote } from "../../utils/api";

const Modal = ({ visibleModal, onModalHandler }) => {
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
      addNote({ title, body });
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
        <form onSubmit={onAddNotes} className="modal-content">
          <div className="modal-body">
            <h4 className="modal-title">Create a Note</h4>
            <div className="remaining-text">
              {currentChar === 0 ? (
                <p className="red-text">Remaining character : {currentChar}</p>
              ) : (
                <p>Remaining character : {currentChar}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value.slice(0, charLimit));
              }}
            />
            <textarea
              name="content"
              cols="30"
              rows="10"
              placeholder="Write your note in here..."
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                if (body.length >= 1) {
                  setRequiredErr(false);
                }
              }}
            ></textarea>
            {requiredErr ? (
              <p className="red-text">note cannot be empty</p>
            ) : null}
          </div>
          <div className="modal-footer">
            <button onClick={resetInputState} className="button-cancel">
              Cancel
            </button>
            <button type="submit" className="button-create">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

Modal.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default Modal;
