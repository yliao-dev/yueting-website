import { useState } from "react";
import LineBreak from "../components/shared/LineBreak";
import { Tooltip } from "react-tooltip";
import MapChart from "../components/home/JourneyWorldMap";
import landingPortraitImg from "../assets/images/landing-portrait-halftone-right.webp";

const HomePage = () => {
  const [content, setContent] = useState("");

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero__text">
          <p className="page__eyebrow">Code · Kendo · Photography</p>
          <h1>
            Yueting <span>Liao</span>
          </h1>
          <p className="home__hero__intro">
            I'm on a path toward harmony between mind, body, and observation.
            I build practical software, practice Kendo, and photograph the
            details that make a place feel alive.
          </p>
        </div>
        <figure className="home__hero__portrait">
          <img
            src={landingPortraitImg}
            alt="Yueting Liao in a warm, vintage halftone portrait"
          />
        </figure>
      </section>

      <LineBreak spacerColor="transparent" />

      <section className="home__journey">
        <div className="home__journey__intro">
          <p className="page__eyebrow">Movement</p>
          <h2 className="page__section-title">Journey</h2>
          <p>
            I’ve spent meaningful time in both the U.S. and China, each offering
            its own rhythm and way of life. From cities like New York, Los
            Angeles, Troy, Provo, and Houston to places abroad, every move has
            shaped how I see and live.
          </p>
          <div className="home__journey__legend">
            <div>
              <span className="legend__box lived" />
              <p>Lived</p>
            </div>
            <div>
              <span className="legend__box travelled" />
              <p>Travelled</p>
            </div>
          </div>
        </div>

        <div className="home__journey__map">
          <MapChart setTooltipContent={setContent} />
          <Tooltip id="map-tooltip" content={content} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
