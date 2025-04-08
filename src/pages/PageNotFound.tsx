import { useNavigate } from "react-router-dom";
import bisonImg from "../assets/icons/bison.svg";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) navigate(-1);
    else navigate("/");
  };

  return (
    <div className="pageNotFound">
      <h1>⚠️ 404 - Page Not Found</h1>
      <p>
        Looks like you’ve wandered off the trail. No worries—my trusty bison
        will guide you home.
      </p>
      <img src={bisonImg} alt="Friendly Bison" />

      <button className="pageNotFound__back" onClick={handleBack}>
        ← Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
