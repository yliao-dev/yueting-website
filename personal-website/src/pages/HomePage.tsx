import DSCF0961 from "../assets/images/DSCF0961.jpg";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <img src={DSCF0961} className="portfolio__intro__image" />
        <div className="home__intro">
          <h1>Welcome to My Website</h1>
        </div>
      </section>
      <div className="page__divider-gradient"></div>
    </>
  );
};

export default HomePage;
