import { useState } from "react";
import SkillPieChart, {
  SkillItem,
  skillsData,
} from "../components/home/PieChart";
import LineBreak from "../components/shared/LineBreak";
import { Tooltip } from "react-tooltip";
import MapChart from "../components/home/JourneyWorldMap";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useTypingEffect } from "../hooks/useTypingEffect";
import portraitImg from "../assets/images/portrait.png";
const HomePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[0]);
  const [content, setContent] = useState("");
  const [visibleIndexes, setVisibleIndexes] = useState(new Set<number>());
  const scrollRefs = useScrollEffect(
    (index) => {
      setVisibleIndexes((prev) => new Set(prev).add(index));
    },
    {
      threshold: 0.5,
      rootMargin: "-20% 0px -20% 0px",
    }
  );
  const titleText = useTypingEffect(
    "Developer  |  Swordsman  |  Photographer",
    30
  );
  return (
    <>
      <div className="home">
        <section className="home__about">
          <div className="home__about__text">
            <h1>About</h1>
            <h2 className="typing-cursor">{titleText}</h2>
            <p>
              I'm on a path toward harmony between mind, body, and observation.
              Here you’ll find coding projects, reflections shaped by Kendo, and
              photography that captures how I see the world. I'm based in the
              United States, often between lines of code and a dojo floor.
            </p>
          </div>
          <img
            src={portraitImg}
            className="home__about__image"
            alt="portrait"
          />
        </section>
        <LineBreak />
        <section className="home__skills">
          <h1>Skills</h1>
          <div className="home__skills__chart">
            <SkillPieChart onSelect={(data) => setSelectedSkill(data)} />
          </div>
          <section
            className={`home__skills__text ${
              visibleIndexes.has(0) ? "animate-slide-right" : ""
            }`}
            data-index={0}
            ref={(el) => {
              if (el) scrollRefs.current[0] = el;
            }}
          >
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
          <h1>Journey</h1>
          <div
            className={`home__journey__text ${
              visibleIndexes.has(1) ? "animate-slide-left" : ""
            }`}
            data-index={1}
            ref={(el) => {
              if (el) scrollRefs.current[1] = el;
            }}
          >
            <p>
              I’ve lived across the U.S. in cities like New York City (NY), Troy
              (NY), Los Angeles (CA), and Provo (UT), and have also spent
              several months to half a year living in other parts of the world.
            </p>
          </div>
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
