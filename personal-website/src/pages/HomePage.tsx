import LineBreak from "../components/LineBreak";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <img
          src="/images/photography/DSCF9770.jpg"
          className="home__intro__image"
          alt="Home Intro"
        />
      </section>
      <LineBreak variant="plain" />
      <div className="home__intro">
        <h1>Welcome to My Website</h1>
      </div>

      <LineBreak variant="plain" />

      <section className="contact__my__skill">
        <h1>My Skills</h1>
      </section>

      <LineBreak variant="plain" />

      <section className="contact__my__story">
        <h1>My Storys</h1>
      </section>

      <LineBreak variant="plain" />

      <section className="contact__my__places">
        <h1>Interactive world Map</h1>
      </section>
    </>
  );
};

export default HomePage;
