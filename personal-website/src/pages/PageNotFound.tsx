import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bison from "../assets/images/bison.jpg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <section className="pageNotFound__intro">
        <div className="pageNotFound__text">
          <h1>404 Not Found</h1>
          <p>This page does not exist</p>
          <FaExclamationTriangle className="pageNotFound__warning" />
          <Link to="/" className="pageNotFound__back-button">
            Go Back
          </Link>
        </div>
        <img src={bison} alt="Bison in 404" className="pageNotFound__image" />
      </section>
    </div>
  );
};

export default PageNotFound;
