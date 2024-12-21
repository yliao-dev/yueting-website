import DSCF0961 from "../assets/images/DSCF0961.jpg";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <img src={DSCF0961} className="home__intro__image" />
      </section>
      <div className="page__divider" />

      <div className="home__intro">
        <h1>Welcome to My Website</h1>
      </div>

      <div className="page__divider" />

      <section className="contact__my__skill">
        <h1>My Skills</h1>
      </section>

      <div className="page__divider" />

      <section className="contact__my__story">
        <h1>My Storys</h1>
      </section>

      <div className="page__divider" />

      <section className="contact__my__places">
        <h1>Interactive world Map</h1>
      </section>
    </>
  );
};

export default HomePage;
