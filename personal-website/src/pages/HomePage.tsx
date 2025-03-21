import "../styles/home.css";
import { useEffect, useState, useRef } from "react";
import SkillPieChart from "../components/Home/PieChart";
import JourneyTimeline from "../components/Home/Timeline";
import LineBreak from "../components/LineBreak";

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
      <div className="home-container">
        <section className="home__intro">
          <div className="home__intro__text">
            <h1>About</h1>
            <h2>
              Developer <span className="divider">|</span> Swordsman{" "}
              <span className="divider">|</span> Photographer
            </h2>{" "}
            <p>
              I'm on a path toward harmony between mind, body, and observation.
              Here you’ll find coding projects, reflections shaped by Kendo, and
              photography that captures how I see the world. Based in the United
              States, often between lines of code and a Dojo floor.
            </p>
          </div>
          <img
            src="/images/photography/DSCF7886.jpg"
            className="home__intro__image"
            alt="portrait"
          />
        </section>

        <LineBreak />

        <section
          ref={sectionRef}
          className={`home__skill ${isVisible ? "animate" : ""}`}
        >
          <div className="home__skill__chart">
            <SkillPieChart />
          </div>

          <div className="home__skill__text">
            <h1>Skills</h1>
          </div>
        </section>

        <LineBreak />
        <section className="home__journey">
          <JourneyTimeline />
        </section>

        <LineBreak />
        <section className="home__worldMap">{/* <WorldMap /> */}</section>
      </div>
    </>
  );
};

export default HomePage;
