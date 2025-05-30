import { useState } from "react";
import LineBreak from "../components/shared/LineBreak";
import { Tooltip } from "react-tooltip";
import MapChart from "../components/home/JourneyWorldMap";
import { useScrollEffect } from "../hooks/useScrollEffect";
import { useTypingEffect } from "../hooks/useTypingEffect";
import portraitImg from "../assets/images/portrait.webp";
import StackChart from "../components/home/StackChart";
import { skillsData, SkillData } from "../data/home/skillData";

const HomePage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(
    skillsData[0]
  );
  const [content, setContent] = useState("");
  const [visibleIndexes, setVisibleIndexes] = useState(new Set<number>());

  const scrollRefs = useScrollEffect(
    (index) => {
      setVisibleIndexes((prev) => new Set(prev).add(index));
    },
    {
      threshold: 0.5,
      rootMargin: "-10% 0px -40% 0px",
    }
  );

  const titleText = useTypingEffect(
    "Developer  |  Swordsman  |  Photographer",
    30
  );

  return (
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
        <img src={portraitImg} className="home__about__image" alt="portrait" />
      </section>

      <LineBreak />

      <section className="home__skills">
        <div
          className="home__skills__chart"
          data-index={0}
          ref={(el) => {
            if (el) scrollRefs.current[0] = el;
          }}
        >
          <h1>Skills</h1>
          <StackChart
            onSelect={(data) => setSelectedSkill(data)}
            items={skillsData}
            animate={visibleIndexes.has(0)}
          />
        </div>

        <section className="home__skills__text">
          {selectedSkill && (
            <>
              <h2>{selectedSkill.label}</h2>
              {selectedSkill.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              {selectedSkill.list && (
                <ul>
                  {selectedSkill.list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
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
            I’ve spent meaningful time in both the U.S. and China, each offering
            its own rhythm and way of life. From cities like New York, Los
            Angeles, Troy, and Provo to places abroad, every move shaped how I
            see and live. Each place left something with me — a lifestyle, a
            perspective, a different way to pursue harmony. But meeting people
            along the way has always been the best part.
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
  );
};

export default HomePage;
