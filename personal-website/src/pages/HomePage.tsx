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
      { threshold: 0 } // Adjust this value to control when the animation triggers
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
        <section className="home__intro">
          <h1>Who I am.</h1>
          <h2>Software Engineer | Kendoka | Photographer</h2>
          <h2>Based in the United States.</h2>
          <p>
            Pursuing harmony between mind, body, and observation. Here you’ll
            find my coding projects, reflections from my Kendo journey,
            photography exploring how I see the world, and insights from
            experiences that shape who I am.
          </p>

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
          <img
            src="/images/skills_graph.jpg"
            className="home__my_skill__image"
            alt="Home Intro"
          />

          <div className="home__my_skill__text">
            <h1>Balance of Skills</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
