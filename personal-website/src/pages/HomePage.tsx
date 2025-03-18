import LineBreak from "../components/LineBreak";
import "../styles/home.css";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <div className="home__intro">
          <h1>About Me</h1>
          <br />
          <h2>
            I am ... <br />
            Software Engineer <br />
            Kendoka <br />
            Someone who pursuit harmony in mind & body
          </h2>
          <br />
          <p>
            Here, I share my unique journey and path.
            <br />
            spaceholder
            <br />
            spaceholder
            <br />
            To honestly represent myself through understanding of body
            <br />
            To express who am I
          </p>
        </div>
        <img
          src="/images/photography/DSCF7886.jpg"
          className="home__intro__image"
          alt="Home Intro"
        />
      </section>

      <section className="home_my_skill">
        <div>
          <h1>My Skills</h1>
          <img
            src="/images/photography/DSCF9770.jpg"
            className="home__intro__image"
            alt="Home Intro"
          />
        </div>
      </section>

      <section className="home_my_story">
        <h1>My Storys</h1>
        <img
          src="/images/photography/DSCF9770.jpg"
          className="home__intro__image"
          alt="Home Intro"
        />
      </section>

      <section className="home_interactive_map">
        <h1>Interactive world Map</h1>
        <img
          src="/images/photography/DSCF9770.jpg"
          className="home__intro__image"
          alt="Home Intro"
        />
      </section>
    </>
  );
};

export default HomePage;
