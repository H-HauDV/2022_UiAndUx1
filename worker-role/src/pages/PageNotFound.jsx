import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/pagenotfound.scss";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <>
      <div className="page-not-found">
        <div className="upper">
          <div className="text-404">404</div>
        </div>
        <div className="down">
          <div className="description">Page Not Found</div>
          <div  className="link-back">
            <div  className="link-back-text">{"Back to "}</div>
            <Link className="link-back-link" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
