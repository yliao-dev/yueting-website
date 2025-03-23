import "../styles/portfolio.css";
import "../styles/gallery.css";

import LineBreak from "../components/LineBreak";

import ProjectMap from "../components/portfolio/ProjectMap";
import { ProjectData } from "../data/portfolio/ProjectData";
import JourneyTimeline from "../components/Home/Timeline";

const PortfolioPage = () => {
  return (
    <>
      <div className="portfolio">
        <section className="portfolio__intro__text">
          <h1>Projects</h1>
          <p>
            Each project here starts with a practical need—or a spark of
            curiosity. I began coding while studying Computer Science at
            Rensselaer Polytechnic Institute, followed by two years of
            full-stack development work. I’m always open to collaborating on
            meaningful or fun projects.
          </p>
        </section>

        <section>
          <JourneyTimeline />
        </section>

        <LineBreak />
        <section className="portfolio__project-list">
          <ProjectMap projectData={ProjectData} />
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
