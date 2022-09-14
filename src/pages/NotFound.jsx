import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notFoundImg from "../images/not-found-image.svg";

const NotFound = () => {
  return (
    <>
      <div className="not-found-wrapper">
        <div className="not-found-block">
          <img src={notFoundImg} alt="not found" />
          <h1 className="title-not-found">Page Not Found</h1>
          <p>
            <Link to="/" className="go-home">
              Go Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
