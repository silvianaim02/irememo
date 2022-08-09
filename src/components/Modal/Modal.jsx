import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ visibleModal, onModalHandler, addNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const charLimit = 50;
  const currentChar = charLimit - title.length;

  const resetInputState = () => {
    setTitle("");
    setBody("");
    onModalHandler();
  };

  const onNoteSubmitHandler = (e) => {
    e.preventDefault();
    addNotes({ title, body });
    resetInputState();
  };

  if (!visibleModal) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <form onSubmit={onNoteSubmitHandler} className="modal-content">
          <div className="modal-body">
            <h4 className="modal-title">Create a Note</h4>
            <div className="remaining-text">
              {currentChar === 0 ? (
                <p className="limit-text">
                  Remaining character : {currentChar}
                </p>
              ) : (
                <p>Remaining character : {currentChar}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value.slice(0, charLimit));
              }}
            />
            <textarea
              name="content"
              cols="30"
              rows="10"
              required
              placeholder="Write your note in here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button onClick={resetInputState} className="button-cancel">
              Cancel
            </button>
            <button
              type="submit"
              className="button-create"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
