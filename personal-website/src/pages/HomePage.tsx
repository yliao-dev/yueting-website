import { useState } from "react";
import SkillPieChart, {
  SkillItem,
  skillsData,
} from "../components/Home/PieChart";
import LineBreak from "../components/LineBreak";
import { Tooltip } from "react-tooltip";
import MapChart from "../components/Home/JourneyWorldMap";

const HomePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [content, setContent] = useState("");
  return (
    <>
      <div className="home">
        <section className="home__about">
          <div className="home__about__text">
            <h1>About</h1>
            <h2>
              Developer <span className="home__about__text__divider">|</span>
              Swordsman <span className="home__about__text__divider">|</span>
              Photographer
            </h2>
            <p>
              I'm on a path toward harmony between mind, body, and observation.
              Here you’ll find coding projects, reflections shaped by Kendo, and
              photography that captures how I see the world. I'm based in the
              United States, often between lines of code and a dojo floor.
            </p>
          </div>
          <img
            src="/images/gallery/DSCF7886.jpg"
            className="home__about__image"
            alt="portrait"
          />
        </section>
        <LineBreak />

        <section className="home__skills">
          <h1>Skills</h1>
          <SkillPieChart onSelect={(data) => setSelectedSkill(data)} />
          <section className="home__skills__text">
            {selectedSkill && (
              <>
                <h2>{selectedSkill.label}</h2>
                {selectedSkill.context}
              </>
            )}
          </section>
        </section>
        <LineBreak />

        <section className="home__journey">
          <section className="home__journey__intro">
            <h1>Journey</h1>
            <p>
              I’ve lived across the U.S. in cities like New York City (NY), Troy
              (NY), Los Angeles (CA), and Provo (UT), and have also spent
              several months to half a year living in other parts of the world.
            </p>
          </section>

          <section className="home__journey__legend">
            <div>
              <span className="legend__box lived" />
              <p> Lived</p>
            </div>
            <div>
              <span className="legend__box travelled" />
              <p> Travelled</p>
            </div>
          </section>

          <section className="home__journey__map">
            <MapChart setTooltipContent={setContent} />
            <Tooltip id="map-tooltip" content={content} />
          </section>
        </section>
      </div>
    </>
  );
};

export default HomePage;
