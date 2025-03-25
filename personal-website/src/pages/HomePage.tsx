import "../styles/home.css";
import { useState } from "react";
import SkillPieChart, {
  SkillItem,
  skillsData,
} from "../components/Home/PieChart";
import LineBreak from "../components/LineBreak";
import { Tooltip } from "react-tooltip";
import WorldMap from "../components/Home/WorldMap";

const HomePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [content, setContent] = useState("");
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
                  <div className="home__skill__description">
                    {selectedSkill.context}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        <LineBreak />

        <section className="home__worldMap">
          <div className="home__worldMap__intro">
            <div className="home__worldMap__intro__text">
              <h1>Journey</h1>
              <p>
                I’ve lived across the U.S. in cities like New York City, Troy
                (NY), Los Angeles (CA), and Provo (UT), and have also spent
                several months to half a year living in other parts of the
                world.
              </p>
            </div>
            <div className="home__worldMap__legend">
              <div>
                <span className="legend__box lived" />
                <span> Lived</span>
              </div>
              <div>
                <span className="legend__box travelled" />
                <span> Travelled</span>
              </div>
            </div>
          </div>

          <div>
            <WorldMap setTooltipContent={setContent} />
            <Tooltip id="map-tooltip" content={content} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
