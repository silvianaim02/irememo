import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import "./ReadMoreButton.css";

const ReadMoreButton = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <button className="read-more-button">
        <p>{locale === "id" ? "Lihat selengkapnya" : "Read more"}</p>
      </button>
    </>
  );
};

export default ReadMoreButton;
