import { useEffect, useState, useRef } from "react";
import "../styles/home.css";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust this value to control when the animation triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
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

      <section
        ref={sectionRef}
        className={`home__my_skill ${isVisible ? "animate" : ""}`}
      >
        <div className="home__my_skill__text">
          <h1>My Skills</h1>
        </div>

        <img
          src="/images/photography/DSCF9770.jpg"
          className="home__my_skill__image"
          alt="Home Intro"
        />
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
