import { Link } from "react-router-dom";
import bisonImg from "../assets/images/bison.svg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <section className="pageNotFound__intro">
        <h1>⚠️ 404 Not Found</h1>
        <p>
          Hmm, looks like you’ve wandered into uncharted territory. Don’t worry
          though, my trusty horse will guide you back to safety!
        </p>
        <img src={bisonImg} alt="Bison in 404" />

        <Link to="/" className="pageNotFound__back-button">
          Back with Bison
        </Link>
      </section>
    </div>
  );
};

export default PageNotFound;
