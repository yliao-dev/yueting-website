import "../styles/home.css";
import { useState } from "react";
import SkillPieChart, {
  SkillItem,
  skillsData,
} from "../components/Home/PieChart";
import JourneyTimeline from "../components/Home/Timeline";
import LineBreak from "../components/LineBreak";

const HomePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);

  return (
    <>
      <div className="home">
        <section className="home__intro">
          <div className="home__intro__text">
            <h1>About</h1>
            <h2>
              Developer <span className="home__intro__text__divider">|</span>{" "}
              Swordsman <span className="home__intro__text__divider">|</span>{" "}
              Photographer
            </h2>{" "}
            <p>
              I'm on a path toward harmony between mind, body, and observation.
              Here you’ll find coding projects, reflections shaped by Kendo, and
              photography that captures how I see the world. I'm based in the
              United States, often between lines of code and a dojo floor.
            </p>
          </div>
          <img
            src="/images/photography/DSCF7886.jpg"
            className="home__intro__image"
            alt="portrait"
          />
        </section>

        <LineBreak />

        <section className="home__skill">
          <div className="home__skill__chart">
            <h1>Skills</h1>
            <SkillPieChart onSelect={(data) => setSelectedSkill(data)} />
          </div>
          <div className="home__skill__text">
            <div className="home__skill__content">
              {selectedSkill && (
                <>
                  <h3>{selectedSkill.label}</h3>
                  <p>{selectedSkill.context}</p>
                </>
              )}
            </div>
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
