import DSCF0961 from "../assets/images/DSCF0961.jpg";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <img src={DSCF0961} className="home__intro__image" />
      </section>
      <div className="page__divider-gradient"></div>

      <div className="home__intro">
        <h1>Welcome to My Website</h1>
      </div>
    </>
  );
};

export default HomePage;
