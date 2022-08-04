import React from "react";
import "./button.css";

const ActiveArchieveButton = () => {
  return (
    <>
      <div className="list-button-notes">
        <button className="active-notes">Active Notes</button>
        <button className="archieve-notes">Archive Notes</button>
      </div>
    </>
  );
};

export default ActiveArchieveButton;
