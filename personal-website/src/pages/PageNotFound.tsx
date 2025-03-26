import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bison from "../assets/images/bison.jpg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <section className="pageNotFound__intro">
        <div className="pageNotFound__text">
          <h1>404 Not Found</h1>
          <p>
            Hmm, looks like you’ve wandered into uncharted territory. Don’t
            worry though, my trusty horse "Bison" will guide you back to safety!
          </p>
          <FaExclamationTriangle className="pageNotFound__warning" />
          <Link to="/" className="pageNotFound__back-button">
            Back with Bison
          </Link>
        </div>
        <section className="pageNotFound__image">
          <img src={bison} alt="Bison in 404" />
          <p>
            Nationality: Poland
            <br />
            Species: Horse
            <br />
            Favorite Food: Grass
          </p>
        </section>
      </section>
    </div>
  );
};

export default PageNotFound;
