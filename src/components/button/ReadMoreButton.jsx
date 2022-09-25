import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
import "./ReadMoreButton.css";

const ReadMoreButton = () => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <button className={theme === "dark" ? "read-more-button low-dark-theme" : "read-more-button blue-bg-theme light-text"}>
        <p>{locale === "id" ? "Lihat selengkapnya" : "Read more"}</p>
      </button>
    </>
  );
};

export default ReadMoreButton;
