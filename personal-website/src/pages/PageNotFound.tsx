import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="pageNotFound">
        <section className="pageNotFound__intro">
          <div className="pageNotFound__text">
            <h1>404 Not Found</h1>
            <p>This page does not exist</p>
            <FaExclamationTriangle />
            <Link to="/">Go Back</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageNotFound;
